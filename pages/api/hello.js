export const config = {
  runtime: 'edge',
}

export default getServerSideProps (req) {
  return {
    props:{ name: 'John Doe' }
  }
}