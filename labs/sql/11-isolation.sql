CREATE TABLE IF NOT EXISTS isolation_lab (
                                             id INTEGER PRIMARY KEY,
                                             status TEXT NOT NULL
);

INSERT INTO isolation_lab (id, status)
VALUES (1, 'available')
    ON CONFLICT (id)
DO UPDATE SET status = EXCLUDED.status;