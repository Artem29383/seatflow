CREATE TABLE events (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title TEXT NOT NULL,
    venue_id BIGINT NOT NULL references venues(id)
);

INSERT INTO events (title, venue_id)
VALUES
    ('Рок-концерт', 1),
    ('Музыкальный фестиваль', 1),
    ('Комедийное шоу', 3);