import { formatJSONResponse } from '@functions/shared/formatJSONResponse';
import { APIGatewayProxyEvent } from 'aws-lambda';
import { buildExpression } from '../../database/buildExpression';
import { dbConnection } from '../../database';

export const handler = async (event: APIGatewayProxyEvent) => {
	const { body, pathParameters } = event
	const { id } = pathParameters

	try {
		const { UpdateExpression, ExpressionAttributeValues } = buildExpression(JSON.parse(body))

		const response = await dbConnection.update({
			TableName: 'todos',
			Key: { id },
			UpdateExpression,
			ExpressionAttributeValues,
			ReturnValues: "UPDATED_NEW"
		}).promise()

		return formatJSONResponse(response, 200);
	} catch (err) {
		console.error(err)

		return formatJSONResponse({
      message: 'Error for updating a todo by ID',
      err
    }, 500);
	}
}
