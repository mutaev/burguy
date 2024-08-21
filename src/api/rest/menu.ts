import makeRequest from '@/api/makeRequest';

export const getMenu = (): Promise<any> => {
  return makeRequest({
    url: 'https://d473d87f50375996.mokky.dev/items',
    method: 'GET',
  });
};
