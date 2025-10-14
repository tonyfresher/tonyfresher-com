import fs from 'fs'
import path from 'path'

import Link from '@/components/link'
import { cn } from '@/lib/cn'

const strings = {
    sizeLabel: '%s MB'
}

const cvFileName = 'anton-fresher-cv.pdf'
const cvFilePath = path.join(process.cwd(), 'public', cvFileName)
const cvFileSizeMb = fs.statSync(cvFilePath).size / (1024 * 1024)

interface CVProps {
    className?: string
}

function PDFIcon() {
    return (
        <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#clip0_85_2432)">
                <g
                    className="group-hover:-translate-y-0.1 transition-transform duration-200 ease-out group-hover:translate-x-0.25"
                    filter="url(#filter0_dd_85_2432)"
                >
                    <rect
                        x="24.8477"
                        y="1.45605"
                        width="32"
                        height="48"
                        rx="4"
                        transform="rotate(2 24.8477 1.45605)"
                        fill="white"
                        shapeRendering="crispEdges"
                    />
                    <rect
                        x="37.6992"
                        y="5.90723"
                        width="15"
                        height="3"
                        rx="1"
                        transform="rotate(2 37.6992 5.90723)"
                        fill="black"
                        fillOpacity="0.12"
                    />
                    <rect
                        x="28.707"
                        y="5.59326"
                        width="6"
                        height="3"
                        rx="1"
                        transform="rotate(2 28.707 5.59326)"
                        fill="black"
                        fillOpacity="0.12"
                    />
                    <rect
                        x="37.4922"
                        y="11.9038"
                        width="12"
                        height="3"
                        rx="1"
                        transform="rotate(2 37.4922 11.9038)"
                        fill="black"
                        fillOpacity="0.12"
                    />
                    <rect
                        x="36.8633"
                        y="29.8926"
                        width="7"
                        height="3"
                        rx="1"
                        transform="rotate(2 36.8633 29.8926)"
                        fill="black"
                        fillOpacity="0.12"
                    />
                    <rect
                        x="37.0703"
                        y="23.8965"
                        width="12"
                        height="3"
                        rx="1"
                        transform="rotate(2 37.0703 23.8965)"
                        fill="black"
                        fillOpacity="0.12"
                    />
                    <rect
                        x="37.2812"
                        y="17.8999"
                        width="15"
                        height="3"
                        rx="1"
                        transform="rotate(2 37.2812 17.8999)"
                        fill="black"
                        fillOpacity="0.12"
                    />
                </g>
                <g
                    className="group-hover:translate-y-0.1 transition-transform duration-200 ease-out group-hover:-translate-x-0.5"
                    filter="url(#filter1_dd_85_2432)"
                >
                    <rect
                        x="4.07812"
                        y="15.1431"
                        width="32"
                        height="48"
                        rx="4"
                        transform="rotate(-10 4.07812 15.1431)"
                        fill="white"
                        shapeRendering="crispEdges"
                    />
                    <rect
                        x="8.70703"
                        y="18.3882"
                        width="6"
                        height="21"
                        rx="1"
                        transform="rotate(-10 8.70703 18.3882)"
                        fill="black"
                        fillOpacity="0.12"
                    />
                    <rect
                        x="18.6133"
                        y="22.7344"
                        width="15"
                        height="3"
                        rx="1"
                        transform="rotate(-10 18.6133 22.7344)"
                        fill="black"
                        fillOpacity="0.12"
                    />
                    <rect
                        x="17.5703"
                        y="16.8257"
                        width="12"
                        height="3"
                        rx="1"
                        transform="rotate(-10 17.5703 16.8257)"
                        fill="black"
                        fillOpacity="0.12"
                    />
                    <rect
                        x="19.6562"
                        y="28.6431"
                        width="7"
                        height="3"
                        rx="1"
                        transform="rotate(-10 19.6562 28.6431)"
                        fill="black"
                        fillOpacity="0.12"
                    />
                    <rect
                        x="21.7383"
                        y="40.4609"
                        width="7"
                        height="3"
                        rx="1"
                        transform="rotate(-10 21.7383 40.4609)"
                        fill="black"
                        fillOpacity="0.12"
                    />
                    <rect
                        x="22.7812"
                        y="46.3696"
                        width="7"
                        height="3"
                        rx="1"
                        transform="rotate(-10 22.7812 46.3696)"
                        fill="black"
                        fillOpacity="0.12"
                    />
                    <rect
                        x="20.6953"
                        y="34.5522"
                        width="12"
                        height="3"
                        rx="1"
                        transform="rotate(-10 20.6953 34.5522)"
                        fill="black"
                        fillOpacity="0.12"
                    />
                </g>
            </g>
            <defs>
                <filter
                    id="filter0_dd_85_2432"
                    x="20.1719"
                    y="-0.543945"
                    width="39.6562"
                    height="55.0874"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dy="1" />
                    <feGaussianBlur stdDeviation="1.5" />
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_85_2432"
                    />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="0.25" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="effect1_dropShadow_85_2432"
                        result="effect2_dropShadow_85_2432"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect2_dropShadow_85_2432"
                        result="shape"
                    />
                </filter>
                <filter
                    id="filter1_dd_85_2432"
                    x="1.07812"
                    y="7.58643"
                    width="45.8477"
                    height="58.8276"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dy="1" />
                    <feGaussianBlur stdDeviation="1.5" />
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_85_2432"
                    />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="0.25" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="effect1_dropShadow_85_2432"
                        result="effect2_dropShadow_85_2432"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect2_dropShadow_85_2432"
                        result="shape"
                    />
                </filter>
                <clipPath id="clip0_85_2432">
                    <rect width="64" height="64" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}

export default function CV({ className }: CVProps) {
    return (
        <div className={className}>
            <Link
                className={cn(
                    'group -m-4 flex items-center gap-3 rounded-md p-4',
                    'max-lg:m-0 max-lg:p-0 max-lg:hover:bg-transparent',
                    'hover:[&>img]:scale-105'
                )}
                display="inline-block"
                href={`/${cvFileName}`}
                target="_blank"
            >
                <PDFIcon />

                <div className="flex flex-col gap-0.5">
                    <h3 className="m-0 font-semibold">{cvFileName}</h3>
                    <span className="text-muted-foreground">
                        {strings.sizeLabel.replace('%s', cvFileSizeMb.toFixed(1))}
                    </span>
                </div>
            </Link>
        </div>
    )
}
