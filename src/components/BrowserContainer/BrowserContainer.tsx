import {ImgHTMLAttributes, PropsWithChildren, useEffect, useState} from 'react';

import Video, {VideoProps} from 'components/Video';

import {cn} from 'lib/classname';

import styles from './BrowserContainer.module.css';

const browserContainer = cn('BrowserContainer', styles);

interface BrowserContainerProps extends PropsWithChildren {
    type: 'image' | 'video' | 'gallery';
    aspectRatio?: string;
}

export function BrowserContainer({
    type,
    aspectRatio,
    children
}: BrowserContainerProps) {
    return (
        <div className={browserContainer({type})}>
            <div className={browserContainer('Window')} style={{aspectRatio}}>
                {children}
            </div>
        </div>
    );
}

interface BrowserContainerImageProps
    extends ImgHTMLAttributes<HTMLImageElement> {
    aspectRatio?: string;
}

export function BrowserContainerImage({
    aspectRatio,
    ...props
}: BrowserContainerImageProps) {
    return (
        <BrowserContainer type="image" aspectRatio={aspectRatio}>
            <img {...props} />
        </BrowserContainer>
    );
}

export function BrowserContainerVideo(props: VideoProps) {
    return (
        <BrowserContainer type="video">
            <Video {...props} />
        </BrowserContainer>
    );
}

interface GalleryItem {
    label: string;
    src: string;
}

interface BrowserContainerGalleryProps {
    title: string;
    items: GalleryItem[];
}

export function BrowserContainerGallery({
    title,
    items
}: BrowserContainerGalleryProps) {
    const [selectedTab, setSelectedTab] = useState(items[0]);
    const [autoplay, setAutoplay] = useState(true);

    useEffect(() => {
        if (!autoplay) {
            return;
        }

        const interval = setInterval(() => {
            const currentIndex = items.findIndex(
                ({src}) => src === selectedTab.src
            );

            setSelectedTab(items[(currentIndex + 1) % items.length]);
        }, 5000);

        return () => clearInterval(interval);
    });

    return (
        <div
            className={browserContainer({type: 'gallery'})}
            onClick={() => setAutoplay(false)}
        >
            <div className={browserContainer('Sidebar')}>
                <div className={browserContainer('Dots')}>
                    <div className={browserContainer('Dot')} />
                    <div className={browserContainer('Dot')} />
                    <div className={browserContainer('Dot')} />
                </div>
                <span className={browserContainer('SectionTitle')}>
                    {title}
                </span>
                <div className={browserContainer('Tabs')}>
                    {items.map(tab => (
                        <button
                            className={browserContainer('Tab', {
                                selected:
                                    tab.src === selectedTab.src ? 'yes' : 'no'
                            })}
                            key={tab.label}
                            onClick={() => setSelectedTab(tab)}
                        >
                            <img
                                className={browserContainer('TabFavicon')}
                                src="/tripleten/favicon.svg"
                                alt="Favicon"
                            />
                            <span
                                className={browserContainer('TabLabel')}
                                title={tab.label}
                            >
                                {tab.label}
                            </span>
                        </button>
                    ))}
                </div>
            </div>
            <img
                className={browserContainer('Window')}
                src={selectedTab.src}
                alt={selectedTab.label}
            />
        </div>
    );
}
