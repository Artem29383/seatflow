const fs = require('node:fs');
const {pipeline} = require('node:stream/promises');

const input = process.argv[2] ?? 'labs/node-core/stream-test.txt';
const output = process.argv[3] ?? 'labs/node-core/pipeline-copy.txt';

async function main() {
    const source = fs.createReadStream(input);
    const destination = fs.createWriteStream(output);

    try {
        await pipeline(source, destination);

        console.log('Копирование завершено!');
    } catch (error) {
        console.error('Ошибка копирования:', error.message);
        process.exitCode = 1;
    }
}

main();