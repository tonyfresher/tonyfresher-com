interface MessageProps {
    text: string
}

export default function TextMessage({ text }: MessageProps) {
    return <div className="px-4 py-2">{text}</div>
}
