import {ReactChild} from 'react'
import {OrderByType} from '../criteria'

export interface ITableSortCellProps {
  name?: string;
  active?: boolean;
  orderBy?: OrderByType;
  onSort?: () => void;
  children: ReactChild;
}
