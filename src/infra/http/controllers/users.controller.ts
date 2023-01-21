import { CreateUser } from '@application/use-cases/create-user';
import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserBody } from '../dtos/create-user-body';
import { UserViewModel } from '../view/models/user-view-model';

@Controller('users')
export class UsersController {
  constructor(private createUser: CreateUser) {}

  @Post()
  async create(@Body() body: CreateUserBody) {
    const { email, fullname, password } = body;
    const { user } = await this.createUser.execute({
      email,
      fullname,
      password,
    });

    return {
      user: UserViewModel.toHTTP(user),
    };
  }
}
