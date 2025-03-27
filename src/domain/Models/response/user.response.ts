export class UserResponseModel {
    username: string
    password: string
    email: string
}

export class UsersResponseModel {
    data: UserResponseModel[]
}