'use client'

import { type ElementType, Fragment, type MouseEvent, type ReactNode, useState } from 'react'

import { X } from '@untitledui/icons'

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
    selectVibe: 'Select vibe',
    clearVibe: 'Clear vibe'
}

type TriggerComponentProps = { asChild?: boolean; children: ReactNode }

interface TriggerBaseProps {
    TriggerComponent: ElementType<TriggerComponentProps>
    label: string
    showClearButton: boolean
    onClear: (event: MouseEvent<HTMLButtonElement>) => void
    className?: string
}

const triggerStyles = {
    desktop: {
        wrapper: 'relative inline-flex',
        button: 'h-14 w-full justify-start rounded-xl px-6 pr-14 text-lg shadow-lg',
        clearButton:
            'hover:bg-accent hover:text-accent-foreground absolute top-1/2 right-4 inline-flex size-8 -translate-y-1/2 items-center justify-center rounded-md transition-colors',
        clearIcon: 'size-4'
    },
    mobile: {
        wrapper: 'flex w-full items-center gap-2',
        button: 'h-14 flex-1 justify-start rounded-xl px-6 text-lg shadow-lg',
        clearButton:
            'hover:bg-accent hover:text-accent-foreground inline-flex size-9 items-center justify-center rounded-md transition-colors',
        clearIcon: 'size-5'
    }
} as const

type TriggerVariant = keyof typeof triggerStyles

interface TriggerProps extends TriggerBaseProps {
    variant: TriggerVariant
}

function Trigger({
    TriggerComponent,
    label,
    showClearButton,
    onClear,
    className,
    variant
}: TriggerProps) {
    const styles = triggerStyles[variant]

    return (
        <div className={cn(styles.wrapper, className)}>
            <TriggerComponent asChild>
                <Button variant="outline" size="lg" className={styles.button}>
                    <span className="truncate">{label}</span>
                </Button>
            </TriggerComponent>

            {showClearButton && (
                <button
                    type="button"
                    className={styles.clearButton}
                    aria-label={strings.clearVibe}
                    onClick={onClear}
                >
                    <X className={styles.clearIcon} />
                </button>
            )}
        </div>
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

    const currentLabel = currentVibe ? currentVibe.name : strings.selectVibe
    const hasSelection = Boolean(currentVibe)

    const handleClear = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        event.stopPropagation()
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
                            variant="desktop"
                            className="min-w-[12rem]"
                            label={currentLabel}
                            showClearButton={hasSelection}
                            onClear={handleClear}
                        />
                        <DropdownMenuContent align="end" className="w-56">
                            <VibeOptions
                                currentType={currentVibe?.type}
                                onSelect={handleVibeSelect}
                                renderOption={(vibe, isActive, select) => (
                                    <DropdownMenuItem
                                        onSelect={select}
                                        className={cn(
                                            'text-base font-medium',
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
                            variant="mobile"
                            className="w-full"
                            label={currentLabel}
                            showClearButton={hasSelection}
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
                                                    variant={isActive ? 'secondary' : 'ghost'}
                                                    className="justify-start text-base font-medium"
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
