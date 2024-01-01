const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const port = 3000

function calculateSum(counter){
    var sum=0;
    for(var i=0; i<counter; i++){
        sum = sum + i;
    }
    return sum;
}

// function middleware1(req,res,next){
//     console.log("from middleware "+ req.headers.counter);
//     res.send("Error")
// }

// app.use(middleware1);

app.use(bodyParser.json());

function handleFirstRequest(req,res){
    console.log(req.body) ;
    var counter = req.body.counter;
    var calculatedSum = calculateSum(counter);
    console.log(calculatedSum)
    var answer = "the sum is " +calculatedSum;
    res.send(answer);
}

function handleUser(req,res){
    res.send("hello");
}

//app.get('/handleSum',handleFirstRequest)
app.post('/handleFirstRequest',handleFirstRequest)

function started(){
    console.log(`Example app listening on port ${port}`)
}

app.listen(port, started); 