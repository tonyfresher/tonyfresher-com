export default function HiDot() {
    return (
        <>
            <style>{`
                @keyframes eyeMove {
                    0% {
                        transform: translateX(0);
                    }
                    5%, 15% {
                        transform: translateX(-4px);
                    }
                    25%, 40% {
                        transform: translateX(-8px);
                    }
                    50% {
                        transform: translateX(0);
                    }
                }
                
                @keyframes popUpDown {
                    0%, 80% {
                        transform: translateY(0);
                    }
                    40% {
                        transform: translateY(-4px);
                    }
                }
                
                .eye-animate {
                    animation: eyeMove 10s ease-in-out infinite;
                }
                
                .pop-animate {
                    animation: popUpDown 5s ease-in-out infinite;
                }
            `}</style>
            <svg
                className="mx-auto w-full max-w-90"
                width="400"
                height="200"
                viewBox="0 0 400 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g filter="url(#filter0_d_115_1345)" className="pop-animate">
                    <path
                        d="M253.047 76.054L237.727 77.4956C237.505 77.5165 237.375 77.263 237.518 77.0901L247.331 65.2393C247.417 65.1356 247.402 64.9776 247.298 64.8916L216.438 39.3398C216.334 39.2539 216.176 39.2688 216.09 39.3726L205.237 52.4798C205.094 52.6527 204.83 52.5606 204.811 52.3499L203.262 35.892C203.249 35.755 203.134 35.6596 202.997 35.6725L163.106 39.4262C162.969 39.4391 162.873 39.5544 162.886 39.6914L164.22 53.8629C164.241 54.0841 163.987 54.2143 163.825 54.0701L153.231 45.2983C153.127 45.2124 152.969 45.2273 152.883 45.3311L127.331 76.1913C127.245 76.2951 127.26 76.4531 127.364 76.539L139.215 86.3512C139.387 86.4944 139.296 86.7687 139.086 86.7885L123.766 88.2302C123.629 88.243 123.533 88.3583 123.546 88.4953L127.3 128.386C127.313 128.523 127.428 128.619 127.565 128.606L142.885 127.164C143.106 127.143 143.236 127.397 143.093 127.57L133.281 139.42C133.195 139.524 133.21 139.682 133.314 139.768L164.174 165.32C164.278 165.406 164.436 165.391 164.522 165.287L173.294 154.693C173.437 154.52 173.7 154.612 173.72 154.823L175.054 168.994C175.067 169.131 175.182 169.227 175.319 169.214L215.21 165.46C215.347 165.447 215.442 165.332 215.429 165.195L213.88 148.727C213.859 148.505 214.112 148.375 214.275 148.519L227.382 159.372C227.486 159.458 227.644 159.443 227.73 159.339L253.282 128.479C253.368 128.375 253.353 128.217 253.249 128.131L241.398 118.319C241.225 118.176 241.316 117.902 241.527 117.882L256.847 116.44C256.984 116.427 257.079 116.312 257.067 116.175L253.313 76.2841C253.3 76.1471 253.185 76.0517 253.048 76.0646L253.047 76.054Z"
                        fill="#BFA4FF"
                        stroke="#1A1A1A"
                        strokeWidth="1.09005"
                        strokeMiterlimit="10"
                    />
                    <path
                        d="M213.033 110.965L199.947 112.196L189.814 103.806L188.582 90.72L196.972 80.587L210.059 79.3555L220.192 87.7455L221.423 100.832L213.033 110.965Z"
                        fill="white"
                        stroke="#1A1A1A"
                        strokeWidth="1.09005"
                        strokeMiterlimit="10"
                    />
                    <path
                        d="M214.119 82.6934L193.689 84.6159L197.01 80.6042L210.097 79.3727L214.108 82.6944L214.119 82.6934Z"
                        fill="#BFA4FF"
                        stroke="#1A1A1A"
                        strokeWidth="1.09005"
                        strokeMiterlimit="10"
                    />
                    <path
                        d="M181.495 113.932L168.409 115.164L158.287 106.773L157.055 93.6863L165.435 83.5543L178.521 82.3228L188.654 90.7128L189.885 103.799L181.495 113.932Z"
                        fill="white"
                        stroke="#1A1A1A"
                        strokeWidth="1.09005"
                        strokeMiterlimit="10"
                    />
                    <path
                        d="M182.381 85.5728L161.951 87.4953L165.272 83.4836L178.358 82.2521L182.37 85.5738L182.381 85.5728Z"
                        fill="#BFA4FF"
                        stroke="#1A1A1A"
                        strokeWidth="1.09005"
                        strokeMiterlimit="10"
                    />
                    <path
                        d="M190.794 117.341C192.616 117.17 193.953 115.556 193.781 113.733C193.61 111.91 191.996 110.574 190.173 110.745C188.35 110.917 187.014 112.531 187.185 114.354C187.357 116.176 188.971 117.513 190.794 117.341Z"
                        fill="#A27AFF"
                        stroke="#1A1A1A"
                        strokeWidth="1.09005"
                        strokeMiterlimit="10"
                    />
                    <path
                        d="M213.033 110.965L199.947 112.196L189.814 103.806L188.582 90.72L196.972 80.587L210.059 79.3555L220.192 87.7455L221.423 100.832L213.033 110.965Z"
                        fill="white"
                        stroke="#1A1A1A"
                        strokeWidth="1.09005"
                        strokeMiterlimit="10"
                    />
                    <g className="eye-animate">
                        <path
                            d="M212.63 103.061C215.707 102.771 217.86 98.8802 217.435 94.3706C217.011 89.861 214.17 86.4399 211.093 86.7294C208.017 87.0189 205.864 90.91 206.288 95.4196C206.712 99.9292 209.553 103.35 212.63 103.061Z"
                            fill="#1A1A1A"
                            stroke="#1A1A1A"
                            strokeWidth="1.09005"
                            strokeMiterlimit="10"
                        />
                    </g>
                    <path
                        d="M181.495 113.932L168.409 115.164L158.287 106.773L157.055 93.6863L165.435 83.5543L178.521 82.3228L188.654 90.7128L189.885 103.799L181.495 113.932Z"
                        fill="white"
                        stroke="#1A1A1A"
                        strokeWidth="1.09005"
                        strokeMiterlimit="10"
                    />
                    <g className="eye-animate">
                        <path
                            d="M181.095 106.029C184.172 105.74 186.325 101.848 185.9 97.3389C185.476 92.8293 182.635 89.4082 179.558 89.6977C176.482 89.9872 174.328 93.8783 174.753 98.3879C175.177 102.897 178.018 106.319 181.095 106.029Z"
                            fill="#1A1A1A"
                            stroke="#1A1A1A"
                            strokeWidth="1.09005"
                            strokeMiterlimit="10"
                        />
                    </g>
                    <path
                        d="M188.932 94.4501L188.582 90.7308L196.972 80.5977L210.059 79.3663L220.192 87.7563L220.542 91.4756L188.943 94.4491L188.932 94.4501Z"
                        fill="#BFA4FF"
                        stroke="#1A1A1A"
                        strokeWidth="1.09005"
                        strokeMiterlimit="10"
                    />
                    <path
                        d="M157.397 97.4174L157.047 93.698L165.437 83.565L178.524 82.3336L188.657 90.7236L189.007 94.4429L157.408 97.4164L157.397 97.4174Z"
                        fill="#BFA4FF"
                        stroke="#1A1A1A"
                        strokeWidth="1.09005"
                        strokeMiterlimit="10"
                    />
                    <path
                        d="M180.638 120.253C183.568 121.678 187.213 122.345 191.09 121.98C196.917 121.432 201.802 118.676 204.284 114.998"
                        stroke="#1A1A1A"
                        strokeWidth="1.09005"
                        strokeMiterlimit="10"
                    />
                    <path
                        d="M187.728 73.452L188.041 75.3146L179.096 87.9022L163.882 90.4712L151.305 81.5246L150.99 79.6515L187.728 73.452Z"
                        fill="#1A1A1A"
                        stroke="#1A1A1A"
                        strokeWidth="1.09005"
                        strokeMiterlimit="10"
                    />
                    <path
                        d="M224.456 67.2435L224.78 69.1051L215.823 81.6937L200.62 84.2618L188.043 75.3152L187.729 73.4526L224.456 67.2435Z"
                        fill="#1A1A1A"
                    />
                    <mask
                        id="mask0_115_1345"
                        style={{ maskType: 'luminance' }}
                        maskUnits="userSpaceOnUse"
                        x="187"
                        y="67"
                        width="38"
                        height="18"
                    >
                        <path
                            d="M224.456 67.2435L224.78 69.1051L215.823 81.6937L200.62 84.2618L188.043 75.3152L187.729 73.4526L224.456 67.2435Z"
                            fill="white"
                        />
                    </mask>
                    <g mask="url(#mask0_115_1345)">
                        <path
                            d="M211.46 68.8366L204.711 66.9556L198.903 87.7929L205.652 89.6739L211.46 68.8366Z"
                            fill="white"
                            stroke="#1A1A1A"
                            strokeWidth="1.09005"
                            strokeMiterlimit="10"
                        />
                        <path
                            d="M217.774 66.2531L213.961 65.1904L208.153 86.0278L211.966 87.0905L217.774 66.2531Z"
                            fill="white"
                            stroke="#1A1A1A"
                            strokeWidth="1.09005"
                            strokeMiterlimit="10"
                        />
                    </g>
                    <path
                        d="M224.456 67.2435L224.78 69.1051L215.823 81.6937L200.62 84.2618L188.043 75.3152L187.729 73.4526L224.456 67.2435Z"
                        stroke="#1A1A1A"
                        strokeWidth="1.09005"
                        strokeMiterlimit="10"
                    />
                </g>
                <path
                    d="M267.871 72.3743L297.81 46.1973"
                    stroke="black"
                    strokeOpacity="0.83"
                    strokeWidth="1.25399"
                    strokeLinecap="round"
                />
                <path
                    d="M275.711 81.4659L296.245 73.3149"
                    stroke="black"
                    strokeOpacity="0.83"
                    strokeWidth="1.25399"
                    strokeLinecap="round"
                />
                <path
                    d="M111.28 73.6282L47.7969 10.145"
                    stroke="black"
                    strokeOpacity="0.83"
                    strokeWidth="1.25399"
                    strokeLinecap="round"
                />
                <path
                    d="M95.1322 86.9518L44.9727 62.6558"
                    stroke="black"
                    strokeOpacity="0.83"
                    strokeWidth="1.25399"
                    strokeLinecap="round"
                />
                <path
                    d="M109.713 145.262L78.3633 158.586"
                    stroke="black"
                    strokeOpacity="0.83"
                    strokeWidth="1.25399"
                    strokeLinecap="round"
                />
                <path
                    d="M274.457 107.172H332.768"
                    stroke="black"
                    strokeOpacity="0.83"
                    strokeWidth="1.25399"
                    strokeLinecap="round"
                />
                <path
                    d="M262.855 145.733L277.903 154.041"
                    stroke="black"
                    strokeOpacity="0.83"
                    strokeWidth="1.25399"
                    strokeLinecap="round"
                />
                <defs>
                    <filter
                        id="filter0_d_115_1345"
                        x="107.128"
                        y="19.8663"
                        width="166.364"
                        height="166.365"
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
                        <feOffset dy="0.724638" />
                        <feGaussianBlur stdDeviation="5.7971" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0.74902 0 0 0 0 0.643137 0 0 0 0 1 0 0 0 1 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_115_1345"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_115_1345"
                            result="shape"
                        />
                    </filter>
                </defs>
            </svg>
        </>
    )
}
