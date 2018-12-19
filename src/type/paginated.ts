export interface IPagination<T> {
  data: T[];
  total_size: number;
}

export const addInPagination = <T>( item: T, pagination?: IPagination<T>): IPagination<T> => {
  if (!pagination) {
    pagination = {
      data: [],
      total_size: 0,
    };
  }
  pagination.data.push(item);
  pagination.total_size++;
  return pagination;
};

export const mapPaginationFromApi = <T>(map: (d: T) => T) => (p: IPagination<any>): IPagination<T> => ({
  total_size: p.total_size,
  data: p.data.map(map)
})
