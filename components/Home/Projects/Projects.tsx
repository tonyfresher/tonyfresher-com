import {cn} from 'utils/classname';

import Link from 'components/Link';

import i18n from './i18n/ru';

import styles from '../Home.module.css';

const projects = cn('Projects', styles);

export default function Projects() {
    return (
        <div className={projects()}>
            <h2 className={projects('Header')}>{i18n.header}</h2>
            {i18n.projects.map(
                ({name, position, link, period, description, past}) => (
                    <div className={projects('Project', {past})} key={name}>
                        <h3 className={projects('ProjectHeader')}>
                            {`${position} @ `}
                            <Link
                                className={projects('ProjectName')}
                                href={link}
                            >
                                {name}
                            </Link>
                            {period && (
                                <span className={projects('ProjectPeriod')}>
                                    {period}
                                </span>
                            )}
                        </h3>
                        {description && (
                            <p className={projects('ProjectDescription')}>
                                {description}
                            </p>
                        )}
                    </div>
                )
            )}
        </div>
    );
}
