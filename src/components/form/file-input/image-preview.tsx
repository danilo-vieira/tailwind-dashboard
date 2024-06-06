import { User } from 'lucide-react'
import { useFileInput } from './root'
import { useMemo } from 'react'

export const ImagePreview = () => {
  const { files } = useFileInput()

  const previewURL = useMemo(() => {
    if (!files.length) return

    return URL.createObjectURL(files[0])
  }, [files])

  if (!previewURL) {
    return (
      <div className="flex size-16 items-center justify-center rounded-full bg-violet-50">
        <User className="size-8 text-violet-500" />
      </div>
    )
  }

  return (
    <img
      src={previewURL}
      alt="Preview"
      className="size-16 rounded-full object-cover"
    />
  )
}
