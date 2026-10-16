'use client';
import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import {X} from 'lucide-react';
import {cn} from '@/lib/utils';
export const Dialog=DialogPrimitive.Root;
export const DialogTrigger=DialogPrimitive.Trigger;
export const DialogTitle=DialogPrimitive.Title;
export const DialogDescription=DialogPrimitive.Description;
export function DialogContent({className,children,closeLabel='Close',...props}:React.ComponentProps<typeof DialogPrimitive.Content>&{closeLabel?:string}){return <DialogPrimitive.Portal><DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-navy/75 backdrop-blur-sm dialog-overlay"/><DialogPrimitive.Content className={cn('fixed start-1/2 top-1/2 z-50 max-h-[90dvh] w-[calc(100%-2rem)] max-w-2xl overflow-y-auto rounded-xl bg-white p-6 shadow-2xl dialog-content',className)} {...props}>{children}<DialogPrimitive.Close className="absolute end-4 top-4 rounded-full bg-white/90 p-2 text-navy hover:bg-muted focus-visible:ring-2 focus-visible:ring-gold"><X className="size-5"/><span className="sr-only">{closeLabel}</span></DialogPrimitive.Close></DialogPrimitive.Content></DialogPrimitive.Portal>;}
