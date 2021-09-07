import { GetServerSideProps } from 'next'
import Main from 'templates/Main'
import axios from 'axios'

export type Poke = {
  image: string
  abilities: Array<Ability>
}

type Ability = {
  name: string
}

export default function Home() {
  return <Main />
}
