import { format } from 'date-fns';
import { nb } from 'date-fns/locale/nb'

export default function DateComponent({ dateString }: { dateString: string }) {
  return (
    <time dateTime={dateString}>
      {format(new Date(dateString), 'd LLLL, yyyy', { locale: nb })}
    </time>
  );
}
