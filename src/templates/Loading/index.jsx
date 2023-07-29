import * as Styled from './styles';

export const Loading = () => {
  return (
    <Styled.Container>
      <h2>
        O carregamento pode acaba demorando pois uso uma api gratuita é demora
        um tempo para ela ligar
        <a
          href="https://api-landing-page-udemy-curso.onrender.com/api/pages?populate=deep&pagination[pageSize]=1&sort[0]=id:desc"
          target="_blank"
          rel="noreferrer"
        >
          Link para json da api
        </a>
      </h2>
    </Styled.Container>
  );
};
