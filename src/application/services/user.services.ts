import { Inject, Injectable } from "@nestjs/common";
import { plainToInstance } from "class-transformer";
import { IUserRepository } from "@domain/Interfaces";
import { user_interface } from "@domain/Interfaces/user.repo.interface";
import { UserValueObject } from "@domain/models/DTO/user.dto";
import { User } from "@domain/models/Entities";
import { UserRequestModel } from "@domain/models/reqeust";
import { UserResponseModel, UsersResponseModel } from "@domain/models/response";
import { UserDomainServices } from "@domain/services";


@Injectable()
export class UserService {
    constructor(
        @Inject(user_interface)
        private readonly userRepo: IUserRepository,
        private readonly userDomain: UserDomainServices,
    ){}

    async getUserById(id: number = 0): Promise<UserResponseModel | null> {

        let result: UserResponseModel = new UserResponseModel()
        let user:User | null = await this.userRepo.findById(id)

        if(user) {
            let userValueObject: UserValueObject = plainToInstance(UserValueObject, user)
            result = plainToInstance(UserResponseModel, userValueObject)
        }

        return result
    }

    async getUserByUser(request: UserRequestModel) : Promise<UserResponseModel> {
        let result : UserResponseModel = new UserResponseModel()
        let user: User | null = plainToInstance(UserValueObject, request, {
            excludeExtraneousValues: true
        })
        user = await this.userRepo.findUser(user)

        if(user) {
            result = plainToInstance(UserResponseModel, user)
        }

        return result
    }

    async createUser(reqeust: UserRequestModel): Promise<UserResponseModel> {

        let result: UserResponseModel = new UserResponseModel()

        let newUser:User = plainToInstance(User, reqeust, {
            excludeExtraneousValues: true
        })

        await this.userDomain.RegisterUser(newUser)

        result = plainToInstance(UserResponseModel, newUser)

        return result
    }

    async getAllUsers(): Promise<UsersResponseModel> {

        let result: UsersResponseModel = new UsersResponseModel()
        let users: User[] = await this.userRepo.findAll()        

        if(users && users.length > 0) {
            result.data = plainToInstance(UserResponseModel, users)
        }

        return result
    }
}