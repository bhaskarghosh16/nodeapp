console.log('Inside routes.js');

var game = require('./models/todo');

function getGames(res) {
    console.log('Getting games');

    game.find(function (err, todos) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            alert('error is here');
            res.send(err);
        }

        res.json(todos); // return all todos in JSON format
    });
};

module.exports = function (app) {

    // api ---------------------------------------------------------------------
    // get all todos
    app.get('/api/games', function (req, res) {
        // use mongoose to get all todos in the database
        getGames(res);
    });

    // create todo and send back all todos after creation
    app.post('/api/games', function (req, res) {

        // create a todo, information comes from AJAX request from Angular
        game.create({
            text: req.body.text,
            done: false
        }, function (err, todo) {
            if (err)
                res.send(err);

            // get and return all the todos after you create another
            getGames(res);
        });

    });

    // delete a todo
    app.delete('/api/games/:todo_id', function (req, res) {
        game.remove({
            _id: req.params.game_id
        }, function (err, todo) {
            if (err)
                res.send(err);

            getGames(res);
        });
    });

    // application -------------------------------------------------------------
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
};
