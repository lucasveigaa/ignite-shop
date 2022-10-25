import * as Dialog from "@radix-ui/react-dialog";
import { styled } from "@stitches/react";

export const Content = styled(Dialog.Content, {
  position: 'fixed',
  width: '30rem',
  right: 0,
  top: 0,
  height: '100vh',
  backgroundColor: '$gray800',
  padding: '0 3rem',
})

export const Overlay = styled(Dialog.Overlay, {
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  inset: 0,
})

export const Title = styled(Dialog.Title, {
  fontSize: '1.25rem',
  paddingTop: '4.5rem',
  marginBottom: '2rem'
})

export const CloseButton = styled(Dialog.Close, {
  position: 'absolute',
  right: '2rem',
  top: '2rem',
  border: 0,
  background: 'transparent',
  width: '1.5rem',
  height: '1.5rem',
  color: '#8D8D99',
  cursor: 'pointer',
  transition: 'color 0.2s',

  '&:hover': {
    color: '$gray100'
  }
})

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem'
})

export const ContainerItem = styled('div', {
  display: 'flex',
  gap: '1.5rem',
})

export const ContainerImage = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: '8px',
  width: '102px',
  height: '93px',
  display: 'flex',
  justifyContent: 'center'
})

export const ContainerContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  span: {
    fontSize: '1.125rem',
    color: '$gray300'
  },

  strong: {
    fontSize: '1.125rem',
    marginTop: '0.25rem',
    marginBottom: '1rem',
  },

  button: {
    border: 0,
    background: 'transparent',
    color: '$green500',
    width: 'fit-content',
    fontWeight: 700,
    cursor: 'pointer',
    transition: 'color 0.2s',

    '&:hover': {
      color: '$green300'
    }
  }
})

export const Footer = styled('footer', {
  marginTop: '2rem',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  bottom: '1rem',

  button: {
    marginTop: '2rem',
    padding: '1.25rem 0',
    background: '$green500',
    border: 0,
    borderRadius: '8px',
    color: '$white',
    cursor: 'pointer',
    transition: 'background 0.2s',

    '&:hover': {
      background: '$green300',
    }
  }
})

export const ContainerQuantitty = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  color: '$gray300'
})

export const ContainerAmount = styled('div', {
  marginTop: '0.5rem',
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: '1.5rem',
  color: '$gray100',

  strong: {
    '&:first-child': {
      fontSize: '1.125rem',
    },
  },
  
})