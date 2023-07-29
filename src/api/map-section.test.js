import {
  mapImageGrid,
  mapSectionContent,
  mapSectionTwoColumns,
  mapSections,
  mapTextGrid,
} from './map-section';
import fakeData from './dados.json';

describe('map-section', () => {
  it('should render map sections predefined if no data', () => {
    const data = mapSections();
    expect(data).toEqual([]);
  });
  it('should render map sections with correct data', () => {
    mapSections(fakeData.data[0].attributes.sections);
  });
  it('should render map sections with error data', () => {
    const withoutTextOrImg = mapSections([
      { __component: 'section.section-grid' },
    ]);

    expect(withoutTextOrImg).toStrictEqual([
      { __component: 'section.section-grid' },
    ]);

    const withoutComponent = mapSections([{}]);
    expect(withoutComponent).toStrictEqual([{}]);
  });

  it('should render section-grid with no text or image', () => {
    const withoutTextOrImg = mapSections([
      {
        __component: 'section.section-grid',
        text_grid: [{}],
      },
      {
        __component: 'section.section-grid',
        image_grid: [{}],
      },
    ]);
    expect(withoutTextOrImg.length).toBe(2);
  });

  it('should map sections two columns', () => {
    const data = mapSectionTwoColumns();
    expect(data.background).toBe(false);
    expect(data.component).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.srcImg).toBe('');
    expect(data.text).toBe('');
    expect(data.title).toBe('');
  });
  it('should map sections two columns', () => {
    const data = mapSectionTwoColumns(mock_section_two_columns);
    expect(data.background).toBe(true);
    expect(data.component).toBe('section.section-two-columns');
    expect(data.sectionId).toBe('home');
    expect(data.srcImg).toBe('https://a.svg');
    expect(data.text).toBe('Description text.');
    expect(data.title).toBe('JANUARY BRINGS US FIREFOX 85');
  });

  it('should map sectionsContent', () => {
    const data = mapSectionContent(mock_section_content);
    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-content');
    expect(data.sectionId).toBe('news');
    expect(data.html).toBe('content section-content');
    expect(data.title).toBe('NEWS COVERAGE AND SOME SURPRISES');
  });
  it('should map sectionsContent with no data', () => {
    const data = mapSectionContent();
    expect(data.background).toBe(false);
    expect(data.component).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.html).toBe('');
    expect(data.title).toBe('');
  });

  it('should map grid text', () => {
    const data = mapTextGrid(mock_grid_text);
    expect(data.background).toBe(true);
    expect(data.component).toBe('section.section-grid-text');
    expect(data.sectionId).toBe('mygrid');
    expect(data.description).toBe('Uma breve descrição.');
    expect(data.title).toBe('MY GRID');
    expect(data.grid[0].title).toBe('Teste 1');
    expect(data.grid[0].description).toBe('abc');
  });
  it('should map grid text empty', () => {
    const data = mapTextGrid(undefined);
    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-grid-text');
    expect(data.sectionId).toBe('');
    expect(data.description).toBe('');
    expect(data.title).toBe('');
  });
  it('should map grid image ', () => {
    const data = mapImageGrid(mock_grid_image);
    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-grid-image');
    expect(data.sectionId).toBe('gallery');
    expect(data.description).toBe('Uma breve descrição.');
    expect(data.title).toBe('GALLERY');
    expect(data.grid[0].srcImg).toBe('a.svg');
    expect(data.grid[0].altText).toBe('null');
  });
  it('should map grid image empty', () => {
    const data = mapImageGrid();
    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-grid-image');
  });
});

const mock_section_content = {
  id: 1,
  __component: 'section.section-content',
  title: 'NEWS COVERAGE AND SOME SURPRISES',
  content: 'content section-content',
  metadata: {
    id: 12,
    name: 'news',
    section_id: 'news',
    background: false,
  },
};

const mock_section_two_columns = {
  id: 1,
  __component: 'section.section-two-columns',
  title: 'JANUARY BRINGS US FIREFOX 85',
  description: 'Description text.',
  image: {
    data: {
      id: 2,
      attributes: {
        name: 'javascript.svg',
        alternativeText: null,
        url: 'https://a.svg',
      },
    },
  },
  metadata: {
    id: 11,
    name: 'home',
    section_id: 'home',
    background: true,
  },
};

const mock_grid_text = {
  id: 11,
  __component: 'section.section-grid',
  title: 'MY GRID',
  description: 'Uma breve descrição.',
  metadata: {
    id: 13,
    name: 'mygrid',
    section_id: 'mygrid',
    background: true,
  },
  text_grid: [
    {
      id: 224,
      title: 'Teste 1',
      description: 'abc',
    },
    {
      id: 225,
      title: 'Teste 2',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.',
    },
    {
      id: 226,
      title: 'Teste 3',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.',
    },
  ],
  image_grid: [],
};
const mock_grid_image = {
  id: 12,
  __component: 'section.section-grid',
  title: 'GALLERY',
  description: 'Uma breve descrição.',
  metadata: {
    id: 14,
    name: 'gallery',
    section_id: 'gallery',
    background: false,
  },
  text_grid: [],
  image_grid: [
    {
      id: 1,
      image: {
        data: [
          {
            id: 2,
            attributes: {
              name: 'a_nome.svg',
              alternativeText: 'null',
              url: 'a.svg',
            },
          },
        ],
      },
    },
    {
      id: 2,
      image: {
        data: [
          {
            id: 2,
            attributes: {
              name: 'javascript.svg',
              alternativeText: null,
              url: 'https://res.cloudinary.com/duqhyfegq/image/upload/v1687323593/javascript_9d07e6f7bf.svg',
            },
          },
        ],
      },
    },
    {
      id: 3,
      image: {
        data: [
          {
            id: 2,
            attributes: {
              name: 'javascript.svg',
              alternativeText: null,
              url: 'https://res.cloudinary.com/duqhyfegq/image/upload/v1687323593/javascript_9d07e6f7bf.svg',
            },
          },
        ],
      },
    },
  ],
};
