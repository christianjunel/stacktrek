import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();

const auth = (req, res, next) => {
    const token = req.header("Authorization");
    if (!token) {
        return res.status(403).json(({ err: 'Invalid Token'}));
    }

    try {
        //this will take the token from the Authorization header then will use
		//jwt.verify function to process it
		jwt.verify(token.slice(7), process.env.jwtSecret, (err, user) => {
            if(err) return  res.sendStatus(403)
                //this will store the user payload in the request
                req.user = user
            next()
        });
    } catch {
        res.status(401).json({ error:  err.message });
    }
}

export { auth };