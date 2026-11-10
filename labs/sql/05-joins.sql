--SELECT
--    events.title,
 --   venues.name
--FROM events
 --        INNER JOIN venues
 --                   ON events.venue_id = venues.id;

--Задание 1. Получи название мероприятия и название площадки через INNER JOIN.
--Задание 2. Получи id мероприятия, его title, name площадки и город площадки. Используй псевдонимы таблиц:
--Задание 3. Получи только мероприятия, которые проходят в Москве. Здесь понадобятся одновременно JOIN и WHERE.

SELECT
    events.title,
    venues.name
FROM events
    INNER JOIN venues
        ON events.venue_id = venues.id;

SELECT
    events.id,
    events.title,
    venues.name,
    venues.city
FROM events
         INNER JOIN venues
                    ON events.venue_id = venues.id;

SELECT
    events.title
FROM events
         INNER JOIN venues
                    ON events.venue_id = venues.id
        WHERE venues.city = 'Москва';