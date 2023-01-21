import { InMemoryUsersRepository } from '@test/repositories/in-memory-user.repository';
import { CreateUser } from './create-user';

describe('Create User', () => {
  it('should be able to create a user', async () => {
    const usersRepository = new InMemoryUsersRepository();
    const createUser = new CreateUser(usersRepository);

    const { user } = await createUser.execute({
      email: 'gabriel@teste.com.br',
      fullname: 'Gabriel Hijazi',
      password: '12345',
    });
    expect(usersRepository.users[0]).toEqual(user);
  });
});
