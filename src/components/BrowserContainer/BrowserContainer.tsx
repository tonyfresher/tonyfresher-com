import {ImgHTMLAttributes} from 'react';

import Video, {VideoProps} from 'components/Video';

import {cn} from 'lib/classname';

import styles from './BrowserContainer.module.css';

const browserContainer = cn('BrowserContainer', styles);

export function BrowserContainerImage(
    props: ImgHTMLAttributes<HTMLImageElement>
) {
    return (
        <div className={browserContainer()}>
            <img {...props} />
        </div>
    );
}

export function BrowserContainerVideo(props: VideoProps) {
    return (
        <div className={browserContainer()}>
            <Video {...props} />
        </div>
    );
}
