export const config = {
  runtime: 'edge',
}

export default async function (req) {
  console.log(await process.env.KV.get('test'))

  return Response(process.env.KV.get('test')))
}