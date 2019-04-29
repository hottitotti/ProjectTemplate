const express = require('express');
const app = express();
const db = require('./database.js');
const bodyParser = require('body-parser');


//from nats solo 
// app.get('/', (request, response) => {
//     db.query('SELECT word, link FROM "public"."vocab" ', (err,data) => {
//         response.send(data);
//     })

app.use(function (request, response, next) {
    response.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    response.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false})); 

app.post('/signup' , (request, response) => {
    // Unpack the request inforatmion
    const username = request.body.username;
    const password = request.body.password;
    // Write our query
    const checkUserquery = `SELECT username from users WHERE username='${username}'`;

    db.query(checkUserquery, (err, data) => {
        if (err) {
            console.log('database error')
            response.send(err);
        }

        // if username already exists 
        else if (data.rows.length > 0) {
            response.send('this username is already taken');
        }

        //if username is new and needs to be added to db
        else if (data.rows.length === 0) {
            const addUserQuery = `INSERT INTO users (username, password) VALUES ('${username}', '${password}') RETURNING *`;
            db.query(addUserQuery, (err, queryResult) => {
                if (err) {
                    console.log('database error')
                    response.send(err);
                } else {
                    const userNameAndId = {
                        username: queryResult.rows['username'],
                        _userid: queryResult.rows['_userid']
                    }
                    response.send(userNameAndId);
                }
            })
        }
    })
})

app.post('/login' , (request, response) => {

})

app.get('/tickets' , (request, response) => {

})

app.post('/tickets' , (request, response) => {

})

app.get('/comments' , (request, response) => {

})

app.post('/comments' , (request, response) => {

})



app.listen(3000);