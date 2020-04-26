import mongoose from "mongoose";
import mongooseSequence from "mongoose-sequence";

const Schema = mongoose.Schema;
const AutoIncrement = mongooseSequence(mongoose);

const progressModel = new Schema({
    _id: Number,
    height: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    headCircumference: {
        type: Number,
        required: true
    },
    dataProgress: {
        type: Date,
        required: true
    },
    account: {
        id: {
            type: Number,
            required: true
        },
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        dateBirth: {
            type: Date,
            required: true
        },
        gender: {
            type: String,
            required: true
        }
    }
}, {
    _id: false
});

progressModel.plugin(AutoIncrement, {
    collection_name: "progress_counter"
});
export default mongoose.model("progress", progressModel);