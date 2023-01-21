import { randomUUID } from 'crypto';
import { Replace } from 'src/helpers/Replace';

export interface IUser {
  fullname: string;
  email: string;
  password: string;
  confirmationToken?: string;
  resetToken?: string;
  createdAt: Date;
  updatedAt: Date;
}

export class User {
  private _id: string;
  private props: IUser;

  constructor(
    props: Replace<IUser, { createdAt?: Date; updatedAt?: Date }>,
    id?: string,
  ) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
      updatedAt: props.updatedAt ?? new Date(),
    };
  }
  public get id(): string {
    return this._id;
  }

  public set fullname(fullname: string) {
    this.props.fullname = fullname;
  }

  public get fullname(): string {
    return this.props.fullname;
  }

  public set email(email: string) {
    this.props.email = email;
  }

  public get email(): string {
    return this.props.email;
  }

  public set password(password: string) {
    this.props.password = password;
  }

  public get password(): string {
    return this.props.password;
  }

  public get confirmationToken(): string | null | undefined {
    return this.props.confirmationToken;
  }

  public get resetToken(): string | null | undefined {
    return this.props.resetToken;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }

  public get updatedAt(): Date {
    return this.props.updatedAt;
  }
}
