--BEGIN;
--UPDATE venues
--SET city = 'Тверь'
--WHERE id = 1;
--SELECT id, name, city
--FROM venues
--WHERE id = 1;
--ROLLBACK;


-- BEGIN;
--
-- INSERT INTO venues (name, city)
-- VALUES ('Транзакционная арена', 'Казань')
-- RETURNING *;
--
-- ROLLBACK;
--
-- SELECT *
-- FROM venues
-- WHERE name = 'Транзакционная арена';

BEGIN;

INSERT INTO venues (name, city)
VALUES ('Транзакционная арена', 'Казань')
RETURNING *;

COMMIT;

SELECT *
FROM venues
WHERE name = 'Транзакционная арена';

DELETE from venues where name = 'Транзакционная арена';

