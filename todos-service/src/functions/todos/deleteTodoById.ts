import { formatJSONResponse } from '@functions/shared/formatJSONResponse';
import { APIGatewayProxyEvent } from 'aws-lambda';
import { dbConnection } from '../../database';

export const handler = async (event: APIGatewayProxyEvent) => {
	const { id } = event.pathParameters

	try {
		await dbConnection.delete({
			TableName: 'todos',
			Key: {
				'id': id
			},
		}).promise()

		const response = { result: true };

		return formatJSONResponse(response, 200);
	} catch (err) {
		console.error(err)
	
		return formatJSONResponse({
      message: 'Error for deleting a todo by ID',
      err
    }, 500);
	}
}
