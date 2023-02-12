import Markdown from 'react-markdown';

import type {Experience} from 'types';

import {cn} from 'lib/classname';

import Link from 'components/Link';
import Page from 'components/Page';

import {ExperienceProps} from './types';

import styles from './Experience.module.css';

const experienceCn = cn('Experience', styles);

export default function ExperienceComponent<T extends Experience>({
    experience
}: ExperienceProps<T>) {
    return (
        <Page direction="vertical">
            <article className={experienceCn()}>
                <h1 className={experienceCn('Company')}>
                    {experience.company}
                </h1>
                <span className={experienceCn('Period')}>
                    {experience.period}
                </span>
                <Markdown
                    className={experienceCn('Content')}
                    components={{
                        a: ({children, className, href}) => (
                            <Link className={className} href={href}>
                                {children}
                            </Link>
                        )
                    }}
                >
                    {experience.content}
                </Markdown>
            </article>
        </Page>
    );
}
