export const buildExpression = (body: Object) => {
	const keyToAttribute = []
	const ExpressionAttributeValues = {}

	Object
		.keys(body)
		.forEach(key => {
			keyToAttribute.push(`${key}=:${key}`)
			ExpressionAttributeValues[`:${key}`] = body[key]
		})

	const UpdateExpression = `SET ${keyToAttribute.join(', ')}`

	return {
		UpdateExpression,
		ExpressionAttributeValues
	}
}