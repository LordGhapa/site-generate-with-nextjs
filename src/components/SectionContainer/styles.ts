/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

export const Container = styled.div`
${({ theme }) => css`
max-width: 120rem;
width: 100%;
margin: 0 auto;
padding: ${theme.spacings.sizes.large};

`}
`;
