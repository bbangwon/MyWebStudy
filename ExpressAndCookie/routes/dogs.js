import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.send('All dogs');
});

router.post('/', (req, res) => {
    res.send('Create a new dogs');
});

router.get('/:id', (req, res) => {
    res.send('View a dogs');
});

export default router;