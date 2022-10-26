import * as Dialog from "@radix-ui/react-dialog"
import Image from "next/future/image"
import Link from "next/link"
import { Handbag } from 'phosphor-react'
import { useContext } from "react"
import logoImg from '../../assets/logo.svg'
import { CartContext } from "../../contexts/CartContext"
import { CartModal } from '../CartModal'
import { ContainerHeader } from './style'

export function Header() {

  const { cart } = useContext(CartContext)

  return (
    <Link href="/">
      <ContainerHeader>
        <Image src={logoImg} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button>
              <Handbag color="white" />
              <span>{cart.length}</span>
            </button>
          </Dialog.Trigger>
          <CartModal />
        </Dialog.Root>

      </ContainerHeader>
    </Link>

  )
}