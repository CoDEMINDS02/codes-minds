import mongoose from "mongoose";

const webSeriesSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      default: "",
    },
    episodeNumber: {
      type: Number,
      default: 0,
    },
    images: {
      type: [String],
      default: [],
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
);

export default mongoose.model("WebSeries", webSeriesSchema);
