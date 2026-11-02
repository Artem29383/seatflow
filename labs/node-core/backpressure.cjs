const fs = require('node:fs');

const writer = fs.createWriteStream(
    'labs/node-core/backpressure-test.txt',
    { highWaterMark: 1024 }
);

const chunk = Buffer.alloc(4096, 'A');

const canContinue = writer.write(chunk);

console.log(canContinue);

writer.on('drain', () => {
    console.log('Буфер освободился: drain');
});

writer.on('finish', () => {
    console.log('Запись завершена');
});

writer.on('error', (error) => {
    console.error('Ошибка записи:', error.message);
    process.exitCode = 1;
});

writer.end();