export const buildScanCondition = (queryString: Object) => {
	const keyConditions = []
	const ExpressionAttributeValues = {}

	Object
		.keys(queryString)
		.forEach(key => {
			keyConditions.push(`${key}=:${key}`)
			ExpressionAttributeValues[`:${key}`] = queryString[key]
		})

	const FilterExpression = `${keyConditions.join(' and ')}`

	return {
		FilterExpression,
		ExpressionAttributeValues
	}
}