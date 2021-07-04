import { formatJSONResponse } from '@functions/shared/formatJSONResponse';
import { APIGatewayProxyEvent } from 'aws-lambda'
import { ITodo } from 'src/interfaces/todo.interface';
import { v4 as uuid } from 'uuid';
import { dbConnection } from '../../database';

export const handler = async (event: APIGatewayProxyEvent) => {
  const { userId, title, deadline } = JSON.parse(event.body) as ITodo

  const todo = {
    id: uuid(),
    userId,
    title,
    done: false,
    deadline: new Date(deadline).toISOString(),
    createdAt: new Date().toISOString()
  }

  try {
    await dbConnection.put({
      TableName: 'todos',
      Item: todo
    }).promise()

    return formatJSONResponse(todo, 201);
  } catch (err) {
    console.error(err)

    return formatJSONResponse({
      message: 'Error for creating todo',
      err
    }, 500);
  }
}
