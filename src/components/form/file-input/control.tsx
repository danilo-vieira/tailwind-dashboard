import { useFileInput } from './root'

type ControlProps = React.ComponentProps<'input'>

export const Control = ({ multiple, ...props }: ControlProps) => {
  const { id, onFilesSelected } = useFileInput()

  const handleFilesSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) return

    const files = Array.from(e.target.files)
    onFilesSelected(files, multiple)
  }

  return (
    <input
      type="file"
      className="sr-only"
      id={id}
      onChange={handleFilesSelected}
      multiple={multiple}
      {...props}
    />
  )
}
