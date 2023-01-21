import { IUser, User } from '@application/entities/user';

type Override = Partial<IUser>;

export function makeUser(override: Override = {}) {
  return new User({
    email: 'gabriel@teste.com.br',
    fullname: 'Gabriel Hijazi',
    password: '12345',
    ...override,
  });
}
