const http = require('node:http');
const { performance } = require('node:perf_hooks');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');

    if (req.method === 'GET' && req.url === '/health') {
        res.end(JSON.stringify({ status: 'ok' }));
        return;
    }

    if (req.method === 'GET' && req.url === '/compute') {
        console.log('Начались вычисления');

        const started = performance.now();

        while (performance.now() - started < 4000) {
            // Ничего не делаем, просто ждем
        }

        const durationMs = Math.round(performance.now() - started);

        res.end(JSON.stringify({ durationMs }));
        return;
    }

    res.statusCode = 404;
    res.end(JSON.stringify({ error: 'Not Found' }));
});

server.listen(3002, () => {
    console.log('CPU server started on port 3002');
});