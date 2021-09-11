export interface IUserDto {
  id: string;

  firstName: string;

  age: number;

  companyId: string;

  positionId: string;

  friendIds: [string?];
}
