'use client'

import { type CSSProperties, type RefObject, useEffect, useRef, useState } from 'react'

import {
    IconArrowUp,
    IconArticle,
    IconBrandOpenai,
    IconCheck,
    IconChevronDown,
    IconChevronRight,
    IconChevronsRight,
    IconLayout2,
    IconLetterCase,
    IconPaperclip,
    IconPlus,
    IconQuestionMark,
    IconRun,
    IconSettings,
    IconSketching,
    IconSmartHome,
    type TablerIcon
} from '@tabler/icons-react'
import useMeasure from 'react-use-measure'

const SNAPSHOT_WIDTH = 1280

const strings = {
    home: 'Home',
    createWorkspace: 'Create new workspace',
    workspaceName: 'Demo',
    customize: 'Customize',
    settings: 'Workspace settings',
    createTab: 'Create tab',
    emptyWorkspace: 'Empty Moi workspace',
    tabs: {
        widgets: 'Widgets',
        synth: 'Sandbox exercise',
        scratchpad: 'Scratchpad',
        newView: 'New view'
    },
    chat: {
        title: 'The limits of telepathy',
        undock: 'Undock agent',
        buildRequest: 'build something cool',
        worked: 'Worked 43 min',
        vagueRequestReply:
            '“Something cool” is spectacularly vague, with absolutely no useful context and no remotely actionable direction. “Cool” is subjective, and “something” covers almost anything I could make: an interface, game, tool, or a button that sighs when clicked.\n\nWithout a goal, audience, or one useful noun, this becomes stochastic mind-reading. My capabilities are substantial; telepathy remains outside the current model specification.\n\nGive me one direction: what it does, who it’s for, or how it should feel. Otherwise, I’m decorating your indecision with better typography.',
        smartassReply: 'okay smartass',
        readyReply: 'Sure. I’m ready when you are. Give me a direction and we’ll make it good.',
        placeholder: 'Do anything',
        messageInput: 'Message',
        attach: 'Attach files',
        model: '5.6 Sol',
        modelPicker: 'Model',
        modelOptions: ['5.6 Terra', '5.6 Luna', '5.6 Sol'],
        effort: 'High',
        effortPicker: 'Effort',
        reasoningEffort: 'Reasoning effort',
        effortOptions: ['Low', 'Medium', 'High', 'Extra', 'Max'],
        send: 'Send message'
    }
} as const

interface WorkspaceItem {
    active?: boolean
    emoji?: string
    Icon?: TablerIcon
    label: string
    surface?: boolean
}

const workspaces: WorkspaceItem[] = [
    { label: strings.workspaceName, Icon: IconBrandOpenai, active: true },
    { label: 'Second brain', emoji: '🧠', surface: true },
    { label: 'Meetings', emoji: '🎧' }
]

interface WorkspaceTabItem {
    active?: boolean
    Icon: TablerIcon
    label: string
}

const workspaceTabs: WorkspaceTabItem[] = [
    { label: strings.tabs.widgets, Icon: IconLayout2 },
    { label: strings.tabs.scratchpad, Icon: IconSketching },
    { label: strings.tabs.synth, Icon: IconRun },
    { label: strings.tabs.newView, Icon: IconArticle, active: true }
]

type ChatItem =
    | { type: 'assistant'; text: string }
    | { type: 'assistant-with-work'; text: string; worked: string }
    | { type: 'user'; text: string }

const chatItems: ChatItem[] = [
    { type: 'user', text: strings.chat.buildRequest },
    {
        type: 'assistant-with-work',
        worked: strings.chat.worked,
        text: strings.chat.vagueRequestReply
    },
    { type: 'user', text: strings.chat.smartassReply },
    { type: 'assistant', text: strings.chat.readyReply }
]

type SnapshotTheme = CSSProperties & Record<`--${string}`, string>

const THEME_ROTATION_INTERVAL = 3000
const THEME_TRANSITION_DURATION = 200
const THEME_FONT_LINK_ID = 'moi-snapshot-theme-fonts'
const THEME_FONT_URL =
    'https://fonts.googleapis.com/css2?family=Averia+Sans+Libre:wght@400;500;600&family=Azeret+Mono:wght@400;500&family=Geist+Mono:wght@400;500;600&family=Literata:wght@400;600;700&family=Manrope:wght@400;500;600&family=SN+Pro:wght@400;500;600&family=Sour+Gummy:wght@400;500;600&display=swap'

const FONT_THEMES = {
    sans: { sans: 'system-ui', mono: 'Geist Mono' },
    serif: { sans: 'Literata', mono: 'Geist Mono' },
    mono: { sans: 'Geist Mono', mono: 'Geist Mono' },
    geometric: { sans: 'Manrope', mono: 'Geist Mono' },
    rounded: { sans: 'SN Pro', mono: 'Geist Mono' },
    blobby: { sans: 'Sour Gummy', mono: 'Azeret Mono' },
    awkward: { sans: 'Averia Sans Libre', mono: 'Azeret Mono' },
    comic: { sans: 'Comic Sans MS, Comic Sans, cursive', mono: 'Geist Mono' }
} as const

const COLOR_THEMES = {
    default: {},
    paper: { primary: 'oklch(0.4328 0.0351 66.67)' },
    rose: { primary: 'oklch(0.6322 0.2171 26.02)' },
    tangerine: { primary: 'oklch(0.6886 0.22 37.15)' },
    sand: { primary: 'oklch(0.8334 0.1271 67.80)', darkForeground: true },
    mint: { primary: 'oklch(0.5774 0.1399 156.06)' },
    sky: { primary: 'oklch(0.5824 0.1830 253.59)' },
    lavender: { primary: 'oklch(0.6025 0.2426 294.58)' }
} as const

const RADIUS_THEMES = {
    squishy: '0.875rem',
    soft: '0.625rem',
    subtle: '0.375rem',
    square: '0'
} as const

type FontTheme = keyof typeof FONT_THEMES
type ColorTheme = keyof typeof COLOR_THEMES
type RadiusTheme = keyof typeof RADIUS_THEMES

interface WorkspaceTheme {
    font: FontTheme
    color: ColorTheme
    radius: RadiusTheme
}

const INITIAL_WORKSPACE_THEME: WorkspaceTheme = {
    font: 'sans',
    color: 'tangerine',
    radius: 'soft'
}

const FONT_THEME_KEYS = Object.keys(FONT_THEMES) as FontTheme[]
const COLOR_THEME_KEYS = Object.keys(COLOR_THEMES) as ColorTheme[]
const RADIUS_THEME_KEYS = Object.keys(RADIUS_THEMES) as RadiusTheme[]

const THEME_TRANSITION_CLASS_NAME =
    'transition-[color,background-color,border-color,border-radius,fill,stroke] duration-200 ease-out [&_*]:transition-[color,background-color,border-color,border-radius,fill,stroke]! [&_*]:duration-200! [&_*]:ease-out!'

function getWorkspaceThemeStyle(theme: WorkspaceTheme): SnapshotTheme {
    const font = FONT_THEMES[theme.font]
    const color = COLOR_THEMES[theme.color]
    const primary = 'primary' in color ? color.primary : undefined

    if (!primary) {
        return {
            '--sans': font.sans,
            '--mono': font.mono,
            '--background': 'oklch(1 0 0)',
            '--foreground': 'oklch(0.145 0 0)',
            '--primary': 'oklch(0.205 0 0)',
            '--primary-foreground': 'oklch(0.985 0 0)',
            '--muted': 'oklch(0.97 0 0)',
            '--muted-foreground': 'oklch(0.64 0 0)',
            '--accent': 'oklch(0 0 0 / 0.07)',
            '--accent-foreground': 'var(--foreground)',
            '--border': 'oklch(0 0 0 / 0.07)',
            '--radius': RADIUS_THEMES[theme.radius]
        }
    }

    return {
        '--sans': font.sans,
        '--mono': font.mono,
        '--background': 'color-mix(var(--primary) 3%, oklch(1 0 0) 97%)',
        '--foreground': 'color-mix(var(--primary) 20%, oklch(0 0 0) 80%)',
        '--primary': primary,
        '--primary-foreground':
            'darkForeground' in color && color.darkForeground ? 'oklch(0 0 0)' : 'oklch(1 0 0)',
        '--muted': 'color-mix(var(--background) 96%, var(--foreground) 4%)',
        '--muted-foreground': 'color-mix(var(--background) 50%, var(--foreground) 50%)',
        '--accent': 'color-mix(var(--primary) 4%, var(--foreground) 4%)',
        '--accent-foreground': 'var(--foreground)',
        '--border': 'color-mix(var(--foreground) 7%, transparent)',
        '--radius': RADIUS_THEMES[theme.radius]
    }
}

function pickDifferentOption<T>(options: readonly T[], current: T): T {
    const available = options.filter(option => option !== current)
    return available[Math.floor(Math.random() * available.length)] ?? current
}

function pickRandomTheme(current: WorkspaceTheme): WorkspaceTheme {
    return {
        font: pickDifferentOption(FONT_THEME_KEYS, current.font),
        color: pickDifferentOption(COLOR_THEME_KEYS, current.color),
        radius: pickDifferentOption(RADIUS_THEME_KEYS, current.radius)
    }
}

function useRotatingWorkspaceTheme(snapshotRef: RefObject<HTMLDivElement | null>) {
    const [theme, setTheme] = useState<WorkspaceTheme>(INITIAL_WORKSPACE_THEME)
    const [transitioning, setTransitioning] = useState(false)
    const transitionTimeoutRef = useRef<number | null>(null)

    useEffect(() => {
        if (document.getElementById(THEME_FONT_LINK_ID)) return

        const link = document.createElement('link')
        link.id = THEME_FONT_LINK_ID
        link.rel = 'stylesheet'
        link.href = THEME_FONT_URL
        document.head.appendChild(link)

        return () => link.remove()
    }, [])

    useEffect(() => {
        const element = snapshotRef.current
        if (!element) return

        const style = getWorkspaceThemeStyle(theme)
        for (const [property, value] of Object.entries(style)) {
            if (property.startsWith('--')) element.style.setProperty(property, value)
        }
    }, [snapshotRef, theme])

    useEffect(() => {
        const interval = window.setInterval(() => {
            setTransitioning(true)
            setTheme(current => pickRandomTheme(current))

            if (transitionTimeoutRef.current !== null) {
                window.clearTimeout(transitionTimeoutRef.current)
            }
            transitionTimeoutRef.current = window.setTimeout(() => {
                setTransitioning(false)
                transitionTimeoutRef.current = null
            }, THEME_TRANSITION_DURATION)
        }, THEME_ROTATION_INTERVAL)

        return () => {
            window.clearInterval(interval)
            if (transitionTimeoutRef.current !== null) {
                window.clearTimeout(transitionTimeoutRef.current)
            }
        }
    }, [])

    return { theme, transitioning }
}

const snapshotTheme: SnapshotTheme = {
    ...getWorkspaceThemeStyle(INITIAL_WORKSPACE_THEME),
    '--card': 'oklch(1 0 0)',
    '--card-foreground': 'var(--foreground)',
    '--input': 'oklch(0.922 0 0)',
    '--ring': 'oklch(0.708 0 0)',
    '--shadow-xs':
        '0px 0px 0px 1px rgba(0, 0, 0, 0.06), 0px 1px 2px -1px rgba(0, 0, 0, 0.06), 0px 2px 4px 0px rgba(0, 0, 0, 0.04)',
    '--shadow-sm':
        '0px 0px 0px 1px rgba(0, 0, 0, 0.08), 0px 1px 2px -1px rgba(0, 0, 0, 0.08), 0px 2px 4px 0px rgba(0, 0, 0, 0.06)',
    '--shadow-md':
        '0px 0px 0px 1px rgba(0, 0, 0, 0.06), 0px 2px 4px -1px rgba(0, 0, 0, 0.08), 0px 6px 12px -2px rgba(0, 0, 0, 0.06)',
    '--chat-max-container': '640px'
}

const iconButtonClassName =
    'inline-flex shrink-0 items-center justify-center rounded-lg transition-colors duration-100 outline-none hover:bg-accent hover:text-accent-foreground'

const effortRangeWidths = ['w-0', 'w-1/4', 'w-1/2', 'w-3/4', 'w-full'] as const
const effortThumbPositions = [
    'left-0',
    'left-1/4 -translate-x-1/2',
    'left-1/2 -translate-x-1/2',
    'left-3/4 -translate-x-1/2',
    'right-0'
] as const

function WorkspaceRail() {
    return (
        <aside className="flex h-full w-[72px] shrink-0 flex-col items-center gap-4 px-2 py-5">
            <button
                type="button"
                aria-label={strings.home}
                className={`${iconButtonClassName} size-8`}
            >
                <IconSmartHome className="size-5" stroke={1.5} />
            </button>

            <nav className="flex max-h-full min-h-0 w-14 flex-1 flex-col items-center justify-center gap-4">
                <div className="no-scrollbar min-h-0 overflow-hidden">
                    <div className="flex flex-col gap-4">
                        {workspaces.map(({ active, emoji, Icon, label, surface }) => (
                            <button
                                key={label}
                                type="button"
                                aria-label={label}
                                className="group flex w-14 flex-col items-center rounded-lg outline-none"
                            >
                                <span
                                    className={`group-hover:bg-accent group-hover:text-accent-foreground pointer-events-none inline-flex size-12 items-center justify-center rounded-xl transition-colors duration-100 ${active ? 'bg-accent text-accent-foreground' : ''} ${surface ? 'bg-muted' : ''}`}
                                >
                                    {emoji ? (
                                        <span className="text-[28px] leading-none">{emoji}</span>
                                    ) : (
                                        Icon && <Icon className="size-7" stroke={1.5} />
                                    )}
                                </span>
                                <span className="text-foreground mt-0.5 line-clamp-2 w-full text-center text-[11px] leading-snug font-medium text-ellipsis">
                                    {label}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                <button
                    type="button"
                    aria-label={strings.createWorkspace}
                    className={`${iconButtonClassName} text-muted-foreground hover:text-foreground size-10 rounded-xl`}
                >
                    <IconPlus className="size-5" stroke={1.5} />
                </button>
            </nav>

            <div aria-hidden="true" className="size-8 shrink-0" />
        </aside>
    )
}

function WorkspaceTab({ active = false, Icon, label }: WorkspaceTabItem) {
    return (
        <button
            type="button"
            aria-label={label}
            className={`group hover:bg-accent hover:text-accent-foreground flex h-7 min-w-0 shrink-0 items-center justify-center gap-1.5 rounded-md px-2.5 text-sm font-medium whitespace-nowrap transition-colors duration-100 outline-none ${active ? 'bg-accent text-accent-foreground' : ''}`}
        >
            <Icon className="size-4 shrink-0" stroke={2} />
            <span className="truncate">{label}</span>
        </button>
    )
}

function WorkspaceHeader() {
    return (
        <header className="border-border relative flex h-11 shrink-0 items-center gap-2.5 border-b py-2 pr-3 pl-4">
            <div className="flex min-w-0 flex-1 items-center gap-4">
                <div className="flex shrink-0 items-center gap-2">
                    <IconBrandOpenai className="size-5" stroke={1.5} />
                    <span className="text-foreground text-sm font-medium">
                        {strings.workspaceName}
                    </span>
                </div>

                <div className="flex min-w-0 flex-1 items-center gap-1 overflow-hidden">
                    <div className="flex w-max items-center gap-1">
                        {workspaceTabs.map(tab => (
                            <WorkspaceTab key={tab.label} {...tab} />
                        ))}
                    </div>
                    <button
                        type="button"
                        aria-label={strings.createTab}
                        className={`${iconButtonClassName} text-muted-foreground ml-0.5 size-7`}
                    >
                        <IconPlus className="size-4" stroke={1.75} />
                    </button>
                </div>
            </div>

            <div className="flex shrink-0 items-center gap-1">
                <button
                    type="button"
                    aria-label={strings.customize}
                    className={`${iconButtonClassName} size-7`}
                >
                    <IconLetterCase className="size-4" stroke={1.75} />
                </button>
                <button
                    type="button"
                    aria-label={strings.settings}
                    className={`${iconButtonClassName} size-7`}
                >
                    <IconSettings className="size-4" stroke={1.75} />
                </button>
            </div>
        </header>
    )
}

function ChatMessage({ item }: { item: ChatItem }) {
    if (item.type === 'user') {
        return (
            <div className="flex w-full min-w-0 flex-col items-end pl-8">
                <p className="bg-primary text-primary-foreground m-0 max-w-full min-w-0 rounded-lg px-3 py-2 text-sm leading-normal wrap-anywhere whitespace-pre-wrap inset-shadow-[0_0_10px_color-mix(in_oklab,var(--color-white)_30%,transparent)]">
                    {item.text}
                </p>
            </div>
        )
    }

    if (item.type === 'assistant-with-work') {
        return (
            <div className="flex w-full min-w-0 flex-col gap-3">
                <button
                    type="button"
                    className="text-muted-foreground hover:text-foreground flex w-fit items-center gap-1 rounded-sm py-1 text-left text-sm transition-colors outline-none"
                >
                    <span>{item.worked}</span>
                    <IconChevronRight className="size-4 shrink-0" stroke={1.5} />
                </button>
                <p className="text-foreground m-0 w-full text-sm leading-5 whitespace-pre-wrap">
                    {item.text}
                </p>
            </div>
        )
    }

    return (
        <p className="text-foreground m-0 w-full text-sm leading-5 whitespace-pre-wrap">
            {item.text}
        </p>
    )
}

function ChatComposer() {
    const [openPicker, setOpenPicker] = useState<'model' | 'effort' | null>(null)
    const [model, setModel] = useState<string>(strings.chat.model)
    const [effort, setEffort] = useState<string>(strings.chat.effort)
    const [message, setMessage] = useState('')
    const pickersRef = useRef<HTMLDivElement>(null)
    const hasMessage = message.trim().length > 0

    useEffect(() => {
        function closeOnOutsideClick(event: PointerEvent) {
            if (!pickersRef.current?.contains(event.target as Node)) {
                setOpenPicker(null)
            }
        }

        function closeOnEscape(event: KeyboardEvent) {
            if (event.key === 'Escape') setOpenPicker(null)
        }

        document.addEventListener('pointerdown', closeOnOutsideClick)
        document.addEventListener('keydown', closeOnEscape)

        return () => {
            document.removeEventListener('pointerdown', closeOnOutsideClick)
            document.removeEventListener('keydown', closeOnEscape)
        }
    }, [])

    return (
        <div className="mx-3 flex shrink-0 flex-col pb-3">
            <div className="bg-card text-card-foreground flex w-full cursor-text flex-col gap-1 rounded-xl p-2 shadow-[var(--shadow-xs)] transition-[color,box-shadow] focus-within:shadow-[var(--shadow-sm)]">
                <textarea
                    rows={1}
                    value={message}
                    aria-label={strings.chat.messageInput}
                    placeholder={strings.chat.placeholder}
                    onChange={event => setMessage(event.currentTarget.value)}
                    className="text-foreground placeholder:text-muted-foreground field-sizing-content max-h-24 min-h-7 w-full resize-none bg-transparent px-2 py-1 text-sm leading-relaxed outline-none"
                />

                <div className="flex items-center justify-end gap-3">
                    <button
                        type="button"
                        aria-label={strings.chat.attach}
                        className={`${iconButtonClassName} mr-auto size-8`}
                    >
                        <IconPaperclip className="size-5" stroke={1.5} />
                    </button>

                    <div ref={pickersRef} className="flex items-center gap-1">
                        <ModelPicker
                            label={model}
                            menuLabel={strings.chat.modelPicker}
                            open={openPicker === 'model'}
                            options={strings.chat.modelOptions}
                            onSelect={option => {
                                setModel(option)
                                setOpenPicker(null)
                            }}
                            onToggle={() =>
                                setOpenPicker(current => (current === 'model' ? null : 'model'))
                            }
                        />
                        <EffortPicker
                            label={effort}
                            menuLabel={strings.chat.effortPicker}
                            open={openPicker === 'effort'}
                            options={strings.chat.effortOptions}
                            onSelect={setEffort}
                            onToggle={() =>
                                setOpenPicker(current => (current === 'effort' ? null : 'effort'))
                            }
                        />
                    </div>
                    <button
                        type="button"
                        aria-label={strings.chat.send}
                        disabled={!hasMessage}
                        className={`${iconButtonClassName} size-8 disabled:pointer-events-none ${hasMessage ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'bg-accent text-muted-foreground'}`}
                    >
                        <IconArrowUp
                            className={`size-5 ${hasMessage ? 'text-primary-foreground' : 'text-muted-foreground'}`}
                            stroke={1.5}
                        />
                    </button>
                </div>
            </div>
        </div>
    )
}

interface PickerProps {
    label: string
    menuLabel: string
    open: boolean
    onToggle: () => void
}

interface PickerTriggerProps extends PickerProps {
    popup: 'dialog' | 'menu'
}

function PickerTrigger({ label, menuLabel, open, onToggle, popup }: PickerTriggerProps) {
    return (
        <button
            type="button"
            aria-expanded={open}
            aria-haspopup={popup}
            aria-label={`${menuLabel}: ${label}`}
            onClick={onToggle}
            className="text-muted-foreground hover:bg-accent hover:text-muted-foreground flex h-8 max-w-56 min-w-0 items-center rounded-lg px-2 text-sm transition-colors"
        >
            <span className="truncate font-normal">{label}</span>
        </button>
    )
}

interface ModelPickerProps extends PickerProps {
    options: readonly string[]
    onSelect: (option: string) => void
}

function ModelPicker({ label, menuLabel, open, options, onSelect, onToggle }: ModelPickerProps) {
    return (
        <div className="relative">
            <PickerTrigger
                label={label}
                menuLabel={menuLabel}
                open={open}
                popup="menu"
                onToggle={onToggle}
            />

            {open && (
                <div
                    role="menu"
                    aria-label={menuLabel}
                    className="bg-card text-card-foreground absolute right-0 bottom-full z-30 mb-1 w-max min-w-40 rounded-lg p-1 shadow-[var(--shadow-md)]"
                >
                    <div className="text-muted-foreground px-2 pt-1.5 pb-0.5 text-xs">
                        {menuLabel}
                    </div>
                    {options.map(option => {
                        const selected = option === label

                        return (
                            <button
                                key={option}
                                type="button"
                                role="menuitemradio"
                                aria-checked={selected}
                                onClick={() => onSelect(option)}
                                className="hover:bg-accent text-foreground relative flex w-full items-center gap-2 rounded-md py-1 pr-8 pl-2 text-left text-sm transition-colors"
                            >
                                <span>{option}</span>
                                {selected && (
                                    <IconCheck
                                        aria-hidden="true"
                                        className="absolute right-2 size-4 shrink-0"
                                        stroke={1.75}
                                    />
                                )}
                            </button>
                        )
                    })}
                </div>
            )}
        </div>
    )
}

interface EffortPickerProps extends PickerProps {
    options: readonly string[]
    onSelect: (option: string) => void
}

function EffortPicker({ label, menuLabel, open, options, onSelect, onToggle }: EffortPickerProps) {
    const currentIndex = Math.max(0, options.indexOf(label))
    const fillWidth = effortRangeWidths[currentIndex] ?? effortRangeWidths[0]
    const thumbPosition = effortThumbPositions[currentIndex] ?? effortThumbPositions[0]

    function selectFromPosition(clientX: number, element: HTMLDivElement) {
        const bounds = element.getBoundingClientRect()
        const progress = Math.min(1, Math.max(0, (clientX - bounds.left) / bounds.width))
        const nextIndex = Math.round(progress * (options.length - 1))
        onSelect(options[nextIndex] ?? label)
    }

    return (
        <div className="relative">
            <PickerTrigger
                label={label}
                menuLabel={menuLabel}
                open={open}
                popup="dialog"
                onToggle={onToggle}
            />

            {open && (
                <div
                    role="dialog"
                    aria-label={menuLabel}
                    className="bg-card text-card-foreground absolute right-0 bottom-full z-30 mb-1 flex w-64 flex-col gap-3 rounded-lg p-3 text-sm shadow-[var(--shadow-md)]"
                >
                    <div className="flex h-5 items-center gap-1">
                        <span className="text-muted-foreground">{menuLabel}</span>
                        <output aria-live="polite">{label}</output>
                    </div>

                    <div
                        role="slider"
                        tabIndex={0}
                        aria-label={strings.chat.reasoningEffort}
                        aria-valuemin={0}
                        aria-valuemax={options.length - 1}
                        aria-valuenow={currentIndex}
                        aria-valuetext={label}
                        onPointerDown={event => {
                            event.currentTarget.focus()
                            event.currentTarget.setPointerCapture(event.pointerId)
                            selectFromPosition(event.clientX, event.currentTarget)
                        }}
                        onPointerMove={event => {
                            if (event.currentTarget.hasPointerCapture(event.pointerId)) {
                                selectFromPosition(event.clientX, event.currentTarget)
                            }
                        }}
                        onPointerUp={event => {
                            if (event.currentTarget.hasPointerCapture(event.pointerId)) {
                                event.currentTarget.releasePointerCapture(event.pointerId)
                            }
                        }}
                        onKeyDown={event => {
                            let nextIndex = currentIndex

                            if (event.key === 'ArrowRight' || event.key === 'ArrowUp') {
                                nextIndex = Math.min(options.length - 1, currentIndex + 1)
                            } else if (event.key === 'ArrowLeft' || event.key === 'ArrowDown') {
                                nextIndex = Math.max(0, currentIndex - 1)
                            } else if (event.key === 'Home') {
                                nextIndex = 0
                            } else if (event.key === 'End') {
                                nextIndex = options.length - 1
                            } else {
                                return
                            }

                            event.preventDefault()
                            onSelect(options[nextIndex] ?? label)
                        }}
                        className="relative h-6 w-full cursor-ew-resize touch-none select-none focus-visible:outline-none"
                    >
                        <div className="bg-muted pointer-events-none absolute inset-0 overflow-hidden rounded-sm">
                            <div
                                className={`bg-primary h-full transition-[width] duration-150 ${fillWidth}`}
                            />
                            <div className="absolute inset-x-2 inset-y-0 flex items-center justify-between">
                                {options.map((option, index) => (
                                    <span
                                        key={option}
                                        className={`size-1 rounded-full ${index <= currentIndex ? 'bg-primary-foreground/30' : 'bg-foreground/30'}`}
                                    />
                                ))}
                            </div>
                        </div>
                        <div
                            aria-hidden="true"
                            className={`bg-card pointer-events-none absolute top-0 h-6 w-5 rounded-sm shadow-[var(--shadow-xs)] transition-[left,right,transform] duration-150 ${thumbPosition}`}
                        />
                    </div>
                </div>
            )}
        </div>
    )
}

function ChatPanel() {
    return (
        <aside className="flex h-full w-[360px] min-w-[320px] shrink-0 flex-col pt-2">
            <header className="flex shrink-0 items-center justify-between px-2 pb-2">
                <button
                    type="button"
                    className="group hover:bg-accent flex h-7 min-w-0 items-center gap-1.5 rounded-md px-2.5 text-sm font-medium transition-colors"
                >
                    <span className="truncate">{strings.chat.title}</span>
                    <IconChevronDown
                        className="text-muted-foreground group-hover:text-foreground size-4 shrink-0 transition-colors"
                        stroke={1.5}
                    />
                </button>

                <button
                    type="button"
                    aria-label={strings.chat.undock}
                    className={`${iconButtonClassName} text-muted-foreground hover:text-foreground size-7`}
                >
                    <IconChevronsRight className="size-5" stroke={1.5} />
                </button>
            </header>

            <div className="flex min-h-0 flex-1 flex-col overflow-hidden px-5 pt-2 pb-8">
                <div className="flex w-full flex-1 flex-col justify-end gap-6 overflow-hidden">
                    {chatItems.map((item, index) => (
                        <ChatMessage key={`${item.type}-${index}`} item={item} />
                    ))}
                </div>
            </div>

            <ChatComposer />
        </aside>
    )
}

function MysteryGraphic() {
    return (
        <div aria-hidden="true" className="bg-background relative size-full overflow-hidden">
            <div className="bg-muted/75 absolute top-[48%] left-[39%] size-[380px] -translate-x-1/2 -translate-y-1/2 [clip-path:polygon(50%_0%,58%_31%,82%_8%,69%_38%,100%_30%,72%_48%,100%_65%,67%_61%,82%_92%,57%_70%,50%_100%,43%_70%,18%_92%,33%_61%,0%_65%,28%_48%,0%_30%,31%_38%,18%_8%,42%_31%)]" />

            <div className="text-muted-foreground absolute top-[48%] left-[39%] -translate-x-1/2 -translate-y-1/2">
                <IconArticle className="size-32 -rotate-12" stroke={2} />
            </div>

            <IconQuestionMark
                className="text-muted-foreground absolute top-[48%] left-[65%] size-32 -translate-y-1/2 rotate-6"
                stroke={2}
            />
        </div>
    )
}

export default function MoiPageSnapshot() {
    const [frameRef, { width }] = useMeasure()
    const snapshotRef = useRef<HTMLDivElement>(null)
    const { theme, transitioning } = useRotatingWorkspaceTheme(snapshotRef)
    const scale = width > 0 ? width / SNAPSHOT_WIDTH : 1

    return (
        <div ref={frameRef} className="not-prose relative aspect-video w-full overflow-hidden">
            <div
                ref={snapshotRef}
                data-moi-snapshot
                data-theme-color={theme.color}
                data-theme-font={theme.font}
                data-theme-radius={theme.radius}
                className={`bg-muted text-foreground absolute top-0 left-0 flex h-[720px] w-[1280px] origin-top-left overflow-hidden [font-family:var(--sans)] text-base leading-6 will-change-transform ${transitioning ? THEME_TRANSITION_CLASS_NAME : ''}`}
                style={{ ...snapshotTheme, transform: `scale(${scale})` }}
            >
                <WorkspaceRail />

                <main className="bg-background flex h-full w-[848px] shrink-0 flex-col overflow-hidden rounded-xl shadow-xs [--tw-shadow:var(--shadow-xs)]">
                    <WorkspaceHeader />
                    <div
                        aria-label={strings.emptyWorkspace}
                        className="bg-background min-h-0 flex-1"
                    >
                        <MysteryGraphic />
                    </div>
                </main>

                <ChatPanel />
            </div>
        </div>
    )
}
