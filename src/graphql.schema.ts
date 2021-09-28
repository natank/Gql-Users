
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface CreateCompanyInput {
    name?: Nullable<string>;
    description?: Nullable<string>;
    workerIds?: Nullable<Nullable<string>[]>;
}

export interface CreateUserInput {
    firstName?: Nullable<string>;
    age: number;
    companyId: string;
    positionId: string;
    friendIds?: Nullable<Nullable<string>[]>;
    personalDetails?: Nullable<PersonalDetailsInput>;
}

export interface UpdateUserInput {
    firstName?: Nullable<string>;
    age?: Nullable<number>;
    companyId?: Nullable<string>;
    positionId?: Nullable<string>;
    friendIds?: Nullable<Nullable<string>[]>;
    personalDetails?: Nullable<PersonalDetailsInput>;
}

export interface PersonalDetailsInput {
    gender?: Nullable<string>;
    status?: Nullable<string>;
    address?: Nullable<AddressInput>;
}

export interface AddressInput {
    city?: Nullable<string>;
    street?: Nullable<string>;
}

export interface IUser {
    id: string;
    firstName: string;
    age: number;
    company: Company;
    position: Position;
    friends: IUser[];
    personalDetails: PersonalDetails;
}

export interface IPosition {
    id: string;
    name: string;
    description: string;
}

export interface IPersonalDetails {
    gender: string;
    status: string;
    address: Address;
}

export interface IAddress {
    city: string;
    streen: string;
}

export interface IQuery {
    company(id: string): Nullable<Company> | Promise<Nullable<Company>>;
    companies(): Nullable<Nullable<Company>[]> | Promise<Nullable<Nullable<Company>[]>>;
    user(id: string): Nullable<User> | Promise<Nullable<User>>;
    users(): Nullable<Nullable<User>[]> | Promise<Nullable<Nullable<User>[]>>;
}

export interface IMutation {
    createCompany(createCompanyInput?: Nullable<CreateCompanyInput>): Nullable<Company> | Promise<Nullable<Company>>;
    deleteCompany(deleteCompanyInput?: Nullable<CreateCompanyInput>): Nullable<boolean> | Promise<Nullable<boolean>>;
    createUser(createUserInput?: Nullable<CreateUserInput>): Nullable<User> | Promise<Nullable<User>>;
    updateUser(createUserInput?: Nullable<UpdateUserInput>, id?: Nullable<string>): Nullable<User> | Promise<Nullable<User>>;
    deleteUser(id?: Nullable<string>): Nullable<boolean> | Promise<Nullable<boolean>>;
}

export interface Company {
    id: string;
    name?: Nullable<string>;
    description?: Nullable<string>;
    workers?: Nullable<Nullable<User>[]>;
}

export interface Position {
    id: string;
    name?: Nullable<string>;
    description: string;
}

export interface User {
    id: string;
    firstName?: Nullable<string>;
    age?: Nullable<number>;
    company?: Nullable<Company>;
    position?: Nullable<Position>;
    friends?: Nullable<Nullable<User>[]>;
    personalDetails?: Nullable<PersonalDetails>;
}

export interface PersonalDetails {
    gender?: Nullable<string>;
    status?: Nullable<string>;
    address?: Nullable<Address>;
}

export interface Address {
    city?: Nullable<string>;
    street?: Nullable<string>;
}

type Nullable<T> = T | null;
