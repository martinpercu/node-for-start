# node-for-start
The most basic about node. (in order)

# ASYNC
## async
- Easy examples file to understand node.

## callback&callbackHell
- A callbackhell example.

## Promises
- A basic promises example.

## Async-await
- A basic async-await example. (is the way to put an order in the secuenciallity of process)

# Modules
## FileSystem
- Read, Write and Delete file implementation.

## Console
- Most used type of console. (log error count group etc etc).

## Errors
- Get errors in main process and in asyncprocess.

## Child Process
- Child process with exec, spawn.

## C++ (modules from C++)
- In modules folder create a new folder "natives"
- First install the "node-gyp"
```sh
npm i -g node-gyp
```
- Creation a source file===> https://nodejs.org/api/addons.html#addons_hello_world
- Create a "binding.gyp" modules/natives
- In modules/natives===>
```sh
node-gyp configure
```
- Now we have a "build" folder
- In modules/natives===>
```sh
node-gyp build
```
- The module should be compiled and we have now a binary file (build/Release/addon.node).
- Create a js file to import it and use the module....<br>
"const myAddon = require('./build/Release/addon');"<br>
"addon.hello()"<br>
Should print ===> world


## HTTP  Process
- Create a file http.js in the modules folder
- In this file just how to create a server.


