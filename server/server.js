const express = require('express');
const app = express();
const db = require('./database.js');
const bodyParser = require('body-parser');

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
    // Unpack the request inforatmion
    const username = request.body.username;
    const password = request.body.password;
    // Write our query
    const checkUserPwQuery = `SELECT username, _userid from users WHERE username='${username}' AND password='${password}'`;

    db.query(checkUserPwQuery, (err, queryResult) => {
        if (err) {
            console.log('database error')
            response.send(err);
        }

        // if username and password are correct
        else if (queryResult.rows.length > 0) {
            console.log('in the correct dealio');
            const userNameAndId = {
                username: queryResult.rows[0]['username'],
                _userid: queryResult.rows[0]['_userid']
            }
            response.send(userNameAndId);
        }

        //if username and/or password invalid 
        else {
            console.log('in the invalid dealio');
            response.send('username and/or password invalid')
        }
    })

})

app.get('/tickets' , (request, response) => {
    const ticketQuery = 'SELECT * FROM tickets';
    db.query(ticketQuery, (err, queryResult) => {
        console.log('dis be query result rows degg :', queryResult.rows)
        if (err) {
            console.log('database error')
            response.send(err);
        }
        else {
            response.send(queryResult.rows)
        }
    })
})

app.get('/tickets/:ticketid' , (request, response) => {
    const ticketId = request.params.ticketid;
    const ticketQuery = `SELECT * FROM tickets WHERE _ticketid=${ticketId}`;
    db.query(ticketQuery, (err, queryResult) => {
        console.log('dis be query result rows degg :', queryResult.rows)
        if (err) {
            console.log('database error')
            response.send(err);
        } else if (queryResult.rows.length === 0){
            response.send('couldn\'t find ticket')        
        }
        else {
            response.send(queryResult.rows[0])
        }
    })
})

app.post('/tickets' , (req, response) => {
    const addTicketQuery = `INSERT INTO tickets (user_id, prob_title, prob_desc, resolved, react, redux, html, css, postgresql, mongo, node, express, webpack, git, gulp, testing, jquery) VALUES (${req.body.user_id}, '${req.body.prob_title}', '${req.body.prob_desc}', ${req.body.resolved}, ${req.body.react}, ${req.body.redux}, ${req.body.html}, ${req.body.css}, ${req.body.postgresql}, ${req.body.mongo}, ${req.body.node}, ${req.body.express}, ${req.body.webpack}, ${req.body.git}, ${req.body.gulp}, ${req.body.testing}, ${req.body.jquery})`; 
    db.query(addTicketQuery, (err, queryResult) => {
        if (err) {
            console.log('database error');
            response.send(err);
        } else {
            response.send('ticket successfully added to database')
        }
    })

})

app.get('/comments' , (request, response) => {
    const commentQuery = 'SELECT * FROM comments'
    db.query(commentQuery, (err, queryResult) => {
        if (err) {
            console.log('database error')
            response.send(err);
        }
        else {
            response.send(queryResult.rows)
        }
    })
})

app.post('/comments' , (req, response) => {
    const addCommentQuery = `INSERT INTO comments (user_id, ticket_id, comment_desc, correct) VALUES (${req.body.user_id}, ${req.body.ticket_id}, '${req.body.comment_desc}', ${req.body.correct})`;
    db.query(addCommentQuery, (err, queryResult) => {
        if (err){
            console.log('database error');
            response.send(err);
        } else {
            response.send('comment successfully added to database')
        }
     })
})



app.listen(3000);