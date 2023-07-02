import {cn} from 'lib/classname';

import styles from './Video.module.css';

const videoCn = cn('Video', styles);

export interface VideoProps {
    source: string;
    autoPlay?: boolean;
    controls?: boolean;
}

export default function Video({source, autoPlay, controls = true}: VideoProps) {
    return (
        <video
            className={videoCn()}
            controls={controls}
            autoPlay={autoPlay}
            loop
            muted
        >
            <source src={source} type="video/webm" />
            Download <a href={source}>the video</a>
        </video>
    );
}
