import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { TypeOrmModule } from "@nestjs/typeorm"; 
import { User } from "@domain/models/Entities";
import { UserService } from "@application/index";
import { user_interface } from "@domain/Interfaces/user.repo.interface";
import { UserDomainServices } from "@domain/services";
import { UserRepository } from "@infrastructure/Repositories/user.repo";


@Module({
  imports: [
    TypeOrmModule.forFeature([UserRepository, User]),
  ],
  controllers: [UserController],
  providers: [
    UserService,
    UserRepository,
    {
        provide: user_interface,
        useClass:  UserRepository
    },
    UserDomainServices,
  ], // Add UserService here
})
export class UserModule {}
