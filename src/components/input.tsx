type InputPrefixProps = React.ComponentProps<'div'>

export const Prefix = (props: InputPrefixProps) => {
  return <div {...props} />
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
      className="mx-1 flex min-h-11 w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"
      {...props}
    />
  )
}
