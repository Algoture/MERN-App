import mongoose from "mongoose";
const shopSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    countInStock: {
      type: Number,
      required: true,
    },
    shoppedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // This is the name of the model that we want to refer to  (User)
      //   model name created should be exact same as the name of the reference model
    },
    wishList: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // This is the name of the model that we want to refer to  (User)
      },
    ],
  },
  { timestamps: true }
);
export const Shop = mongoose.model("Shop", shopSchema);
