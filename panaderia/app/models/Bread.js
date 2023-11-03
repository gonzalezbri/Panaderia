import mongoose, { Schema, mongo } from "mongoose"

const breadSchema = new Schema(
    {
        title: String,
        price: String,
        description: String,

    },
    {
        timestamps:true,
    }
)

const Bread = mongoose.models.Bread || mongoose.model("Bread", breadSchema);

export default Bread;
