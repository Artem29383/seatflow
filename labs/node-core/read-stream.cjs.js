const fs = require('node:fs');

// const stream = fs.createReadStream('package.json');
const stream = fs.createReadStream(
    'labs/node-core/stream-test.txt',
    { highWaterMark: 16 * 1024 });

let totalBytes = 0;
let chunksCount = 0;

stream.on('data', (chunk) => {
    console.log('Получен chunk:', chunk.length)

    totalBytes += chunk.length;
    chunksCount++;
});

stream.on('end', () => {
    console.log('Чтение завершено');
    console.log(`Всего байт: ${totalBytes}`);
    console.log(`Количество chunks: ${chunksCount}`);
});

stream.on('error', (error) => {
    console.error('Ошибка:', error.message);
});