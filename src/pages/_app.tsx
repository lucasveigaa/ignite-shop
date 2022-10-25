import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"

import * as Dialog from "@radix-ui/react-dialog"
import Image from "next/future/image"
import Link from "next/link"
import logoImg from '../assets/logo.svg'
import { Container, Header } from "../styles/pages/app"

import { Handbag } from 'phosphor-react'
import { CartModal } from "../components/CartModal"

globalStyles()

export default function MyApp({ Component, pageProps }: AppProps) {

  return (
    <Container>
      <Link href="/">
        <Header>
          <Image src={logoImg} alt="" />

          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button>
                <Handbag color="white" />
                <span>1</span>
              </button>
            </Dialog.Trigger>
            <CartModal />
          </Dialog.Root>

        </Header>
      </Link>

      <Component {...pageProps} />
    </Container>
  )
}
