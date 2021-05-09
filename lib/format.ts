import capitalize from 'lodash/capitalize';

const LOCALE = 'ru-RU';

export function formatDate(dateString: string, short = false): string {
    const date = new Date(dateString);

    const dayAndMonth = date.toLocaleString(LOCALE, {
        ...(!short && {day: 'numeric'}),
        month: 'short'
    });

    return capitalize(`${dayAndMonth} ${date.getFullYear()}`);
}
