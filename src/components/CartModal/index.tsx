
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { X } from 'phosphor-react';
import { CloseButton, Container, ContainerAmount, ContainerContent, ContainerImage, ContainerItem, ContainerQuantitty, Content, Footer, Overlay, Title } from './style';

import image from '../../assets/camisetas/1.png';

export function CartModal() {

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Title>Sacola de compras</Title>
        <CloseButton>
          <X />
        </CloseButton>

        <Container>
          <ContainerItem>
            <ContainerImage>
              <Image src={image} width={95} height={95} alt="" />
            </ContainerImage>
            <ContainerContent>
              <span>Camiseta Beyond the Limits</span>
              <strong>R$ 79,90</strong>
              <button>Remover</button>
            </ContainerContent>
          </ContainerItem>
          <ContainerItem>
            <ContainerImage>
              <Image src={image} width={95} height={95} alt="" />
            </ContainerImage>
            <ContainerContent>
              <span>Camiseta Beyond the Limits</span>
              <strong>R$ 79,90</strong>
              <button>Remover</button>
            </ContainerContent>
          </ContainerItem>
          <ContainerItem>
            <ContainerImage>
              <Image src={image} width={95} height={95} alt="" />
            </ContainerImage>
            <ContainerContent>
              <span>Camiseta Beyond the Limits</span>
              <strong>R$ 79,90</strong>
              <button>Remover</button>
            </ContainerContent>
          </ContainerItem>
        </Container>

        <Footer>
          <ContainerQuantitty>
            <span>Quantidade</span>
            <span>3 itens</span>
          </ContainerQuantitty>
          <ContainerAmount>
            <strong>Valor total</strong>
            <strong>R$ 270,00</strong>
          </ContainerAmount>

          <button>Finalizar compra</button>
        </Footer>

      </Content>
    </Dialog.Portal>
  )
}