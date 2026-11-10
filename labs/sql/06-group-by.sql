--Задание 1. Подсчитай общее количество площадок в venues, используя COUNT(*).
--Задание 2. Получи список городов и количество площадок в каждом городе.
--Задание 3. Получи venue_id и количество мероприятий на каждой площадке. Отсортируй результаты по количеству мероприятий от большего к меньшему.
--Подсказка: можно сортировать по псевдониму events_count.

SELECT
    venue_id,
    COUNT(*) AS events_count
FROM events
GROUP BY venue_id;

SELECT
    city,
    COUNT(*) AS venues_count
FROM venues
group by city;

SELECT
    venue_id,
    COUNT(*) AS events_count
FROM events
GROUP BY venue_id
ORDER BY events_count DESC;

SELECT COUNT(*) AS total_venues
FROM venues;