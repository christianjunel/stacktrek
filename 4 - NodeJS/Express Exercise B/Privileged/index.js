import e from 'express';
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
	next();
}

app.use(getID)
app.use('/', router);

/* ==== Do not modify ==== */

// Create necessary middlewares
let userPriviledge;
const reqID = (req, res, next) => {
	userList.forEach(data => {
		if (data.id === req.userID) {
			userPriviledge = data.priviledges;
			//for checking
			console.log(req.userID, userPriviledge);
		}
	})
	next();
};

const idChecker = (req, res, next) => {
	if (req.method === 'GET'){
		if (userPriviledge.includes('VIEW') || userPriviledge.includes('MASTER')){
			res.send(`All goods. Privileges: ${userPriviledge}`);
		} else {
			res.status(403).send('Forbidden access. You don\'t have the privilege/s.');
		}
	} else if (req.method === 'POST') {
		if (userPriviledge.includes('INSERT') || userPriviledge.includes('MASTER')){
			res.send(`All goods. Privileges: ${userPriviledge}`);
		} else {
			res.status(403).send('Forbidden access. You don\'t have the privilege/s.');
		}
	} else if (req.method === 'PUT') {
		if (userPriviledge.includes('MODIFY') || userPriviledge.includes('MASTER')){
			res.send(`All goods. Privileges: ${userPriviledge}`);
		} else {
			res.status(403).send('Forbidden access. You don\'t have the privilege/s.');
		}
	} else if (req.method === 'DELETE') {
		if (userPriviledge.includes('DELETE') || userPriviledge.includes('MASTER')){
			res.send(`All goods. Privileges: ${userPriviledge}`);
		} else {
			res.status(403).send('Forbidden access. You don\'t have the privilege/s.');
		}
	}
	next(); 
};

// Add at least 4 API endpoints with different methods
router.get('/', [reqID, idChecker], (req, res) => {
	//for checking
	console.log('Homepage loaded...')
})

router.post('/', [reqID, idChecker], (req, res) => {
	//for checking
	console.log('Insert page loaded...')
})

router.put('/', [reqID, idChecker], (req, res) => {
	//for checking
	console.log('Modify page loaded...')
})

router.delete('/', [reqID, idChecker], (req, res) => {
	//for checking
	console.log('Delete page loaded...')
})

router.get('*', (req, res) => {
    res.status(404).send('Sorry, we cannot find this page.');
})

app.listen(8000, () => console.log('Listening at port 8000'))