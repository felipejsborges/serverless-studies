import { v4 as uuid } from 'uuid';
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { ApolloError } from 'apollo-server-errors';
import { dbConnection } from '../../database';
import { NewUserInput } from "../inputs/NewUserInput";
import { User } from "../types/user.type";
import { UpdateUserInput } from '../inputs/UpdateUserInput';
import { pubsub, TOPICS } from '../../pubsub';
import { buildExpression } from '../../database/buildExpression';

@Resolver(User)
export class UserResolver {
  @Mutation(_ => User)
  async createUser(
    @Arg("body") body: NewUserInput,
  ): Promise<User> {
    const { fullName, email, password } = body

    const user = {
      id: uuid(),
      fullName,
      email,
      password,
      createdAt: new Date().toISOString()
    }

    try {
      await dbConnection.put({
        TableName: 'users',
        Item: user
      }).promise()

      await pubsub.publish({
        TopicArn: TOPICS.SEND_WELCOME_EMAIL,
        Message: JSON.stringify({
          fullName,
          email
        }),
      }).promise();

      return user
    } catch (err) {
      console.error(err)

      throw new ApolloError(
        'Error for creating user',
        '400',
        err
      );
    }
  }

  @Query(_ => User)
  async findUserById(@Arg("id") id: string): Promise<User> {
    try {
      const response = await dbConnection.query({
        TableName: 'users',
        KeyConditionExpression: 'id=:id',
        ExpressionAttributeValues: {
          ':id': id
        }
      }).promise()

      if (!response.Items[0]) throw new Error('User not found');

      return response.Items[0] as User;
    } catch (err) {
      console.error(err)

      throw new ApolloError(
        'Error for finding user',
        '400',
        err
      );
    }
  }

  @Query(_ => [User])
  async findUsers(): Promise<User[]> {
    try {
      const response = await dbConnection.scan({
        TableName: 'users',
      }).promise()

      const users = response.Items

      return users as User[];
    } catch (err) {
      console.error(err)

      throw new ApolloError(
        'Error for finding user',
        '400',
        err
      );
    }
  }

  @Mutation(_ => Boolean)
  async updateUserById(
    @Arg("id") id: string,
    @Arg("body") body: UpdateUserInput
  ) {
    try {
      const { UpdateExpression, ExpressionAttributeValues } = buildExpression(body)

      await dbConnection.update({
        TableName: 'users',
        Key: { id },
        UpdateExpression,
        ExpressionAttributeValues,
        ReturnValues: "UPDATED_NEW"
      }).promise()

      return true;
    } catch (err) {
      console.error(err)

      throw new ApolloError(
        'Error for updating user',
        '400',
        err
      );
    }
  }

  @Mutation(_ => Boolean)
  async deleteUserById(
    @Arg("id") id: string
  ) {
    try {
      await dbConnection.delete({
        TableName: 'users',
        Key: {
          'id': id
        },
      }).promise()

      return true;
    } catch (err) {
      console.error(err)

      throw new ApolloError(
        'Error for deleting user',
        '400',
        err
      );
    }
  }
}
