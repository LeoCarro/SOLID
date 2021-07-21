import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
    user_id: string;
}

class ListAllUsersUseCase {
    constructor(private usersRepository: IUsersRepository) {}

    execute({ user_id }: IRequest): User[] {
        const user = this.usersRepository.findById(user_id);

        if (!user || user.admin === false) {
            throw new Error("You don't have permission to modify this user");
        }
        const allUsers = this.usersRepository.list();

        return allUsers;
    }
}

export { ListAllUsersUseCase };
