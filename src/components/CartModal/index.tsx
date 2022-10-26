
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { X } from 'phosphor-react';
import { CloseButton, Container, ContainerAmount, ContainerContent, ContainerImage, ContainerItem, ContainerQuantitty, Content, Footer, Overlay, Title } from './style';

import axios from "axios";
import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";

export function CartModal() {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)

  const { cart, removeProductCart } = useContext(CartContext)

  const handleCartItensToPost = cart.map(item => {
    return {
      price: item.defaultPriceId,
      quantity: 1
    }
  })


  const cartTotalAmount = cart.reduce((acum, actualValue) =>
    acum + actualValue.price
    , 0)

  async function handleBuyProducts() {
    try {
      setIsCreatingCheckoutSession(true)
      const response = await axios.post('/api/checkout', {
        priceId: handleCartItensToPost,
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl

    } catch (err) {
      setIsCreatingCheckoutSession(false)
      alert(err)
    }
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Title>Sacola de compras</Title>
        <CloseButton>
          <X />
        </CloseButton>

        <Container>
          {cart.map((item) => {
            return (
              <ContainerItem key={item.id}>
                <ContainerImage>
                  <Image src={item.imageUrl} width={95} height={95} alt="" />
                </ContainerImage>
                <ContainerContent>
                  <span>{item.name}</span>
                  <strong>{item.priceFormatted}</strong>
                  <button onClick={() => removeProductCart(item)}>Remover</button>
                </ContainerContent>
              </ContainerItem>
            )
          })}
        </Container>

        <Footer>
          <ContainerQuantitty>
            <span>Quantidade</span>
            <span>{cart.length} itens</span>
          </ContainerQuantitty>
          <ContainerAmount>
            <strong>Valor total</strong>
            <strong>{new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(cartTotalAmount)}</strong>
          </ContainerAmount>

          <button onClick={handleBuyProducts}>Finalizar compra</button>
        </Footer>

      </Content>
    </Dialog.Portal>
  )
}