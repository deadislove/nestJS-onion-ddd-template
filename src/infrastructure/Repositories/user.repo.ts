import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Not, Repository } from "typeorm";
import { IUserRepository } from "@domain/Interfaces";
import { User } from "@domain/models/Entities";

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) { }

  async findUser(user: User): Promise<User | null> {
    return this.userRepo.findOne({
      where: [
        {
          id: user.id
        },
        {
          id: Not(user.id),
          username: user.username,
          email: user.email,
        }
      ]
    });
  }

  async findById(id: number = 0): Promise<User | null> {
    return this.userRepo.findOne({
      where: {
        id
      }
    });
  }

  async findAll(): Promise<User[]> {
    return this.userRepo.find();
  }

  async save(user: User): Promise<User> {
    return this.userRepo.save(user);
  }
}