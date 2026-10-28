const http = require('node:http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    const url = new URL(req.url, 'http://localhost');

    switch (req.method) {
        case 'GET': {

            if (url.pathname === '/hello') {
                const name = url.searchParams.get('name');
                const age = url.searchParams.get('age');

                if (!name) {
                    res.statusCode = 400;
                    res.end(JSON.stringify({error: 'Name is required'}));
                    return;
                }

                const message = age
                    ? `Hello, ${name} is ${age} old`
                    : `Hello, ${name}`;

                res.statusCode = 200;
                res.end(JSON.stringify({message}));
                return;
            }

            if (url.pathname === '/health') {
                res.statusCode = 200;

                res.end(JSON.stringify({status: 'ok'}));
                return;
            }

            break;
        }
        case 'POST': {
            if (url.pathname === '/echo') {
                const MAX_BODY_BYTES = 1024 * 1024;

                const chunks = [];
                let receivedBytes = 0;
                let tooLarge = false;

                req.on('data', (chunk) => {
                    if (tooLarge) return;

                    receivedBytes += chunk.length;

                    if (receivedBytes > MAX_BODY_BYTES) {
                        tooLarge = true;

                        res.statusCode = 413;
                        res.end(JSON.stringify({"error":"Body too large"}));
                        return;
                    }

                    chunks.push(chunk);
                });

                req.on('error', (err) => {
                    console.error('Request stream error:', err);

                    if (res.writableEnded || res.destroyed) {
                        return;
                    }

                    res.statusCode = 400;
                    res.end(JSON.stringify({error: 'Request stream error'}));
                })

                req.on('end', () => {
                    if (tooLarge) return;

                    const body = Buffer.concat(chunks).toString('utf-8');

                    if (!body) {
                        res.statusCode = 400;
                        res.end(JSON.stringify({"error":"Body is required"}));
                        return;
                    }

                    let json;

                    try {
                        json = JSON.parse(body);
                    } catch (e) {
                        res.statusCode = 400;
                        res.end(JSON.stringify({"error":"Invalid JSON"}));
                        return;
                    }

                    res.statusCode = 200;
                    res.end(JSON.stringify(json));
                });

                return;
            }

            break;
        }
    }

    res.statusCode = 404;
    res.end(JSON.stringify({error: 'Not Found'}));
})

server.listen(3001, () => {
    console.log('server has been started on port 3001')
})