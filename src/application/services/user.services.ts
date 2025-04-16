import { Inject, Injectable } from "@nestjs/common";
import { IUserRepository } from "src/domain/Interfaces";
import { user_interface } from "src/domain/Interfaces/user.repo.interface";
import { User } from "@domain/models";

@Injectable()
export class UserService {
    constructor(
        @Inject(user_interface)
        private readonly userRepo: IUserRepository
    ){}

    async getUserById(id: number = 0): Promise<User | null> {
        return this.userRepo.findById(id)
    }

    async createUser(username: string, password: string, email:string): Promise<User> {
        const user = new User()
        user.username = username
        user.password = password
        user.email = email
        return this.userRepo.save(user)
    }

    async getAllUsers(): Promise<User[]> {
        return this.userRepo.findAll()
    }
}