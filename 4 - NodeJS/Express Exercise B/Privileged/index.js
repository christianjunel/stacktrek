import express from 'express'
const app = express()
const router = express.Router();

const userList = [
	{ id: 0,  priviledges: ['MASTER'] },
	{ id: 1,  priviledges: ['VIEW'] },
	{ id: 2,  priviledges: ['VIEW', 'INSERT', 'MODIFY', 'DELETE'] },
	{ id: 3,  priviledges: ['VIEW', 'DELETE'] },
	{ id: 4,  priviledges: ['VIEW', 'INSERT'] },
	{ id: 5,  priviledges: ['VIEW'] },
	{ id: 6,  priviledges: ['MASTER'] },
	{ id: 7,  priviledges: ['MASTER'] },
	{ id: 8,  priviledges: ['VIEW'] },
	{ id: 9,  priviledges: [] },
	{ id: 10, priviledges: [] },
	{ id: 11, priviledges: ['VIEW', 'INSERT', 'MODIFY'] },
	{ id: 12, priviledges: ['VIEW', 'MODIFY'] },
	{ id: 13, priviledges: ['VIEW'] },
	{ id: 14, priviledges: ['VIEW', 'DELETE'] },
	{ id: 15, priviledges: ['VIEW'] }
]

/* ==== Do not modify ==== */
/* These are used to generate a simple id */

let curID = 0
const getID = (req, res, next) => {
	req.userID = curID
	curID = (curID + 7) % 16;	
	next()
}

app.use(getID)
app.use('/', router);

/* ==== Do not modify ==== */

// Create necessary middlewares
// ADD CODE HERE

// Add at least 4 API endpoints with different methods
// ADD CODE HERE

app.listen(8000, () => console.log('Listening at port 8000'))