import { SNS } from 'aws-sdk'

const isLocal = process.env.IS_OFFLINE

export const pubsub = new SNS({
	region: 'us-east-1',
	...(isLocal && { endpoint: 'http://localhost:5003' })
})

export const TOPICS = {
	SEND_WELCOME_EMAIL: 'arn:aws:sns:us-east-1:430771289110:send-welcome-email-topic'
}
