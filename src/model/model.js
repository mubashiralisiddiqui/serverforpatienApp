import mongooose from "mongoose";

const UserSchema = new mongooose.Schema({
    username: { type: String },
    password: { type: String },
    user_id: { type: String, unique: true }
})

export const pSchema = new mongooose.Schema({
    patientName: { type: String },
    patientAge: { type: Number },
    gender: { type: String },
    disease: { type: String },
    date: {
        type: Date,
        default: Date.now
    },
})

export const UserModel = mongooose.model('myuser', UserSchema);