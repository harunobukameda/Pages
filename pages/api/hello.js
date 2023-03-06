export const config = {
  runtime: 'edge',
}

export default async function (req) {
  console.log(process.env.MY_ENV_VAR)
  console.log(await process.env.KV.get('test'))

  return Response.json({ name: 'John Doe' })
}