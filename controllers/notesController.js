const mongoose = require("mongoose");
const express = require("express");
const noteModel = require("../model/notesModel");
const asyncHandler = require("express-async-handler");

// @POST a notes
const postNotes  = asyncHandler (async (req,res) => {
    const {notes} = req.body;
    if (!notes) {
        res.json({"messon" : "notes are empty","status" : false});
        console.error("Notes are empty");
    }
    const note = await noteModel.create(
        {notes}
    );
    res.json({"message" : note,"status" : true});
    console.log("Notes are added successfully");
});

const getNotes = asyncHandler(async (req,res) => {
    const allNotes =await noteModel.find({}, { notes: 1, _id: 0 });
    if (!allNotes) {
        res.json({"messgae" : "NO RECENT NOTES","status" : false});
        throw new Error("No New Error");
    }
    console.log(`Notes are \n ${allNotes}`);
    res.json({"message":allNotes,"status" : true});
})

module.exports = {postNotes,getNotes};
