import { v4 } from 'uuid';

export default (prefix = 'acc'): string =>
  `${prefix}_${v4().replace(/-/g, '')}`;
