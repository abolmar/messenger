import {
  Injectable,
  Logger,
  UnprocessableEntityException,
} from '@nestjs/common';
import { UserModel } from './messenger.interface';

@Injectable()
export class UsersService {
  private users: Array<UserModel> = [];
  private readonly logger = new Logger(UsersService.name);

  public createUser(user: UserModel): UserModel {
    const userExists: boolean = this.users.some(
      (item) => item.email === user.email,
    );

    if (userExists) {
      throw new UnprocessableEntityException('El usuario ya está registrado.');
    }

    // find the next id for a new user
    const maxId: number = Math.max(...this.users.map((user) => user.id), 0);
    const id: number = maxId + 1;

    const userPost: UserModel = {
      ...user,
      id,
    };

    this.users.push(userPost);

    return userPost;
  }
}
