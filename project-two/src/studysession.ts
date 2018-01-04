import { IUser } from "./user";

export interface StudySession{
   id: number;
   authorid: number;
   user: IUser[];
   name: string;
   location: string;
   submitted: string;
   description: string;
}