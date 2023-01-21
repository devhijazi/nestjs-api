import { IsNotEmpty, IsUUID, IsEmail } from 'class-validator';

export class CreateUserBody {
  @IsNotEmpty()
  @IsUUID()
  id: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  fullname: string;

  @IsNotEmpty()
  password: string;
}
