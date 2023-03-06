export const config = {
  runtime: 'edge',
}

export default async function getServerSideProps() {
  console.log(await process.env.KV.get('test'))
  const kvvalue = await process.env.KV.get('test')
  return new Response(kvvalue)
}