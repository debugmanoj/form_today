import mongoose from "./makeConnection.js";

const formData=new mongoose.Schema(
    {
        name:{
            type:String,
        }
    },
    {
        collection: "formData",
        versionKey: false,
      }

)

const formSchema = mongoose.model("formData", formData);
export default formSchema;
