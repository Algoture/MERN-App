import mongoose, { Schema } from "mongoose";
const videoSchema = new Schema(
  {
    videoFile: {
      type: String, //cloudinary url
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String, //cloudinary url
      required: true,
    },
    duration: {
      type: Number, //cloudinary url
      required: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    // likes: {
    //   type: Number,
    //   default: 0,
    // },
    // dislikes: {
    //   type: Number,
    //   default: 0,
    // },
    // comments: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: "Comment",
    //   },
    // ],
    isPublished: {
      type: Boolean,
      default: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);
export const Video = mongoose.model("Video", videoSchema);
