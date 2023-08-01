/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';
import { Container as TextComponent } from '../TextComponent/styles';
import { Container as SectionContainer } from '../SectionContainer/styles';

export const Container = styled.footer`
${({ theme }) => css`

text-align: center;
font-size: ${theme.font.sizes.small};
border-top: .2rem solid ${theme.colors.mediumGray};
padding-block: 3rem;
background-color: #fff;
a{
  color: inherit;
  text-decoration: none;
}
& ${TextComponent}{
  font-size:${theme.font.sizes.small};

}
${SectionContainer}{
  padding: 0;
}

`}
`;
