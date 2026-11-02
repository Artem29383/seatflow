const { parentPort, workerData } = require('node:worker_threads');
const { performance } = require('node:perf_hooks');

const started = performance.now();

// Здесь работает отдельный JavaScript-поток
while (performance.now() - started < workerData.durationMs) {
    // Имитируем тяжёлое вычисление
}

const durationMs = Math.round(performance.now() - started);

// Отправляем результат основному потоку
parentPort.postMessage({ durationMs });