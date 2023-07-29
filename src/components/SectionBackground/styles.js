/* eslint-disable no-unused-vars */

import styled, { css } from 'styled-components';

const containerBackgroundActivate = (theme) => css`
color: ${theme.colors.white};
background: ${theme.colors.primaryColor};
`;

export const Container = styled.div`
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
