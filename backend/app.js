const express = require('express');
const cors = require('cors');


const app = express();
const port = 3005;

app.use(cors);

app.get('/', (req, res) => { 
    res.send('Hello World!');
});

app.get('/jobs', (req, res) => { 
    res.send('Hello World!');
});


app.post('/jobs', (req, res) => { 
    const { company,
            minSalary, 
            maxSalary,
            languages,
            remote_hybrid_presencial,
            jobTitle,
            job_description} = req.body;

    


    res.send('Hello World!');
});



app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
})