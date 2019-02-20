import {Theme} from '@material-ui/core'

export const css = {
  pageWidth: 900,
  fontSize: (t: Theme) => t.typography.pxToRem(14),
  fontBig: (t: Theme) => t.typography.pxToRem(16),
  fontSmall: (t: Theme) => t.typography.pxToRem(12),
  colorSuccess: '#00c616',
  colorWarning: '#FF8000',
  colorInfo: '#0288d1',
  noWrap: {
    whiteSpace: 'nowrap' as any,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  }
};
