import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { CompaniesRepository } from './repositories';
import { UsersRepository } from './repositories/users.repository';
import {
  UsersResolver,
  CompaniesResolver,
  UserPositionResolver,
  UserFriendsResolver,
  UserCompanyResolver,
  CompanyUserResolver,
  AddressResolver,
  PersonalDetailsResolver,
} from './resolvers';

import { UsersService, CompaniesService } from './services';

@Module({
  imports: [
    GraphQLModule.forRoot({
      debug: false,
      playground: true,
      typePaths: ['./**/*.graphql'],
    }),
  ],
  providers: [
    UsersService,
    CompaniesService,
    UsersRepository,
    CompaniesRepository,
    UsersResolver,
    CompaniesResolver,
    UserCompanyResolver,
    CompanyUserResolver,
    UserPositionResolver,
    UserFriendsResolver,
    PersonalDetailsResolver,
    AddressResolver,
  ],
})
export class AppModule {}
