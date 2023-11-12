import mongoose from 'mongoose';


const UserShema = new mongoose.Schema({

    firstName: {
        type: String,
        required: true,
        min: 2,
        max: 50,
    },
    lastName: {
        type: String,
        required: true,
        min: 2,
        max: 50,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        max: 50,
    },
    password: {
        type: String,
        required: true,
        min: 5,
    },
    friends: {
        type: Array,
        default: [],
    },
    location: String,
    occupation: String,
    viewdProfile: Number,
    impressions: Number,
},
    { timestamps: true }
);

const User = mongoose.model("User", UserShema);
export default User;