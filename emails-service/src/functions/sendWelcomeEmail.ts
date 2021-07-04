import { SNSEvent } from "aws-lambda"
import { ses } from "../email-provider/ses"

export const handler = async (event: SNSEvent) => {
	const { email, fullName } = JSON.parse(event.Records[0].Sns.Message)

	if (!email || !fullName) throw new Error('Missing data for email sending')

	const params = {
		Destination: {
		 ToAddresses: [email]
		}, 
		Message: {
		 Body: {
			Text: {
			 Charset: "UTF-8", 
			 Data: `Hello, ${fullName}! Welcome!`
			}
		 }, 
		 Subject: {
			Charset: "UTF-8", 
			Data: "Subject data sample"
		 }
		}, 
		Source: process.env.SES_SOURCE_EMAIL, 
	 };

	 try {
		await ses.sendEmail(params).promise()
	 } catch (err) {
		 console.error(err)
	 }
}
