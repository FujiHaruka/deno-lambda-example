# Deno AWS Lambda Example

Compile.

```sh
deno compile --output lambda/handler --target x86_64-unknown-linux-gnu src/handler.ts
```

Deploy.

```sh
sam deploy --guided
```
