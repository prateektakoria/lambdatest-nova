<h1>Lambdatest Nova</h1>
<h3> About Project </h3>

<p>Laravel Nova (https://nova.laravel.com) is an excellent tool to create admin interfaces having usual CRUD applications in minutes. It can be extended to add custom functionalities too. With rich documentation (https://nova.laravel.com/docs/) and a very large ecosystem there are several thousands plugins/extensions which makes writing custom functionalities very easy.</p>

<p>We want you to create a custom tool in Nova which shows INR v/s USD, INR v/s GBP and INR v/s EUR currency rates in small widgets in a custom page. https://nova.laravel.com/docs/3.0/customization/tools.html </p>

<p>You can use the API endpoint: https://api.exchangeratesapi.io/latest?base=INR to fetch the exchange rates.

Through this exercise you will get to know:
1. How to build powerful backend interfaces quickly
2. How Vue.js works
3. How webpack works (to compile/build)</p>

<h3> Requirements </h3>
<p>This project has a few requirements you should be aware of before installing:

- Composer
- PHP 7.3+ </p>

<h3> Installation </h3>
<p>Follow these steps to install this project on your local machine.

- <b>git clone https://github.com/prateektakoria/lambdatest-nova.git</b> : Clone this repository using this command in your terminal: 
- <b>composer update</b> : Run this command to update all the dependencies of this project
- <b>cp .env.example .env</b> : Copy .env.example file to .env file using this command
- <b>php artisan key:generate</b> (This command will generate your application for the project)
- Update your database credentials in the .env file
- <b>npm install</b> : Run this command to get all the node modules in your root directory
- <b>cd /nova-components/CurrencyConverter</b> : Run this command to go to our tools directory
- <b>npm install</b> : Run this command to update node modules for our tool
- Go to your root directory again and run migrations
- <b>php artisan migrate</b>
- <b>php artisan serve</b> : Start the project
</p>


<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework.

If you don't feel like reading, [Laracasts](https://laracasts.com) can help. Laracasts contains over 1500 video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.

## Laravel Sponsors

We would like to extend our thanks to the following sponsors for funding Laravel development. If you are interested in becoming a sponsor, please visit the Laravel [Patreon page](https://patreon.com/taylorotwell).

### Premium Partners

- **[Vehikl](https://vehikl.com/)**
- **[Tighten Co.](https://tighten.co)**
- **[Kirschbaum Development Group](https://kirschbaumdevelopment.com)**
- **[64 Robots](https://64robots.com)**
- **[Cubet Techno Labs](https://cubettech.com)**
- **[Cyber-Duck](https://cyber-duck.co.uk)**
- **[Many](https://www.many.co.uk)**
- **[Webdock, Fast VPS Hosting](https://www.webdock.io/en)**
- **[DevSquad](https://devsquad.com)**
- **[Curotec](https://www.curotec.com/)**
- **[OP.GG](https://op.gg)**

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
