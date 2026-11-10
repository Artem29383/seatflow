CREATE TABLE venues (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name TEXT NOT NULL,
    city TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO venues (name, city)
VALUES
    ('ВТБ Арена', 'Москва'),
    ('БКЗ Октябрьский', 'Санкт-Петербург'),
    ('Лужники', 'Москва');

-- Все площадки
SELECT * FROM venues;

-- Только названия и города
SELECT name, city FROM venues;

-- Площадки из Москвы
SELECT * FROM venues WHERE city = 'Москва';

SELECT
    NOW()::TIMESTAMPTZ AS current_time,
    current_setting('TimeZone') AS session_timezone;