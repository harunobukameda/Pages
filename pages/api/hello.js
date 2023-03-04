export const config = {
  runtime: 'edge',
}

export default function (req) {
  return Response.json({ name: 'John Doe' })
}

