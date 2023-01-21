import { User } from '@application/entities/user';

export class UserViewModel {
  static toHTTP(user: User) {
    return {
      id: user.id,
      email: user.email,
      password: user.password,
      confirmationToken: user.confirmationToken,
      resetToken: user.resetToken,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }
}
