--Все площадки и количество мероприятий. Используй LEFT JOIN, GROUP BY и COUNT(e.id).
--    В результате должны присутствовать все три площадки, включая БКЗ Октябрьский с нулём мероприятий.

--Площадки, где минимум два мероприятия. Используй LEFT JOIN, GROUP BY и HAVING.
--    Ожидаем ВТБ Арену с двумя мероприятиями.

--Площадки, на которых нет мероприятий. Используй LEFT JOIN, GROUP BY и HAVING COUNT(e.id) = 0.
--    Ожидаем БКЗ Октябрьский.

SELECT
    v.name,
    COUNT(e.id) AS events_count
FROM venues v
         LEFT JOIN events e
                   ON v.id = e.venue_id
GROUP BY v.id, v.name
ORDER BY v.id;

SELECT
    v.name,
    COUNT(e.id) AS events_count
FROM venues v
    LEFT JOIN events e
        ON v.id = e.venue_id
GROUP BY v.id, v.name
HAVING COUNT(e.id) >= 2;

SELECT
    v.name,
    COUNT(e.id) AS events_count
FROM venues v
         LEFT JOIN events e
                   ON v.id = e.venue_id
GROUP BY v.id, v.name
HAVING COUNT(e.id) = 0;

EXPLAIN
SELECT *
FROM events
WHERE venue_id = 1;

EXPLAIN ANALYZE
SELECT *
FROM events
WHERE venue_id = 1;