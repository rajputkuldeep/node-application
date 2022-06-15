'use strict';

const express = require('express');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
app.get('/', (_, res) => {
    res.send({
        message: "It's on local!",
    });
});

app.get('/delayed', async (_, res) => {
    const SECONDS_DELAY = 3000;

    await new Promise((resolve) => {
        setTimeout(() => resolve(), SECONDS_DELAY);

    });

    res.send({ message: 'delayed response' });
});

const server = app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});