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
- Open <b>localhost:8000</b> in your browser. Click on the first Link.
</p>

![ScreenShot](/images/screenshot-1.jpg)

![ScreenShot](/images/screenshot-2.jpg)

![ScreenShot](/images/screenshot-3.jpg)

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
