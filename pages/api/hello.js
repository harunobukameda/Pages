export const config = {
  runtime: 'edge',
}

export default async function getServerSideProps (context) {
  return {
    props:{ name: 'John Doe' }
  }
}