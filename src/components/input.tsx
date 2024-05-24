import React from 'react'
import { cn } from '../lib/utils'

type InputPrefixProps = React.ComponentProps<'div'> & {
  children: React.ReactElement
}

export const Prefix = ({ children, ...rest }: InputPrefixProps) => {
  return (
    <div {...rest}>
      {React.cloneElement(children, {
        className: cn('size-5 text-zinc-500', children.props.className),
      })}
    </div>
  )
}

type InputControlProps = React.ComponentProps<'input'>

export const Control = (props: InputControlProps) => {
  return (
    <input
      className="flex-1 text-zinc-900 outline-none placeholder:text-zinc-500"
      {...props}
    />
  )
}

type InputRootProps = React.ComponentProps<'div'>

export const Root = (props: InputRootProps) => {
  return (
    <div
      className="mx-1 flex min-h-11 w-full items-center gap-2 overflow-hidden rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"
      {...props}
    />
  )
}
