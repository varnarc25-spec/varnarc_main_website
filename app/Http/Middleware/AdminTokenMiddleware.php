<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class AdminTokenMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        $expectedToken = env('ADMIN_SECRET_TOKEN');

        if ($request->header('X-Admin-Token') !== $expectedToken) {
            abort(403, 'Unauthorized');
        }

        return $next($request);
    }
}
