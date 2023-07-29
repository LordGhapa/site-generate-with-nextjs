import styled, { css } from 'styled-components';

export const Container = styled.a`
${({ theme }) => css`
font-size: ${theme.font.sizes.small};
text-decoration: none;
display: block;
padding: ${theme.spacings.sizes.small};
color:${theme.colors.primaryColor};
position: relative;

 &::after{
content: "";
position: absolute;
bottom: 0.75rem;
left: 50%;
width: 0%;
height: 0.2rem;
background-color: ${theme.colors.secondaryColor};
transition: all 300ms ease-in-out;
}
&:hover::after{
  left: 25%;
  width: 50%;
}

`}
`;
