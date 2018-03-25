var Recipe = require('../models/recipe');

module.exports = function(router) {

    // Adding New Recipe
    router.post('/recipes/add', function(req, res) {
        var recipe = new Recipe({
            name: req.body.name,
            description: req.body.description
        });

        if (req.body.name == null || req.body.name == '') {
            res.json({ success: false, message: 'You must enter name of the recipe' });
        } else if (req.body.description == null || req.body.description == '') {
            res.json({ success: false, message: 'You must enter description of the recipe' });
        } else {
            recipe.save(function(err) {
                if (err) {
                    res.json({ success: false, message: 'Something went wrong.' });
                } else {
                    res.json({ success: true, message: 'You added a new recipe.' });

                }
            })
        }
    });


    // Getting All Recipes
    router.get('/recipes', function(req, res) {
        Recipe.find({}, function(err, data) {
            if (err) {
                res.send('Error');
            } else {
                res.send(data);
            }
        })
    });

    // Getting Recipe by Id
    router.get('/recipes/:id', function(req, res) {
        var id = req.params.id;

        Recipe.findOne({ _id: id }, function(err, data) {
            if (err) {
                res.send('Error');
                return;
            } else {
                res.send(data);
            }
        })
    });

    // Updating Recipe by Id
    router.put('/edit/:id', function(req, res) {
        var id = req.params.id;
        var obj = req.body;

        Recipe.findOne({ _id: id }, function(err, data) {
            if (err) {
                res.send('Error');
                return;
            } else {
                Recipe.findByIdAndUpdate(id, { name: obj.name, description: obj.description, $push: {versions: {name: data.name, description: data.description}} }, function(err) {
                    if (err) {
                        res.json({ success: false, message: 'Error' });
                        return;
                    }
                    res.json({ success: true, message: 'Updated' });
                })
            }
        })
    });


    return router;
};