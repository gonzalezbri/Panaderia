import mongoose, { Schema } from "mongoose";

const quoteSchema = new Schema ({
    fullName: {
        type: String,
        required: [true, "Name is required."],
        trim: true,
        minLength: [2, "Name must be larger than 2 Characters"],
        maxLength: [20, "Name must be less than 20 Characters"]
    },

    email: {
        type: String,
        required: [true, "Email is required"],
        match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "Invalid email address"],
    },

    message: {
        type: String,
        required:[true, "Message is required"],
    },

    date: {
        type: Date,
        default: Date.now,
    },
})

const Quote = mongoose.models.Quote || mongoose.model("Quote", quoteSchema);

export default Quote;