CREATE TABLE seats (
                       id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
                       event_id BIGINT NOT NULL REFERENCES events(id),
                       seat_number TEXT NOT NULL,
                       status TEXT NOT NULL DEFAULT 'available',

                       CONSTRAINT chk_seat_status
                           CHECK (status IN ('available', 'reserved')),

                       CONSTRAINT uq_event_seat
                           UNIQUE (event_id, seat_number)
);

INSERT INTO seats (event_id, seat_number)
VALUES (1, 'A-15')
    RETURNING *;

SELECT * FROM seats;