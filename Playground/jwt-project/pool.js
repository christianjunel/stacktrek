import pg from 'pg';

const connectDatabase = () => {
    const pool = new pg.Pool ({
        user: 'postgres',
        password: 'Iamatroll69asd!',
        database: 'somactive',
        host: 'localhost'
    });
    
    return pool;
}

export { connectDatabase };