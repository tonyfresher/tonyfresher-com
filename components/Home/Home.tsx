import {cn} from 'lib/classname';

import Link from 'components/Link';

import BlogPreview from './BlogPreview';
import Links from './Links';
import Projects from './Projects';

import i18n from './i18n/ru';

import styles from './Home.module.css';

const home = cn('Home', styles);

export default function Home() {
    return (
        <div className={home()}>
            <div className={home('Column', {position: 'left'})}>
                <h1 className={home('Greeting')}>{i18n.greeting}</h1>
                <img
                    className={home('Photo', {size: 'cropped'})}
                    src="/me-cropped.jpg"
                    alt="Me"
                />
                <div className={home('About')}>
                    <p>
                        {i18n.about[0]}
                        <Link href={i18n.freshLink} color="blue">
                            {i18n.about[1]}
                        </Link>
                        {i18n.about[2]}
                    </p>
                </div>
                <BlogPreview />
            </div>
            <div className={home('Column', {position: 'right'})}>
                <img
                    className={home('Photo', {size: 'full'})}
                    src="/me-full.jpg"
                    alt="Me"
                />
                <Projects />
                <Links />
            </div>
            <p className={home('FooterNote')}>{i18n.lastNameNote}</p>
        </div>
    );
}
