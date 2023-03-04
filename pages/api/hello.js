export const config = {
  runtime: 'edge',
}

export async function getServerSideProps (req) {
  return {
    props:{ name: 'John Doe' }
  }
}