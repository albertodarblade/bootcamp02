import IUser from "./users";

export default interface ITask {
  title?: string,
  id: string,
  description?: string,
  owners?: IUser[]
}