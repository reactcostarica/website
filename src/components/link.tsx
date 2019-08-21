import React from 'react'
import styled from '@emotion/styled'

type LinkProps = {
  primary?: boolean
} & React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>

const StyledLink = styled.a<LinkProps>`
  border-bottom: 1px transparent dashed;
  color: ${(props) => (props.primary ? '#53c1de' : '#bebebe')};
  font-size: 18px;
  margin: 0 16px;
  padding-bottom: 5px;
  text-decoration: none;

  &:hover {
    border-bottom-color: currentColor;
  }
`

export default function Link(props: LinkProps) {
  return <StyledLink {...props} />
}
