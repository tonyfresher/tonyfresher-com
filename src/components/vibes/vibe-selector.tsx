'use client'

import {
    type ElementType,
    Fragment,
    type MouseEvent,
    type ReactNode,
    type PointerEvent as ReactPointerEvent,
    useState
} from 'react'

import { XClose } from '@untitledui/icons'
import { curry } from 'lodash'

import { Button } from '@/components/ui/button'
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger
} from '@/components/ui/drawer'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/cn'
import type { Vibe } from '@/types/vibe'

import { VIBES } from './config'
import VibeOverlay from './vibe-overlay'
import VibeSound from './vibe-sound'

const strings = {
    selectVibe: 'Change vibe',
    clearVibe: 'Clear vibe'
}

type TriggerComponentProps = { asChild?: boolean; children: ReactNode }

interface TriggerProps {
    TriggerComponent: ElementType<TriggerComponentProps>
    vibe: Vibe | null
    onClear: () => void
}

function Trigger({ TriggerComponent, vibe, onClear }: TriggerProps) {
    const label = vibe?.name ?? strings.selectVibe

    const handleCrossClick = (event: MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation()
        onClear()
    }

    const handleCrossPointerDown = (event: ReactPointerEvent<HTMLButtonElement>) => {
        event.stopPropagation()
    }

    return (
        <TriggerComponent asChild>
            <button
                className={cn(
                    'bg-bright text-bright-foreground flex h-14 items-center gap-2 rounded-lg px-6 text-xl font-medium shadow-lg transition-transform max-md:h-10 max-md:gap-1 max-md:rounded-md max-md:px-4',
                    'hover:scale-102 active:scale-98',
                    vibe && 'pr-3 max-md:pr-1'
                )}
            >
                <span className="truncate">{label}</span>
                {vibe && (
                    <button
                        type="button"
                        className="hover:bg-accent flex size-9 items-center justify-center rounded-md transition-colors"
                        aria-label={strings.clearVibe}
                        onClick={handleCrossClick}
                        onPointerDown={handleCrossPointerDown}
                    >
                        <XClose className="size-6" />
                    </button>
                )}
            </button>
        </TriggerComponent>
    )
}

interface VibeOptionsProps {
    currentType?: Vibe['type']
    onSelect: (vibe: Vibe) => void
    renderOption: (vibe: Vibe, isActive: boolean, select: () => void) => ReactNode
}

function VibeOptions({ currentType, onSelect, renderOption }: VibeOptionsProps) {
    return VIBES.map(vibe => (
        <Fragment key={vibe.type}>
            {renderOption(vibe, currentType === vibe.type, () => onSelect(vibe))}
        </Fragment>
    ))
}

interface VibeSelectorProps {
    className?: string
}

export default function VibeSelector({ className }: VibeSelectorProps) {
    const [currentVibe, setCurrentVibe] = useState<Vibe | null>(null)

    const handleVibeSelect = (vibe: Vibe | null) => {
        setCurrentVibe(vibe)
    }

    const handleClear = () => {
        handleVibeSelect(null)
    }

    return (
        <>
            <VibeSound vibe={currentVibe} />
            <VibeOverlay vibe={currentVibe} />

            <div className={cn('relative flex items-center gap-2', className)}>
                <div className="hidden w-full md:flex md:w-auto">
                    <DropdownMenu>
                        <Trigger
                            TriggerComponent={DropdownMenuTrigger}
                            vibe={currentVibe}
                            onClear={handleClear}
                        />
                        <DropdownMenuContent
                            className="min-w-80 rounded-2xl p-4"
                            align="end"
                            sideOffset={16}
                        >
                            <VibeOptions
                                currentType={currentVibe?.type}
                                onSelect={handleVibeSelect}
                                renderOption={(vibe, isActive, select) => (
                                    <DropdownMenuItem
                                        onSelect={select}
                                        className={cn(
                                            'h-14 justify-center text-xl font-medium',
                                            isActive && 'bg-accent text-accent-foreground'
                                        )}
                                    >
                                        {vibe.name}
                                    </DropdownMenuItem>
                                )}
                            />
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

                <div className="flex w-full md:hidden">
                    <Drawer>
                        <Trigger
                            TriggerComponent={DrawerTrigger}
                            vibe={currentVibe}
                            onClear={handleClear}
                        />
                        <DrawerContent>
                            <DrawerHeader>
                                <DrawerTitle>{strings.selectVibe}</DrawerTitle>
                            </DrawerHeader>
                            <DrawerFooter className="mt-0 gap-0">
                                <div className="flex flex-col gap-2">
                                    <VibeOptions
                                        currentType={currentVibe?.type}
                                        onSelect={handleVibeSelect}
                                        renderOption={(vibe, isActive, select) => (
                                            <DrawerClose asChild>
                                                <Button
                                                    variant={isActive ? 'secondary' : 'clear'}
                                                    className="text-base font-medium"
                                                    onClick={select}
                                                >
                                                    {vibe.name}
                                                </Button>
                                            </DrawerClose>
                                        )}
                                    />
                                </div>
                            </DrawerFooter>
                        </DrawerContent>
                    </Drawer>
                </div>
            </div>
        </>
    )
}
