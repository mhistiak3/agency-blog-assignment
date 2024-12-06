import mongoose from "mongoose";

const memberSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    image: {
      type: Object,
      required: true,
    },
    socialMedia: {
      type: Object,
      required: true,
    },
  },
  { timestamps: true }
);
const Member = mongoose.model("Member", memberSchema);
export default Member;
