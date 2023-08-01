/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';
import { Title } from '../Heading/styles';

export const Container = styled.div`
${({ theme }) => css`
display: grid;
grid-template-columns: 1fr 1.5fr;
align-items: center;
gap: ${theme.spacings.sizes.large};
 img{
  width: 100%;

}
@media ${theme.media.lteMedium}{
  grid-template-columns: 1fr ;
}

${Title}{
  margin-bottom: ${theme.spacings.sizes.large};

}
`}
`;
export const TextContainer = styled.div`
${({ theme }) => css`

@media ${theme.media.lteMedium}{
 margin-bottom:${theme.spacings.sizes.large};
}

`}
`;

export const ImageContainer = styled.div`
${() => css``}
`;
export const Image = styled.img`
${() => css``}
`;
