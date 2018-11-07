export type OrderByType = 'asc' | 'desc';

export interface SortCiteria {
  sort_by?: string;
  order_by?: OrderByType;
}

export interface PaginateCriteria {
  offset: number;
  limit: number;
}

export interface Criteria extends SortCiteria, PaginateCriteria {
}
