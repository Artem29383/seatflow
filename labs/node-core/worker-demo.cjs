const { Worker } = require('node:worker_threads');
const path = require('node:path');

console.log('MAIN: начинаем работу');

// Создаём отдельный поток
const worker = new Worker(
    path.join(__dirname, 'cpu-worker.cjs'),
    {
        workerData: { durationMs: 4000 }
    }
);

console.log('MAIN: Worker запущен');

// Проверяем, что основной поток не заблокирован
const timer = setInterval(() => {
    console.log('MAIN: я продолжаю работать');
}, 500);

// Получаем результат от Worker
worker.on('message', (result) => {
    clearInterval(timer);

    console.log('MAIN: результат от Worker:', result);
});

worker.on('error', (error) => {
    clearInterval(timer);

    console.error('Ошибка Worker:', error.message);
    process.exitCode = 1;
});