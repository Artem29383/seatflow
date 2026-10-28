const http = require('node:http');

const server = http.createServer((req, res) => {
    console.log(req.method, req.url);

    switch (req.method) {
        case 'GET': {
            res.setHeader('Content-Type', 'application/json');

            if (req.url === '/health') {
                res.statusCode = 200;

                res.end(JSON.stringify({status: 'ok'}));
            }

            if (req.url === '/unknown') {
                res.statusCode = 404;

                res.end(JSON.stringify({error: 'Not Found'}));
            }
            break;
        }
    }

})

server.listen(3001, () => {
    console.log('server has been started on port 3001')
})