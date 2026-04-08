<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title inertia>Varnarc – Digital Growth, SEO Audits & Financial Clarity for Businesses</title>
    <meta name="description"
        content="Discover Varnarc – your partner for high-performance web development, in-depth SEO audits, result-driven digital marketing, and expert financial & taxation services. Empower your brand with digital precision and financial clarity.">
    <meta name="keywords"
        content="Velzon, Inertia.js, Vue.js, Laravel, admin template, dashboard template, web application">
    <meta name="author" content="Themesbrand">

    <!-- Social Media Meta Tags -->
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://varnarc.com">
    <meta property="og:title" content="Varnarc – Digital Growth, SEO Audits & Financial Clarity for Businesses">
    <meta property="og:description" content="High-performance web development, powerful SEO audits, result-driven marketing, and expert financial services – all under one roof.">
    <meta property="og:image" content="https://www.varnarc.com/assets/og-image.jpg"> <!-- Replace with actual image URL -->

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:url" content="https://www.varnarc.com">
    <meta name="twitter:title" content="Varnarc – Digital Growth, SEO Audits & Financial Clarity for Businesses">
    <meta name="twitter:description" content="Discover Varnarc – your partner for high-performance web development, in-depth SEO audits, result-driven digital marketing, and expert financial & taxation services. Empower your brand with digital precision and financial clarity.">
    <meta name="twitter:image" content="https://www.varnarc.com/assets/og-image.jpg"> <!-- Replace with actual image URL -->


    <!-- App favicon -->
    <link rel="shortcut icon" href="{{ URL::asset('image/icon_n.png') }}">

    <!-- Scripts -->
    @routes
    @vite(['resources/js/app.js', "resources/js/Pages/{$page['component']}.vue"])
    @inertiaHead
</head>

<body>
    @inertia
</body>

</html>
