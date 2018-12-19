export type OrderByType = 'asc' | 'desc';

export interface SortCiteria {
  sortBy?: string;
  orderBy?: OrderByType;
}

export interface PaginateCriteria {
  offset: number;
  limit: number;
}

export interface Criteria extends SortCiteria, PaginateCriteria {
}
