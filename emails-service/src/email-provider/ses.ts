import { SES } from 'aws-sdk'

export const ses = new SES({ region: 'us-east-1' })
