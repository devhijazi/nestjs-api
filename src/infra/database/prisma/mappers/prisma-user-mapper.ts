import { User } from '@application/entities/user';

export class PrismaUserMapper {
  static toPrisma(user: User) {
    return {
      id: user.id,
      email: user.email,
      fullname: user.fullname,
      password: user.password,
      resetToken: user.resetToken,
      confirmationToken: user.confirmationToken,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }

  static toDomain(raw: User) {
    return new User(
      {
        email: raw.email,
        fullname: raw.fullname,
        password: raw.password,
        createdAt: raw.createdAt,
        updatedAt: raw.updatedAt,
      },
      raw.id,
    );
  }
}
