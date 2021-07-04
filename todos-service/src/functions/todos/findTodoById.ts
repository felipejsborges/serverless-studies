import { formatJSONResponse } from '@functions/shared/formatJSONResponse';
import { APIGatewayProxyEvent } from 'aws-lambda';
import { dbConnection } from '../../database';

export const handler = async (event: APIGatewayProxyEvent) => {
	const { id } = event.pathParameters

	try {
		const response = await dbConnection.query({
			TableName: 'todos',
			KeyConditionExpression: 'id=:id',
			ExpressionAttributeValues: {
				':id': id
			}
		}).promise()

		if (!response.Items[0]) throw new Error('Todo not found');

		const todo = response.Items[0]

		return formatJSONResponse(todo, 200);
	} catch (err) {
		console.error(err)

		return formatJSONResponse({
      message: 'Error for finding a todo by ID',
      err
    }, 500);
	}
}
