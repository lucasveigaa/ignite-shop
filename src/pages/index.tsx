import { GetStaticProps } from 'next'
import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'

import Stripe from 'stripe'
import { stripe } from '../lib/stripe'

import { ContainerFooterDescription, ContainerFooterImage, HomeContainer, Product } from '../styles/pages/home'

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { Handbag } from 'phosphor-react'
import { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'
import { ProductType } from '../types'



interface HomeProps {
  products: {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    priceFormatted: string;
    price: number;
    defaultPriceId: string;
  }[]
}

export default function Home({ products }: HomeProps) {

  console.log(products)

  const { addToCart } = useContext(CartContext)

  function handleAddToCart(product: ProductType) {
    addToCart(product)

  }

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })

  return (
    <>

      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">

        {products.map(product => {
          return (
            <>
              <Product className='keen-slider__slide'>
                <Link href={`/product/${product.id}`} key={product.id} prefetch={false} >
                  <Image alt="" src={product.imageUrl} width={520} height={480} />
                </Link>
                <footer>
                  <ContainerFooterDescription>
                    <strong>{product.name}</strong>
                    <span>{product.priceFormatted}</span>
                  </ContainerFooterDescription>
                  <ContainerFooterImage onClick={() => addToCart(product)}>
                    <Handbag size={27} color="#FFF" />
                  </ContainerFooterImage>
                </footer>
              </Product>
            </>

          )
        })}

      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  });

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      description: product.description,
      imageUrl: product.images[0],
      price: price.unit_amount / 100,
      priceFormatted: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount / 100),
      defaultPriceId: price.id,
    }
  })

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2, // 2 hours    
  }
}