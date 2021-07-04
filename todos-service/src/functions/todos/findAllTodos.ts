import { formatJSONResponse } from '@functions/shared/formatJSONResponse';
import { APIGatewayProxyEvent } from 'aws-lambda';
import { buildScanCondition } from '../../database/buildScanCondition';
import { dbConnection } from '../../database';

export const handler = async (event: APIGatewayProxyEvent) => {
	const { queryStringParameters } = event

	const params = {
		TableName: 'todos',
		...(queryStringParameters && buildScanCondition(queryStringParameters))
	}

	try {
		const response = await dbConnection.scan(params).promise()

		const todos = response.Items

		return formatJSONResponse(todos, 200);
	} catch (err) {
		console.error(err)

		return formatJSONResponse({
      message: 'Error for finding all todos',
      err
    }, 500);
	}
}
