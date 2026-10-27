import pg from 'pg';

const pool = new pg.Pool({
    host: '127.0.0.1',
    port: 5432,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    max: 5,
});

try {
    const result = await pool.query(
        'SELECT current_database() AS database, current_user AS username'
    );

    console.log(result.rows[0]);
} catch (error) {
    console.error('Database error:', error);
    process.exitCode = 1;
} finally {
    await pool.end();
}