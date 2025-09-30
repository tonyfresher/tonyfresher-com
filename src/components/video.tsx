import { VideoHTMLAttributes } from 'react'

export interface VideoProps extends VideoHTMLAttributes<HTMLVideoElement> {
    source: string
}

export default function Video({ source, autoPlay, controls = true, ...props }: VideoProps) {
    return (
        <video
            className="block w-full"
            controls={controls}
            autoPlay={autoPlay}
            playsInline
            loop
            muted
            {...props}
        >
            <source src={source} type="video/webm" />
            Download <a href={source}>the video</a>
        </video>
    )
}
