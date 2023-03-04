export const config = {
  runtime: 'edge',
}

import { GetServerSideProps } from 'next'

type Props = {
  name: string
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: { name: 'John Doe' }
  }