// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// path to file: /api/hello
// path to this server function: localhost:3000/api/hello

// send some text back to client

export default function handler(request, response) {
  response.status(200).json({ text: "I'm a bad boy doggy" });
}
