import { IUser } from "./user.interface";
import { User } from "./user.model";

export const createUserToDB = async (payload: IUser): Promise<IUser> => {
  const user = new User(payload);
//   console.log(user.fullName())  // custome instance methods  it is
  await user.save();  
  return user;
};

// get all the users
export const getUsersFromDB = async (): Promise<IUser[]> => {
  const users = await User.find();
  return users;
};

// get a single user from database
export const getUserByIdFromDB = async (payload: string):Promise<IUser | null> => {
//   const user = await User.findOne({ id: payload });
  const user = await User.findOne({id: payload},{name:1})
  return user;
};


// get all ths student user

export const getStudentUserFromDB = async() => {
    const student = await User.getStudentUsers();
    return student
}