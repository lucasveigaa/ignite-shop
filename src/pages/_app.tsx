import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"

import Image from "next/future/image"
import Link from "next/link"
import logoImg from '../assets/logo.svg'
import { Container, Header } from "../styles/pages/app"

globalStyles()

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Link href="/">
        <Header>
          <Image src={logoImg} alt="" />
        </Header>
      </Link>

      <Component {...pageProps} />
    </Container>
  )
}
