import styled from '@emotion/styled'
import * as system from 'styled-system'

type BoxProps = system.BackgroundColorProps &
  system.BorderProps &
  system.FlexboxProps &
  system.LayoutProps &
  system.SpaceProps

export default styled.div<BoxProps>`
  ${system.compose(
    system.border,
    system.color,
    system.flexbox,
    system.layout,
    system.space
  )};

  box-sizing: border-box;
`
