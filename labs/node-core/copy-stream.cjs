const fs = require('node:fs');

const source = fs.createReadStream(
    'labs/node-core/stream-test.txt'
);

const destination = fs.createWriteStream(
    'labs/node-core/stream-copy.txt'
);

destination.on('finish', () => {
    console.log('СКОПИРОВАЛИ!');
})

source.on('error', (e) => {
    console.error('Ошибка чтения', e.message);
    process.exitCode = 1;
    destination.destroy();
})

destination.on('error', (e) => {
    console.error('Ошибка записи', e.message);
    process.exitCode = 1;
    source.destroy();
})

source.pipe(destination);
