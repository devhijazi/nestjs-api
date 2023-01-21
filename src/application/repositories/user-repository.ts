import { User } from '@application/entities/user';

export abstract class UserRepository {
  abstract create(user: User): Promise<void>;
  abstract findById(id: string): Promise<User | null>;
  abstract save(user: User): Promise<void>;
  //update
  //delete
}
