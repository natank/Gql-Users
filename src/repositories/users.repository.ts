import { Injectable } from '@nestjs/common';
import { User } from '../models/user.model';
import { Position } from '../models/position.model';
import axios from 'axios';
import { CreateUserInput } from 'src/graphql.schema';

export type UserEntity = User & {
  positionId: string;
  companyId: string;
  friendIds: string[];
};

@Injectable()
export class UsersRepository {
  async findOneById(id: string): Promise<UserEntity> {
    const user = await axios.get(`http://localhost:3000/users/${id}`);
    return user.data;
  }

  async findUsers(props: { companyId: string }): Promise<UserEntity[]> {
    const response = await axios.get(`http://localhost:3000/users`);
    let users = response.data;
    const companyId = props?.companyId;
    if (companyId) {
      users = users.filter((user) => user.companyId === companyId);
    }
    return users;
  }

  async findPositionById(id: string): Promise<Position> {
    const position = await axios.get(`http://localhost:3000/positions/${id}`);
    return position.data;
  }

  async findUserFriends(friendIds: string[]): Promise<UserEntity[]> {
    const users = await axios.get(`http://localhost:3000/users`);
    const friends = users.data.filter((user) => friendIds.includes(user.id));
    return friends;
  }

  async createUser(createUserInput: CreateUserInput): Promise<User> {
    const user = await axios.post(
      `http://localhost:3000/users`,
      createUserInput,
    );
    const frinedIds = createUserInput.friendIds;
    return user.data;
  }

  async deleteUser(userId: string): Promise<boolean> {
    const result = await axios.delete(`http://localhost:3000/users/${userId}`);
    return true;
  }

  async updateUser(userId: string, user: CreateUserInput): Promise<User> {
    const updatedUser = await axios.patch(
      `http://localhost:3000/users/${userId}`,
      user,
    );
    return updatedUser.data;
  }
}
