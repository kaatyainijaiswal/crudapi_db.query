const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const routes=require('./routes');

const app=express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api',routes);

app.listen(3000,()=>{
    console.log('Server running on port');
});