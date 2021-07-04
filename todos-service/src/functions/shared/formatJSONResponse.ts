import { APIGatewayProxyResult } from "aws-lambda";

export function formatJSONResponse(
	body: Object,
	statusCode: number = 200,
): APIGatewayProxyResult {
	return {
		statusCode,
		body: JSON.stringify(body),
		headers: {
			"Content-type": "application/json"
		},
	}
}