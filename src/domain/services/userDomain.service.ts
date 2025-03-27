import { Inject, Injectable } from "@nestjs/common";
import { User } from "@domain/models/Entities";
import { IUserRepository } from "@domain/Interfaces";
import { user_interface } from "@domain/Interfaces/user.repo.interface";

@Injectable()
export class UserDomainServices {
    constructor(
        @Inject(user_interface)
        private readonly userRepo: IUserRepository
    ){}

    async RegisterUser(user: User) : Promise<User> {

        const existingUser : User | null = await this.userRepo.findUser(user)
        
        if(existingUser) {
            throw new Error("User name already taken.")
        }

        let newUser : User = new User()
        Object.assign(newUser, user)

        let result: User = await this.userRepo.save(newUser)

        return result
    }
}