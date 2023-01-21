import { User } from '@application/entities/user';
import { UserRepository } from '@application/repositories/user-repository';
import { Injectable } from '@nestjs/common';

interface CreateUserRequest {
  email: string;
  password: string;
  fullname: string;
}

interface CreateUserResponse {
  user: User;
}

@Injectable()
export class CreateUser {
  constructor(private userRepository: UserRepository) {}

  async execute(request: CreateUserRequest): Promise<CreateUserResponse> {
    const { email, fullname, password } = request;

    const user = new User({
      email,
      fullname,
      password,
    });

    await this.userRepository.create(user);

    return { user };
  }
}
