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

function calculateMul(counter){
    var answer = 1;
    for(var i = 1; i<=counter; i++){
        answer = answer * i;
    }
    return answer;
}

// function middleware1(req,res,next){
//     console.log("from middleware "+ req.headers.counter);
//     res.send("Error")
// }

// app.use(middleware1);

app.use(bodyParser.json());

function handleFirstRequest(req,res){
    
    var counter = req.body.counter;
    
    var calculatedSum = calculateSum(counter);
    var calculatedMul = calculateMul(counter);

    var answerObject = {
        sum: calculatedSum,
        mul: calculatedMul,
    }
    res.status(200).send(answerObject)
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