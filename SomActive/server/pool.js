import  pg  from  "pg"
import dotenv from "dotenv"

const prodConfig = {
	connectionString : process.env.DATABASE_URL,
	ssl: {
		rejectUnauthorized: false
	}
}

function connectDatabase(){
	// const pool = new pg.Pool({
	// 	user: 'postgres',
	// 	password: 'Iamatroll69asd!',
	// 	database: 'somactive',
	// 	host: 'localhost',
	// 	port: 5432
	// });
	const pool = new pg.Pool(prodConfig)
		return pool
	}
export { connectDatabase }