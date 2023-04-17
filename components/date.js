import { parseISO, format } from 'date-fns';

export default function Date({ dateString }) {
  const newDate = parseISO(dateString);
  return <time dateTime={dateString}>{format(newDate, 'LLLL d, yyyy')}</time>;
}