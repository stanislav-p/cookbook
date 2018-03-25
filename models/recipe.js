var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RecipeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    versions: {
        type: Array,
        default: []
    },
    date: {
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model('Recipe', RecipeSchema);




