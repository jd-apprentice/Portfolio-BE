import pkg from "mongoose";
const { Schema, model } = pkg;

const InfoScheema = new Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    full_name: { type: String, required: false },
    about: { type: String, required: true },
    role: { type: String, required: false },
    picture: { type: String, required: false },
    socials: {
      linkedin: { type: String, required: true },
      twitter: { type: String, required: false },
      github: { type: String, required: true },
      codewars: { type: String, required: false },
      platzi: { type: String, required: false },
      steam: { type: String, required: false },
    },
  },
  { timestamps: true, versionKey: false }
);

export default model("Info", InfoScheema);
