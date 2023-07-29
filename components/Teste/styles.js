import styled, { css } from 'styled-components'

export const Component = styled.h1`
  ${({ theme }) => css`
    color: red;
    background-color: ${theme.colors.primaryColor};
  `}
`
