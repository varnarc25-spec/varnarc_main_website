<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Log;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/check-memory', function () {
    return ini_get('memory_limit');
});

Route::middleware(['admin.token'])->group(function () {
    Route::post('/admin/cache/clear', function () {
        Artisan::call('config:clear');
        Artisan::call('cache:clear');
        Artisan::call('optimize:clear');
        Artisan::call('route:clear');

        Log::info('Cache cleared by IP: ' . request()->ip());

        return response()->json([
            'status' => 'success',
            'message' => 'All caches cleared.',
        ]);
    });

    Route::post('/admin/key/generate', function () {
        $newKey = 'base64:' . base64_encode(random_bytes(32));
        $envPath = base_path('.env');

        if (!File::exists($envPath)) {
            return response()->json(['status' => 'error', 'message' => '.env file not found'], 500);
        }

        $envContent = File::get($envPath);
        $updatedContent = preg_replace('/^APP_KEY=.*$/m', 'APP_KEY=' . $newKey, $envContent);

        if ($updatedContent === null) {
            return response()->json(['status' => 'error', 'message' => 'Regex failed'], 500);
        }

        File::put($envPath, $updatedContent);

        Artisan::call('config:clear');

        Log::warning('APP_KEY regenerated and updated by IP: ' . request()->ip());

        return response()->json([
            'status' => 'success',
            'message' => 'APP_KEY updated successfully.',
            'key' => $newKey,
        ]);
    });

    Route::post('/admin/migrate/run', function () {
        Artisan::call('migrate', ['--force' => true]);

        Log::info('Migrations run by IP: ' . request()->ip());

        return response()->json([
            'status' => 'success',
            'message' => 'Migrations executed successfully.',
            'output' => Artisan::output(),
        ]);
    });
});