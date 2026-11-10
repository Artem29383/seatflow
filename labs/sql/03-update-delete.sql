--Измени название временной площадки на Новая тестовая арена через UPDATE.
--Измени её город на Москва отдельным запросом.
--Используй RETURNING *, чтобы увидеть результат обновления.
--Удали временную площадку через DELETE, указав её ID в WHERE.
--Выполни SELECT * FROM venues ORDER BY id; и убедись, что остались три исходные записи.

INSERT INTO venues (name, city)
VALUES ('Тестовая арена', 'Тверь')
RETURNING *;

UPDATE venues
SET name = 'Новая тестовая арена'
WHERE id = 4
RETURNING *;

UPDATE venues
set city = 'Москва'
WHERE id = 4
RETURNING *;

DELETE FROM venues
where id = 4;

SELECT * FROM venues
ORDER BY id;