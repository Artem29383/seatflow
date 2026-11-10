EXPLAIN ANALYZE
SELECT *
FROM events
WHERE venue_id = 1;

CREATE INDEX idx_events_venue_id
    ON events (venue_id);

SELECT *
FROM events
WHERE venue_id = 1;

SELECT indexname, indexdef
FROM pg_indexes
WHERE tablename = 'events';