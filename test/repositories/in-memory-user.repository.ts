import { User } from '@application/entities/user';
import { UserRepository } from '@application/repositories/user-repository';

export class InMemoryUsersRepository implements UserRepository {
  public users: User[] = [];

  async create(user: User) {
    this.users.push(user);
  }

  async findById(userId: string): Promise<User | null> {
    const user = this.users.find((usr) => usr.id === userId);

    if (!user) {
      return null;
    }
    return user;
  }

  async save(user: User): Promise<void> {
    const userIndex = this.users.findIndex((usr) => usr.id === user.id);

    if (userIndex >= 0) {
      this.users[userIndex] = user;
    }
  }
}
