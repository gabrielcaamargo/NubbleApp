export interface MetaDataPageAPI {
  current_page: number; // 1;
  first_page: number; // 1;
  first_page_url: string; // '/?page=1';
  last_page: number; //3;
  last_page_url: string; // '/?page=3';
  next_page_url: string; // '/?page=2';
  per_page: number; // 10;
  previous_page_url: string | null; // null;
  total: number; // 24;
}

/**
 * @description Interface que define o formato de uma página de dados de uma API
 * @template Data Tipo do dado da página
 */
export interface PageAPI<Data> {
  meta: MetaDataPageAPI;
  data: Data[];
}
