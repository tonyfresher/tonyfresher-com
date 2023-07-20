import {ImgHTMLAttributes, useEffect, useState} from 'react';

import Video, {VideoProps} from 'components/Video';

import {cn} from 'lib/classname';

import styles from './BrowserContainer.module.css';

const browserContainer = cn('BrowserContainer', styles);

interface BrowserContainerImageProps
    extends ImgHTMLAttributes<HTMLImageElement> {
    maxHeight?: number;
}

export function BrowserContainerImage(props: BrowserContainerImageProps) {
    return (
        <div className={browserContainer({type: 'image'})}>
            <div
                className={browserContainer('Window')}
                style={{maxHeight: props.maxHeight}}
            >
                <img {...props} />
            </div>
        </div>
    );
}

interface GalleryItem {
    label: string;
    src: string;
}

interface BrowserContainerGalleryProps {
    website: string;
    title: string;
    items: GalleryItem[];
}

export function BrowserContainerGallery({
    website,
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
                <div className={browserContainer('AddressStub')}>{website}</div>
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

export function BrowserContainerVideo(props: VideoProps) {
    return (
        <div className={browserContainer({type: 'video'})}>
            <Video {...props} />
        </div>
    );
}
