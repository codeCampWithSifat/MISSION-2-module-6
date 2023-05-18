import { Model, Schema, model } from "mongoose";
import { IUser, IUserMethods, UserModel } from "./user.interface";


// type UserModel = Model<IUser, {}, IUserMethods>;

const userSchema = new Schema<IUser,UserModel,IUserMethods>({
    id: { type: String, required: true, unique: true },
    role: { type: String, required: true },
    password: { type: String, required: true },
    name: {
      firstName: { type: String, required: true },
      middleName: { type: String },
      lastName: { type: String, required: true },
    },
    dateOfBirth: { type: String, required: true },
    gender: { type: String, enum: ["Male", "Female"] },
    email: { type: String, required: true },
    contactNo: { type: String, required: true },
    emergencyContactNo: { type: String, required: true },
    presentAddress: { type: String, required: true },
    premanentAddress: { type: String, required: true },
  });

  userSchema.method('fullName', function fullName() {
    return this.name.firstName + ' ' + this.name.lastName;
  });

  // static
  userSchema.static('getStudentUsers',async function getStudentUsers() {
    const admins = await this.find({role: "student"});
    return admins ;
  })

  // create a model
  export const User = model<IUser, UserModel>("User", userSchema);