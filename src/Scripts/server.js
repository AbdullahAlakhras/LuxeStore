import express from 'express';
import fs from 'fs/promises';
import path from 'path';

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/read', async (req, res) => {
    try {
        const data = await fs.readFile(path.join(__dirname, 'data.json'), 'utf8');
        res.json(JSON.parse(data));
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/write', express.json(), async (req, res) => {
    const newData = req.body;
    try {
        await fs.writeFile(path.join(__dirname, 'data.json'), JSON.stringify(newData, null, 2), 'utf8');
        res.json({ message: 'Data written successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
