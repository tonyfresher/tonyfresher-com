'use client'

import { type ElementType, type MouseEvent, type ReactNode, useState } from 'react'

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

function DesktopTrigger({
    TriggerComponent,
    label,
    showClearButton,
    onClear,
    className
}: TriggerBaseProps) {
    return (
        <div className={cn('relative inline-flex', className)}>
            <TriggerComponent asChild>
                <Button
                    variant="outline"
                    size="lg"
                    className="h-14 w-full justify-start rounded-xl px-6 pr-14 text-lg shadow-lg"
                >
                    <span className="truncate">{label}</span>
                </Button>
            </TriggerComponent>

            {showClearButton && (
                <button
                    type="button"
                    className="hover:bg-accent hover:text-accent-foreground absolute top-1/2 right-4 inline-flex size-8 -translate-y-1/2 items-center justify-center rounded-md transition-colors"
                    aria-label={strings.clearVibe}
                    onClick={onClear}
                >
                    <X className="size-4" />
                </button>
            )}
        </div>
    )
}

function MobileTrigger({
    TriggerComponent,
    label,
    showClearButton,
    onClear,
    className
}: TriggerBaseProps) {
    return (
        <div className={cn('flex w-full items-center gap-2', className)}>
            <TriggerComponent asChild>
                <Button
                    variant="outline"
                    size="lg"
                    className="h-14 flex-1 justify-start rounded-xl px-6 text-lg shadow-lg"
                >
                    <span className="truncate">{label}</span>
                </Button>
            </TriggerComponent>

            {showClearButton && (
                <button
                    type="button"
                    className="hover:bg-accent hover:text-accent-foreground inline-flex size-9 items-center justify-center rounded-md transition-colors"
                    aria-label={strings.clearVibe}
                    onClick={onClear}
                >
                    <X className="size-5" />
                </button>
            )}
        </div>
    )
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

    const renderMenuItems = (onSelect: (vibe: Vibe) => void) => (
        <>
            {VIBES.map(vibe => (
                <DropdownMenuItem
                    key={vibe.type}
                    onSelect={() => onSelect(vibe)}
                    className={cn(
                        'text-base font-medium',
                        currentVibe?.type === vibe.type && 'bg-accent text-accent-foreground'
                    )}
                >
                    {vibe.name}
                </DropdownMenuItem>
            ))}
        </>
    )

    const renderDrawerItems = () => (
        <div className="flex flex-col gap-2">
            {VIBES.map(vibe => (
                <DrawerClose asChild key={vibe.type}>
                    <Button
                        variant={currentVibe?.type === vibe.type ? 'secondary' : 'ghost'}
                        className="justify-start text-base font-medium"
                        onClick={() => handleVibeSelect(vibe)}
                    >
                        {vibe.name}
                    </Button>
                </DrawerClose>
            ))}
        </div>
    )

    return (
        <>
            <VibeSound vibe={currentVibe} />
            <VibeOverlay vibe={currentVibe} />

            <div className={cn('relative flex items-center gap-2', className)}>
                <div className="hidden w-full md:flex md:w-auto">
                    <DropdownMenu>
                        <DesktopTrigger
                            TriggerComponent={DropdownMenuTrigger}
                            className="min-w-[12rem]"
                            label={currentLabel}
                            showClearButton={hasSelection}
                            onClear={handleClear}
                        />
                        <DropdownMenuContent align="end" className="w-56">
                            {renderMenuItems(handleVibeSelect)}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

                <div className="flex w-full md:hidden">
                    <Drawer>
                        <MobileTrigger
                            TriggerComponent={DrawerTrigger}
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
                                {renderDrawerItems()}
                            </DrawerFooter>
                        </DrawerContent>
                    </Drawer>
                </div>
            </div>
        </>
    )
}
