import { GetStaticPaths, GetStaticProps } from "next"
import Image from 'next/future/image'
import Head from "next/head"
import { useRouter } from "next/router"
import { useContext } from "react"
import Stripe from "stripe"
import { CartContext } from "../../contexts/CartContext"
import { stripe } from "../../lib/stripe"
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"
import { ProductType } from "../../types"

interface ProductProps {
  product: {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    price: number;
    priceFormatted: string;
    defaultPriceId: string;
  }
}

export default function Product({ product }: ProductProps) {

  const router = useRouter()

  const { addToCart } = useContext(CartContext)

  function handleAddToCart(product: ProductType) {
    addToCart(product)
    router.push('/')
  }

  return (

    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} alt="" width={520} height={480} />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.priceFormatted}</span>
          <p>{product.description}</p>
          <button onClick={() => handleAddToCart(product)}>Colocar na sacola</button>
        </ProductDetails>

      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          id: 'prod_MWWJ18X9dr1ZNO'
        }
      }
    ],
    fallback: "blocking" // se eu passasse como true poderia usar isso na renderização da pagina para fazer um loading
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {

  const productId = params.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
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
    },
    revalidate: 60 * 60 * 2, // 2 hours
  }
}