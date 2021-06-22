import mongoose, { Document, Schema } from 'mongoose';

export interface BookLean {
    _id?: string;
    title: string;
    author: string;
    isbn: string;
    checkedOut: boolean;
    locationID: string
    userID?: string
    createdAt?: Date;
    updatedAt?: Date;
}

export interface Book extends Document {
    title: string;
    author: string;
    isbn: string;
    checkedOut: boolean;
    location: string
    user?: string
    createdAt?: Date;
    updatedAt?: Date;
}

const schema = new Schema(
    {
        title: {
            type: String,
            trim: true,
            unique: true,
            index: true,
            required: true,
        }, 
        author: {
            type: String,
            trim: true,
            unique: false,
            index: true,
            required: true,
        }, 
        isbn: {
            type: String,
            trim: true,
            unique: true,
            index: true,
            required: true,
        }, 
        user: {
            type: String,
            trim: true,
            unique: false,
            index: true,
            required: false,
        }, 
        location: {
            type: String,
            trim: true,
            unique: false,
            index: true,
        },
        checkedOut: {
            type: Boolean,
            default: false,
            index: true,
        },
    },
    { timestamps: true },
);

const model = mongoose.model('Book', schema);
export default model;
