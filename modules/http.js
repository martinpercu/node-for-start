const http = require('http');

http.createServer(router_1).listen(3000);

function router_1(req, res) {
    console.log('new request');
    console.log(req.url);

    switch (req.url) {
        case '/hello':
            res.write('Hello my friend....what can I do for you?');
            res.end();
            break;
        case '/exit':
            res.write('Bye bye my dear... see you in the future!!!!');
            res.end();
            break;
        default:
            res.write('Hey I do not know what to do with you... Sorry');
            res.end();
    }

    // res.writeHead(201, { 'Content-Type': 'text/plain'});

    // // This is the answer to client
    // res.write('I know how to use http NodeJS ! ! ! !');

    // res.end();
}

console.log('listening in port 3000');