import { Injectable } from '@nestjs/common';
import { User } from './dtos/user.dto';
import { Company } from './dtos/company.dto';
import { Position } from './dtos/position.dto';

const companies: Company[] = [
  {
    id: '0',
    description: 'l;kj;lkj',
    name: 'Google',
  },
];
const positions: Position[] = [
  {
    id: '0',
    description: 'Manages team members',
    name: 'Manager',
  },
];
const users: User[] = [
  {
    age: 32,
    id: '0',
    firstName: 'John',
    positionId: '0',
    companyId: '0',
    friendIds: ['1'],
  },
  {
    age: 43,
    id: '1',
    firstName: 'Daniel',
    positionId: '0',
    companyId: '0',
    friendIds: ['0'],
  },
];

@Injectable()
export class UsersRepository {
  async findOneById(id: string): Promise<User> {
    return users[id];
  }

  async findCompanyById(id: string): Promise<Company> {
    const company = companies.find((company) => company.id === id);
    return company;
  }

  async findPositionById(id: string): Promise<Position> {
    const position = positions.find((position) => position.id === id);

    return position;
  }

  async findUserFriends(userId: string): Promise<User[]> {
    const friends = users.filter((user) => user.friendIds.includes(userId));
    return friends;
  }
}
