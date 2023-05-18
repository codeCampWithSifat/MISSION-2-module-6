import { NextFunction, Request, Response } from "express";
import { createUserToDB, getStudentUserFromDB, getUserByIdFromDB, getUsersFromDB } from "./user.service";

 export const createUser = async(req: Request, res: Response, next: NextFunction) => {
    const data = req.body ;
    const user = await createUserToDB(data);
    res.status(200).json({
        status: "Success",
        data: user
    })
};


// get all the users
export const getUser = async(req:Request,res:Response) => {
    const user = await getUsersFromDB() ;
    res.status(200).json({
        status: "Success",
        data: user ,
    })
}


export const getUserById = async(req:Request, res:Response) => {
    const id = req.params.id
    const user = await getUserByIdFromDB(id);
    res.status(200).json({
        status: "Success",
        data: user,
    })
}


export const getStudentUsers = async(req:Request, res:Response, next:NextFunction) => {
    const user = await getStudentUserFromDB()
    res.status(200).json({
        status: "Success",
        data: user
    })
}