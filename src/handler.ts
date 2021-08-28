/**
 * Simple Deno executable for AWS Lambda
 */

// Event will be passed from command line arg
const [eventJson] = Deno.args;
const event = JSON.parse(eventJson);

// Std out will be the response of the lambd function
console.log("hello world");

// Std err out will be outputed to logs
console.error(eventJson);
