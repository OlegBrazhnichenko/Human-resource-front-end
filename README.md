# Human resource

Be sure that you are already set up back-end part of the project that you can find on [this link](https://github.com/OlegBrazhnichenko/Human-resource-back-end)

## Installation

The following instructions are written for ubuntu. You can see useful links for installation
for other platform at the end of page.

### 1. Clone this repository to your directory.
### 2. Install npm
You can use this commands to install npm on ubuntu via terminal.
```
sudo apt-get update
sudo apt-get install nodejs
sudo apt-get install npm
```
### 3. Install all dependencies
cd to your directory with project and then run:
```
npm install
```
wait a minute for npm to install all your dependencies
### 4. Local http server
If you haven't any local server you can install and use a vary convenience terminal command http-server
To install it run
```
 npm install http-server -g
```
Then you can simply run in your project directory next command to set up local server
```
http-server
```
After local server start, you will see something like that
```
Starting up http-server, serving ./
Available on:
  http://127.0.0.1:8080
  http://192.168.0.104:8080
Hit CTRL-C to stop the server
```
Now you can visit http://127.0.0.1:8080 and see your project running on local server

#### WARNING
Note that URL provided by http-server command have to be the same with the domain url in app.service.js
If your local server will run on the other URL feel free to correct domain url in app.service.js

## Useful links for installation on mac and windows
### MAC OS
* [npm install](https://www.npmjs.com/package/npm#super-easy-install)
* [local web server set up](https://www.npmjs.com/package/local-web-server)
### WINDOWS
* [npm install](https://www.npmjs.com/package/npm#super-easy-install)
* [Easiest way to install web server on windows](https://blog.udemy.com/xampp-tutorial/)