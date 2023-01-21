import { User } from './user';

describe('Users', () => {
  it('should be able to create a user ', () => {
    const user = new User({
      email: 'gabriel@teste.com.br',
      fullname: ' Gabriel Hijazi',
      password: '12345',
    });
    expect(user).toBeTruthy();
  });
});
