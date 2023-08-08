import Users from "../models/users.model";

interface IUsersRepository{
    save(users : Users) : Promise<Users>;        //save method expects an argument named users of type Users `Users` is a class or type representiong user data
    getAllUsers(searchParams: {name: string, phone_no: number}) : Promise<Users>
    getUserById(id : number) : Promise<Users | null>;
    update(users : Users) : Promise<Users>;
    delete(id: number) : Promise<number>;
    deleteAll(): Promise<number>
}