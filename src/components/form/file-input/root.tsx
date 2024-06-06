import { createContext, useContext, useId, useState } from 'react'

type RootProps = React.ComponentProps<'div'>

type FileInputContextProps = {
  id: string
  files: File[]
  onFilesSelected: (files: File[], multiple?: boolean) => void
}

const FileInputContext = createContext<FileInputContextProps>(
  {} as FileInputContextProps,
)

export const Root = (props: RootProps) => {
  const id = useId()
  const [files, setFiles] = useState<File[]>([])

  function handleSelectedFiles(files: File[], multiple?: boolean) {
    setFiles((prevFiles) => (multiple ? [...prevFiles, ...files] : files))
  }

  return (
    <FileInputContext.Provider
      value={{ id, files, onFilesSelected: handleSelectedFiles }}
    >
      <div {...props} />
    </FileInputContext.Provider>
  )
}

export const useFileInput = () => useContext(FileInputContext)
