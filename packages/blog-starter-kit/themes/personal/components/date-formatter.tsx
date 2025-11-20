import { format, parseISO } from 'date-fns';
import { he } from 'date-fns/locale';

type Props = {
	dateString: string;
};

export const DateFormatter = ({ dateString }: Props) => {
	if (!dateString) return <></>;
	const date = parseISO(dateString);

	return <time dateTime={dateString}>{format(date, 'd בMMMM yyyy', { locale: he })}</time>;
};
