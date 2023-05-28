import { format, register } from 'timeago.js';
import ko_KR from 'timeago.js/lib/lang/ko.js';

register('ko_KR', ko_KR);

export function formatAgo(date, lang = 'en_US') {
  return format(date, lang);
}
