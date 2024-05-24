import React from 'react'
import { cn } from '../../lib/utils'

type NavItemPrefixProps = React.ComponentProps<'div'> & {
  children: React.ReactElement
}

export const Prefix = ({ children, ...rest }: NavItemPrefixProps) => {
  return (
    <div {...rest}>
      {React.cloneElement(children, {
        className: cn('size-5 text-zinc-500', children.props.className),
      })}
    </div>
  )
}

type NavItemContentProps = React.ComponentProps<'span'>

export const Content = (props: NavItemContentProps) => {
  return (
    <span
      {...props}
      className={cn(
        'font-medium text-zinc-700 group-hover:text-violet-500',
        props.className,
      )}
    />
  )
}

type NavItemSuffixProps = React.ComponentProps<'div'> & {
  children: React.ReactElement
}

export const Suffix = ({ children, ...rest }: NavItemSuffixProps) => {
  return (
    <div className="ml-auto" {...rest}>
      {React.cloneElement(children, {
        className: cn(
          'group-hover:text-violet-300 size-5 text-zinc-400',
          children.props.className,
        ),
      })}
    </div>
  )
}

export type NavItemRootProps = React.ComponentProps<'a'>

export const Root = (props: NavItemRootProps) => {
  return (
    <a
      href=""
      className="group flex items-center gap-3 rounded px-3 py-2 transition-colors hover:bg-violet-50"
      {...props}
    />
  )
}
