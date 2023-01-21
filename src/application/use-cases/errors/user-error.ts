export class UserError extends Error {
  constructor() {
    super('User not found');
  }
}
