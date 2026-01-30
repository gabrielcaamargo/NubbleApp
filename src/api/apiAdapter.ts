import {MetaDataPage, Page} from '@types';

import {MetaDataPageAPI, PageAPI} from './apiTypes';

function toMetaDataPage(meta: MetaDataPageAPI): MetaDataPage {
  return {
    total: meta.total,
    perPage: meta.per_page,
    currentPage: meta.current_page,
    lastPage: meta.last_page,
    firstPage: meta.first_page,
    hasNextPage: !!meta.next_page_url,
    hasPreviousPage: !!meta.previous_page_url,
  };
}

function toPageModel<APIType, ModelType>(
  page: PageAPI<APIType>,
  adapterToModel: (apiType: APIType) => ModelType,
): Page<ModelType> {
  return {
    meta: toMetaDataPage(page.meta),
    data: page.data.map(adapterToModel),
  };
}

export const apiAdapter = {
  toMetaDataPage,
  toPageModel,
};
