# SeatFlow Web

React + Vite + TypeScript + styled-components. Это демонстрационный фронтенд учебного проекта SeatFlow.

## Запуск

Из корня репозитория:

```powershell
pnpm install
pnpm dev
```

Фронтенд: http://localhost:5173, API: http://localhost:3000.

## Первое задание

В файле `src/features/health/api/health.api.ts` реализуй:

- `getApiHealth()` → `GET /api/v1/health`
- `getDatabaseHealth()` → `GET /api/v1/health/db`

Для HTTP-запросов используй `getJson<T>()` из `src/shared/api/http.ts`.
Верни типизированные результаты, не глуши ошибки. После реализации нажми **Проверить соединение** в блоке лаборатории.

Данные афиши и схема зала пока демонстрационные и не связаны с Backend.
Для переопределения адреса API скопируй `.env.example` в `.env` и укажи `VITE_API_BASE_URL`. Не клади в Vite env секреты.

## Структура

- `app/` — глобальные стили и тема.
- `pages/` — композиция экранов.
- `widgets/` — отдельные блоки UI.
- `features/health/` — типы ответов и клиент для health API, состояние проверки.
- `shared/api/` — базовый HTTP-клиент.
- `shared/ui/` — общие styled-components.

Здесь нет реального бронирования и реальных платежей — это будущие этапы обучения.
