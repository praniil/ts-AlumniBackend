import Users from "../models/users.model";

interface IUsersRepository{
    save(users : Users) : Promise<Users>;        //save method expects an argument named users of type Users `Users` is a class or type representiong user data
    // getAllUsers(searchParams: {name: string, phone_no: number}) : Promise<Users[]>
    // getUserById(id : number) : Promise<Users | null>;
    // update(users : Users) : Promise<Users>;
    // delete(id: number) : Promise<number>;
    // deleteAll(): Promise<number>
}

class UsersRepository implements IUsersRepository{
    async save(users: Users): Promise<Users> {
        try{
            return await Users.create({

                username: users.username,
                profession: users.profession,
                phone_no: users.phone_no
            });
        }catch(err){
            throw new Error("Failed to create Tutorial");
        }
    }
    // async getAllUsers(searchParams: { name: string; phone_no: number; }): Promise<Users[]> { }
}

export default new UsersRepository();