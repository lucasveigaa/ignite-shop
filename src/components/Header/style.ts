import { styled } from "@stitches/react";

export const ContainerHeader = styled('header',{
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  button: {
    background: '$gray800',
    padding: '12px',
    borderRadius: '6px',
    position: 'relative',
    border: 0,
    cursor: 'pointer',

    span: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      top: '-8px',
      right: '-15px',
      background: '$green500',
      borderRadius: '1000px',
      width: '24px',
      height: '24px',
      border: '3px solid $gray900'
    }
  }
})