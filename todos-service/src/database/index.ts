import { DynamoDB } from 'aws-sdk'

const isLocal = process.env.IS_OFFLINE

export const dbConnection = new DynamoDB.DocumentClient({
	region: 'us-east-1',
	...(isLocal && { endpoint: 'http://localhost:4001' })
})
