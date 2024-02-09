import fastify from "fastify";
import cookie from "@fastify/cookie"
import { getPool } from "./routes/get-poll";
import { createPoll } from "./routes/create-poll";
import { voteOnPoll } from "./routes/vote-on-poll";

const app = fastify();

app.register(cookie, {
  secret: "polls-app", // for cookies signature
  hook: 'onRequest', // set to false to disable cookie autoparsing or set autoparsing on any of the following hooks: 'onRequest', 'preParsing', 'preHandler', 'preValidation'. default: 'onRequest'
})

app.register(getPool)
app.register(createPoll)
app.register(voteOnPoll)


app.listen({ port: 3333 }).then(() => {
  console.log("HTTP Server running!");
});
