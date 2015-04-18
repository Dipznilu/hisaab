//RequireJS 
var express = require('express');
var app = express();

/**
 * Root path for the app.
 * @param  {Object} req  it is the request object passed by the express middleware
 * @param  {Object} res response object to be sent to the client
 * @return {Object}      appropriate response
 */
app.get('/', function(req, res) {
    return res.status(404).json('Hello World');
});

/**
 * get the list of all the teams
 * @param  {Object} req  it is the request object passed by the express middleware
 * @param  {Object} res response object to be sent to the client
 * @return {Object}      appropriate response
 */
app.get('/teams', function(req, res) {
    var teams = [{
        name: 'mac'
    }, {
        name: 'django'
    }, {
        name: 'hunters'
    }];
    res.status(200).json(teams);
});

/**
 * return a list of members for a given team
 * @param  {Object} req  it is the request object passed by the express middleware
 * @param  {Object} res response object to be sent to the client
 * @return {Object}      appropriate response
 */
app.use('/:team/members', function(req, res) {
    console.log(req.params.team);
    var members = {
        'mac': [{
            name: 'Chaitanya'
        }, {
            name: 'Priyanka'
        }, {
            name: 'Swati'
        }, {
            name: 'Nivedita'
        }],
        'django': [{
            name: 'Utkarsh'
        }, {
            name: 'Manisha'
        }, {
            name: 'Rajhans'
        }, {
            name: 'rutu'
        }],
        'hunters': [{
            name: 'Deepesh'
        }, {
            name: 'Abhijeet'
        }, {
            name: 'Yash'
        }, {
            name: 'Sanket'
        }]
    };
    res.status(200).json(members[req.params.team]);
});


app.listen(3000);
