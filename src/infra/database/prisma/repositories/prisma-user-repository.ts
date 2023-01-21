import { User } from '@application/entities/user';
import { UserRepository } from '@application/repositories/user-repository';
import { Injectable } from '@nestjs/common';
import { PrismaUserMapper } from '../mappers/prisma-user-mapper';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private prismaService: PrismaService) {}

  async create(user: User): Promise<void> {
    const persistUser = PrismaUserMapper.toPrisma(user);

    await this.prismaService.user.create({
      data: persistUser,
    });
  }

  async findById(userId: string): Promise<User | null> {
    const user = await this.prismaService.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      return null;
    }
    return PrismaUserMapper.toDomain(user);
  }

  async save(user: User): Promise<void> {
    const persistUser = PrismaUserMapper.toPrisma(user);
    await this.prismaService.user.update({
      where: {
        id: persistUser.id,
      },
      data: persistUser,
    });
  }
}
