const fs = require('node:fs');

const source = fs.createReadStream(
    'labs/node-core/stream-test.txt',
    { highWaterMark: 16 * 1024 }
);

const destination = fs.createWriteStream(
    'labs/node-core/manual-copy.txt',
    { highWaterMark: 1024 }
);

source.on('data', (chunk) => {
    const canContinue = destination.write(chunk);

    if (!canContinue) {
        console.log('PAUSE: буфер заполнен');

        source.pause();
    }
});

destination.on('drain', () => {
    console.log('DRAIN: буфер освободился');

    source.resume();
});

source.on('end', () => {
    console.log('Чтение завершено');

    destination.end();
});

destination.on('finish', () => {
    console.log('Копирование завершено');
});

source.on('error', (err) => {
    console.error('Ошибка чтения', err.message);
    process.exitCode = 1;
    destination.destroy();
})

destination.on('error', (err) => {
    console.error('Ошибка записи', err.message);
    process.exitCode = 1;
    source.destroy();
})