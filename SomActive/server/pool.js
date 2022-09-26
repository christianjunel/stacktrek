import  pg  from  "pg"
function connectDatabase(){
	const pool = new pg.Pool({
		user: 'postgres',
		password: 'Iamatroll69asd!',
		database: 'somactive',
		host: 'localhost',
		port: 5432
	});
		return pool
	}
export { connectDatabase }