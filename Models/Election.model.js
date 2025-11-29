const mongoose = require('mongoose');

const electionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    candidates: [
        {
            type: String,
            required: true
        }
    ],
    status: {
        type: String,
        enum: ['upcoming', 'running', 'ended'],
        default: 'upcoming'
    }
}, { timestamps: true });

module.exports = mongoose.model("Election", electionSchema);
