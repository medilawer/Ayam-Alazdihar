import * as React from 'react';
import {Slot} from '@radix-ui/react-slot';
import {cva,type VariantProps} from 'class-variance-authority';
import {cn} from '@/lib/utils';
const buttonVariants=cva('inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4',{variants:{variant:{default:'bg-gold text-navy hover:bg-gold-light',outline:'border border-border bg-transparent hover:bg-muted',secondary:'bg-navy text-white hover:bg-charcoal',ghost:'hover:bg-muted'},size:{default:'h-12 px-5',sm:'h-9 px-3',lg:'h-14 px-7',icon:'size-10'}},defaultVariants:{variant:'default',size:'default'}});
export function Button({className,variant,size,asChild=false,...props}:React.ComponentProps<'button'> & VariantProps<typeof buttonVariants> & {asChild?:boolean}){const Comp=asChild?Slot:'button';return <Comp className={cn(buttonVariants({variant,size,className}))} {...props}/>;}
