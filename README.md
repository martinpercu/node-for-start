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
## FileSystem (fs)
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

## Operating system
- Example of know about the os with node.
- Is a file os.js

## Process
- In modules create process.js.
- Process is already in globals no need to "required"
- In this file examples to get the process.
- IMPORTANT!!!! once we are in process.on('exit') we are disconnected from event loop.

## Package NPM is odd 
- Create a new folder "packages".
- In packages folder new "npm"
- in this folder ===>
```sh
cd packages/npm
npm init
```
- This create a package.json
- Then if we install some npm here will add it as a dependency in the package.json. Also will create the package-lock.json
```sh
npm install is-odd
```
- ah!! Also this will create the folder node_modules with all packages needed. (in this case "is-odd" and "is-number").
- Then in npm folder create an index.js.
- In index.js we can invoke the modele with something like===> <br>
const isOddNumber = require('is-odd');<br>


## Modules require-old  & import-new
- This is an example of old and new ways to import the modules.
- The old is with "require" & the new is with "import".
- In package folder create a new folder "modules".
- In modules folder 2 index + 2 modules. (one with old way and the others with the new way).

## Useful Modules (bcrypt - moment - sharp)
- In package a new folder "utils"
```sh
npm init -y
npm install bcrypt
```
- New file bcrypt.js ===> bcrypt.hash use 3 parameters (string, rounds, function)
```sh
npm install moment
```
- New file moment.js ===> moment create an object to use dates.
```sh
npm install sharp
```
- New file sharp.js ===> useful to works with images.

## Buffer
- The buffer is the simple info in memory with the raw info.
- New folder "memory".
- New file buffer.js showing little bit how buffer is.

## Stream
- The streams are the informlation "traveling" to the memory.
- 2 files ===>
- stream_read.js ==> Example just for read a stream.
- stream_write.js ==> Example just for read get and write a stream.

# Tricks ??
## Benchmarking
- New folder "triks" 
- new file benchmarking.js
- In this file example how to use console.time() + console.timeEnd() to know process times.

## Error First
- Alway put the error as first argument. (VERY VERY IMPORTANT)
- new file errorFirst.js
- important!  ===> throw err NOT WORK with asynchronious functions


## Scrapping
- Create folder "tools"
- In folder tools create another folder "scrapping".
- In folder scrapping===>
```sh
npm init
```
- then in the same folder
```sh
npm i puppeteer
```
- Now create a file index.js
- In index.js create an asyc funtion autoexecutable.
-


