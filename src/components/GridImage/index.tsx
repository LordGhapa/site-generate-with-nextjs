import * as Styled from './styles';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';
import { SectionBackground } from '../SectionBackground';

export type GridImageProps = {
  title: string;
  description: string;
  background?: boolean;
  grid?: GridImageElProps[];
};
export type GridImageElProps = {
  altText: string;
  srcImg: string;
};
export const GridImage = ({
  title,
  description,
  grid = [],
  background = false,
}: GridImageProps) => {
  return (
    <SectionBackground background={background}>
      <Styled.Container>
        <Heading colorDark={!background} uppercase size="huge" as="h2">
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <Styled.Grid>
          {grid.map((el, index) => (
            <Styled.GridElement key={el.srcImg + index}>
              <Styled.Image src={el.srcImg} alt={el.altText} />
            </Styled.GridElement>
          ))}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
};
