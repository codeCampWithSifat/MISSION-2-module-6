import { HydratedDocument, Model } from "mongoose";

export interface IUser {
    id: string;
    role: "student";
    password: string;
    name: {
      firstName: string;
      middleName?: string;
      lastName: string;
    };
    dateOfBirth?: string;
    gender: "Male" | "Female";
    email: string;
    contactNo: string;
    emergencyContactNo: string;
    presentAddress: string;
    premanentAddress: string;
  }

  
  // instance methods
  export interface IUserMethods {
    fullName(): string;
  }
  
  // static methods
  export interface UserModel extends Model<IUser, {}, IUserMethods> {
   getStudentUsers(): Promise<HydratedDocument<IUser, IUserMethods>>;
 }