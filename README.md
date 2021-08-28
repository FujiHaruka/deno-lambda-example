# Deno AWS Lambda Example

This is a simple and self-contained example for AWS Lambda using a compiled
executable by Deno. We already have
[deno-lambda](https://github.com/hayd/deno-lambda), a Deno runtime with a Lambda
Layer, but this is an simple alternative to deploy a Deno script by compile it
as a single executable.

## Requirements

- [SAM](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html)
- [Deno](https://deno.land/) >= 1.6

## How to deploy

Compile the script into an executable.

```sh
deno compile --output lambda/handler --target x86_64-unknown-linux-gnu src/handler.ts
```

Then you can deploy by SAM CLI.

```sh
sam deploy --guided
```

Now you can test the Lambda function on AWS Console!
