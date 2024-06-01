const mongoose = require("mongoose");


const notesSchma = new mongoose.Schema({
    notes : {
        type : Array
    }
}
);

module.exports = mongoose.model("AllNotes",notesSchma);