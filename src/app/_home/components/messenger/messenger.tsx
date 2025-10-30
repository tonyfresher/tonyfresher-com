'use client'

import { PropsWithChildren, type ReactNode, useEffect, useState } from 'react'

import Image from 'next/image'

import { motion } from 'motion/react'
import useMeasure from 'react-use-measure'

import { cn } from '@/lib/cn'

import TypingMessage from './typing-message'

// Persist within the tab across client-side navigations; resets on full reload
let hasSeenMessenger = false

const strings = {
    photoAlt: 'Anton Fresher'
}

const styles = {
    container: cn(
        'flex flex-row-reverse items-end gap-x-3 pr-4 max-sm:flex-col max-sm:items-start'
    ),
    messageList: cn('flex flex-1 flex-col items-start gap-1')
}

function Avatar() {
    return (
        <motion.div
            className={cn(
                'box-content overflow-hidden rounded-full',
                'max-sm:border-secondary max-sm:-mt-4 max-sm:-ml-4 max-sm:border-4'
            )}
            layout
        >
            <Image alt={strings.photoAlt} src="/me.jpeg" width={32} height={32} />
        </motion.div>
    )
}

interface BubbleProps extends PropsWithChildren {
    animated?: boolean
}

function Bubble({ children, animated }: BubbleProps) {
    return (
        <motion.div
            className={cn(
                'bg-accent/80 w-fit origin-bottom-left overflow-hidden leading-snug',
                'rounded-[3px] rounded-r-xl first:rounded-tl-xl last:rounded-bl-xl'
            )}
            initial={animated ? { opacity: 0, scale: 0 } : undefined}
            animate={animated ? { opacity: 1, scale: 1 } : undefined}
            transition={{ delay: 0.3, duration: 0.2 }}
        >
            {children}
        </motion.div>
    )
}

function AnimatedMessenger({ messages }: MessengerProps) {
    const [visibleMessagesCount, setVisibleMessagesCount] = useState<number>(0)

    useEffect(() => {
        if (visibleMessagesCount >= messages.length) {
            return
        }

        const nextMessage = messages[visibleMessagesCount]
        const timer = setTimeout(() => {
            setVisibleMessagesCount(prev => prev + 1)
        }, nextMessage.delay)

        return () => clearTimeout(timer)
    }, [visibleMessagesCount, messages])

    const [ref, { height }] = useMeasure()

    return (
        <motion.div animate={{ height }} transition={{ ease: 'easeInOut' }}>
            <div ref={ref} className={styles.container}>
                <div className={styles.messageList}>
                    {messages.slice(0, visibleMessagesCount + 1).map((message, index) => (
                        <Bubble key={message.id} animated>
                            {index < visibleMessagesCount ? message.content : <TypingMessage />}
                        </Bubble>
                    ))}
                </div>
                <Avatar />
            </div>
        </motion.div>
    )
}

function StaticMessenger({ messages }: MessengerProps) {
    return (
        <div className={styles.container}>
            <div className={styles.messageList}>
                {messages.map(message => (
                    <Bubble key={message.id}>{message.content}</Bubble>
                ))}
            </div>
            <Avatar />
        </div>
    )
}

export interface Message {
    id: string
    content: ReactNode
    delay: number
}

interface MessengerProps {
    messages: Message[]
}

export default function Messenger({ messages }: MessengerProps) {
    const [hasSeen] = useState<boolean>(hasSeenMessenger)

    useEffect(() => {
        hasSeenMessenger = true
    }, [])

    return hasSeen ? (
        <StaticMessenger messages={messages} />
    ) : (
        <AnimatedMessenger messages={messages} />
    )
}
