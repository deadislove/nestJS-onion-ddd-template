import { User } from "@domain/models/Entities";

export const user_interface = 'user_interface'

export interface IUserRepository {
  findById(id: number): Promise<User | null>;
  findUser(user: User): Promise<User | null>
  findAll(): Promise<User[]>;
  save(user: User): Promise<User>;
}
