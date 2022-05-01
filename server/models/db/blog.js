import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
    //  _id: mongoose.Schema.Types.ObjectId,
    title: {
        required: true,
        type: String
    },
    content: {
        required: true,
        type: String
    }
})



export default mongoose.model('data', dataSchema)