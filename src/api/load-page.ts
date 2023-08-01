import config from '../config';
import { mapData } from './map-data';
import { PageData } from '../templates/Home';

export const loadPages: (slug: string) => Promise<PageData> = async (
  slug = '',
) => {
  const cleanSlug = slug ? `${slug}` : '';
  const url = `${config.url}${cleanSlug}`;

  const raw = await fetch(url);
  const json = await raw.json();

  const data = mapData([json.data[0].attributes])[0];

  return data;
};
