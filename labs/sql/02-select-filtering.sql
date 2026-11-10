--Получи все площадки Москвы.
--Получи площадки, отсортированные по id от большего к меньшему. Подсказка: DESC.
--Получи только две первые площадки при сортировке по id ASC.
--Получи вторую площадку при сортировке по id ASC, используя LIMIT и OFFSET. Подсказка: OFFSET 1 пропускает одну строку.

--SELECT name, city
--FROM venues
--WHERE city = 'Москва'
--ORDER BY name ASC
--    LIMIT 1;

SELECT name
FROM venues
WHERE city = 'Москва';

SELECT id, name
FROM venues
ORDER BY id ASC;

SELECT id, name
FROM venues
ORDER BY id ASC
OFFSET 1
LIMIT 1;

SELECT id, name
FROM venues
ORDER BY id ASC
LIMIT 2;
