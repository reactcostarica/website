import React from 'react'
import styled from '@emotion/styled'
import * as system from 'styled-system'

type LinkProps = {
  secondary?: boolean
} & React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>

const StyledLink = styled.a<LinkProps>`
  ${system.color};

  border-bottom: 1px transparent dotted;
  font-size: 18px;
  text-decoration: none;

  &:hover {
    border-bottom-color: currentColor;
  }
`

export default function Link({ secondary, ...props }: LinkProps) {
  return <StyledLink color={!secondary ? 'primary' : 'secondary'} {...props} />
}
