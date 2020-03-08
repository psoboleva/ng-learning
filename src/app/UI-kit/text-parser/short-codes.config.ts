import { ShortCode } from './short-code.types';

export const TextShortCodes: ShortCode[] = [
  {
    find: '[v]',
    replace: '<span class="marker marker-success"></span>',
  },
  {
    find: '[x]',
    replace: '<span class="marker marker-fail"></span>',
  },
  {
    find: '[!]',
    replace: '<span class="marker marker-warning"></span>',
  }
];