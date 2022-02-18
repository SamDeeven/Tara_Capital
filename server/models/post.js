const mongoose = require("mongoose");

//creating new schema for creating a post
const postSchema = new mongoose.Schema({
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    user: { type: "string", required: true },
}, { timestamps: true })

mongoose.model("Post", postSchema);