import {useRouter} from 'next/router';

import Link from 'components/Link';

import {cn} from 'lib/cn';

const DEFAULT_MENU = [
    {label: 'Tony Fresher', link: '/'},
    {label: 'Work', link: '/work'},
    {label: 'Newsletter', link: 'https://tonyfresher.substack.com'}
];

interface PageMenuItem {
    label: string;
    link: string;
}
export interface PageMenuProps {
    items?: PageMenuItem[];
}

export default function PageMenu({items = DEFAULT_MENU}: PageMenuProps) {
    const router = useRouter();

    return (
        <nav
            className={cn(
                'col-[2/-2] mb-[var(--page-padding-y)] flex flex-wrap gap-x-5 gap-y-2',
                'text-[color:var(--color-content-secondary)] whitespace-nowrap'
            )}
        >
            {items.map(({label, link}) => {
                const isCurrent = link === router.pathname;

                return (
                    <Link
                        key={link}
                        href={link}
                        display="inline-block"
                        className={cn(
                            'text-inherit transition-colors duration-150 ease-out',
                            isCurrent &&
                                'text-[color:var(--color-content-primary)]'
                        )}
                    >
                        {label}
                    </Link>
                );
            })}
        </nav>
    );
}
