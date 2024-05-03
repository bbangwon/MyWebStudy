import express from 'express';
const router = express.Router();

router.use((req, res, next) => {
    if(req.query.isAdmin) {
        return next();
    }
    res.send('Sorry, you are not an admin');    
});

router.get('/topsecret', (req, res) => {
    res.send('This is a top secret');
});

router.get('/deleteeverything', (req, res) => {
    res.send('Delete everything');
});

export default router;