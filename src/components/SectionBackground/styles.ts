/* eslint-disable no-unused-vars */

import styled, { DefaultTheme, css } from 'styled-components';
type bg = {
  background: boolean;
};

const containerBackgroundActivate = (theme: DefaultTheme) => css`
color: ${theme.colors.white};
background: ${theme.colors.primaryColor};
`;

export const Container = styled.div<bg>`
${({ theme, background }) => css`
background: ${theme.colors.white};
color: ${theme.colors.primaryColor};


${background && containerBackgroundActivate(theme)};
min-height: 100vh;
display: flex;
align-items: center;
justify-content: center;
`}
`;
