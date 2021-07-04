<div align="center">
	<h1>Serverless Studies</h1>
	<br>
	<p align="center">
		<a href="https://www.linkedin.com/in/felipejsborges/">
		  <img alt="made by" src="https://img.shields.io/badge/made%20by-Felipe%20Borges-orange">
		</a>
		<a href="https://github.com/felipejsborges/serverless-studies/commits/master">
		  <img alt="last commit" src="https://img.shields.io/github/last-commit/felipejsborges/serverless-studies">
		</a>
		<a href="https://github.com/felipejsborges/serverless-studies/issues">
			<img alt="issues" src="https://img.shields.io/github/issues/felipejsborges/serverless-studies">
		</a>
		<a href="https://github.com/felipejsborges/serverless-studies/network/members">	
			<img alt="forks" src="https://img.shields.io/github/forks/felipejsborges/serverless-studies">	
		</a>
		<a href="https://github.com/felipejsborges/serverless-studies/stargazers">
			<img alt="stars" src="https://img.shields.io/github/stars/felipejsborges/serverless-studies">
		</a>
		<a href="https://github.com/felipejsborges/serverless-studies/blob/master/LICENSE">
			<img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT">	
		</a>
		<!-- version, status da build, status dos testes -->
	</p>
	<br>
	<img src="/.github/banner.jpg" alt="banner" width="80%" />
</div>

<br>

<h4 align="center">   
	<a href="#description-">Description 📄</a>		|    
	<a href="#technologies-">Technologies 🚀</a>		|    
	<a href="#technologies-">How it works 👨‍💻</a>		|    
	<a href="#how-to-run-it-on-your-computer-%EF%B8%8F">How to start the application 🖥️</a>
</h4>

<hr>

<h4>Description 📄</h4>
  
This application was developed in order to learn and practice serverless and micro-services architectures. To do that, I created three services.

- <b>Users Service:</b> A CRUD of "users" using a GraphQL API

- <b>Todos Service:</b> A CRUD of "todos" using a REST API

- <b>Emails Service:</b> A service to send a "welcome e-mail" for every new user.

<hr>

<h4>Technologies 🚀</h4>

- [TypeScript](https://www.typescriptlang.org/docs/)

- [Node.js](https://nodejs.org/en/docs/)

- [Serverless Framework](https://www.serverless.com/)

- [TypeGraphQL](https://typegraphql.com/docs/introduction.html)

- [DynamoDB](https://docs.aws.amazon.com/dynamodb/)

- [SNS](https://docs.aws.amazon.com/sns/)

- [SES](https://docs.aws.amazon.com/ses/)

<hr>

<h4>How it works 👨‍💻</h4>

<hr>

<h4>How to start the application 🖥️</h4>

- Install dependencies
[Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
[Serverless Framework](https://www.serverless.com/framework/docs/getting-started/)

- [Setup AWS credentials](https://www.serverless.com/framework/docs/providers/aws/guide/credentials/)

- [Create a SNS Topic](https://docs.aws.amazon.com/sns/latest/dg/sns-create-topic.html) called `send-welcome-email-topic`

- [Register an Email Address](https://docs.bitnami.com/bch/how-to/use-ses/) and update the env var `SES_SOURCE_EMAIL` on `emails-service/serverless.yml`

- Clone the repo

```bash
$ git clone https://github.com/felipejsborges/serverless-studies.git
```

- Deploy the function for each service.

```bash
$ cd serverless-studies/users-service
$ yarn deploy
# Save the production URL

$ cd ../todos-service
$ yarn deploy
# Save the production URL

$ cd ../emails-service
$ yarn deploy
# Save the production URL
```

- Download [this JSON file](insomnia.json) and import on your [Insomnia](https://support.insomnia.rest/).

- Put URLs on Insomnia environment

<hr>

by Felipe Borges<br>

<div>
	<a href="https://www.linkedin.com/in/felipejsborges">
		<img width="32px" src="https://github.com/felipejsborges/felipejsborges/blob/master/assets/linkedin.svg" alt="LinkedIn">
	</a>
	<a href="https://www.youtube.com/channel/UC6tN_loxPGOP30LWNbJM7rg">
		<img width="32px" src="https://github.com/felipejsborges/felipejsborges/blob/master/assets/youtube.svg" alt="YouTube">
	</a>
	<a href="https://wa.me/+55012996477129">
		<img width="32px" src="https://github.com/felipejsborges/felipejsborges/blob/master/assets/whatsapp.svg" alt="WhatsApp">
	</a>
	<a href="mailto:felipejsborges@outlook.com">
		<img width="32px" src="https://github.com/felipejsborges/felipejsborges/blob/master/assets/mail.svg" alt="E-mail">
	</a>
</div>
