import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.send('All shelters');
});

router.post('/', (req, res) => {
    res.send('Create a new shelter');
});

router.get('/:id', (req, res) => {
    res.send('View a shelter');
});

export default router;