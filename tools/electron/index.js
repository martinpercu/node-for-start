const { app, BrowserWindow } = require('electron');

let mainWindow;

app.on('ready', createMainWindow);

function createMainWindow() {
    mainWindow = new BrowserWindow({
        width: 760,
        height: 540
    });

    mainWindow.loadFile('index.html');
}