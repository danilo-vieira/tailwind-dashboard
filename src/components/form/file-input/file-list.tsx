import { Trash2, UploadCloud } from 'lucide-react'
import { useFileInput } from './root'
import { formatBytes } from '../../../lib/format-bytes'

export const FileList = () => {
  const { files } = useFileInput()

  if (!files.length) return null

  return (
    <ul className="mt-4 space-y-3">
      {files.map((file) => (
        <li
          key={file.name}
          className="group flex items-start gap-4 rounded-lg border border-zinc-200 p-4"
        >
          <div className="rounded-full border-4 border-violet-100 bg-violet-200 p-2 text-violet-600">
            <UploadCloud className="size-4 " />
          </div>

          <div className="flex flex-1 flex-col items-start gap-1">
            <div className="flex flex-col">
              <span className="text-sm font-medium text-zinc-700">
                {file.name}
              </span>
              <span className="text-sm text-zinc-500">
                {formatBytes(file.size)}
              </span>
            </div>

            <div className="flex w-full items-center gap-3">
              <progress
                className="h-2 w-full rounded-full [&::-moz-progress-bar]:bg-violet-100 [&::-webkit-progress-bar]:rounded-full [&::-webkit-progress-bar]:bg-violet-100 [&::-webkit-progress-value]:rounded-full [&::-webkit-progress-value]:bg-violet-600"
                max={100}
                value={80}
              />

              <span className="text-sm font-medium text-zinc-700">80%</span>
            </div>
          </div>

          <div className="flex items-center self-stretch">
            <button
              type="button"
              className="ml-auto rounded-md p-2 transition-colors hover:bg-zinc-50"
            >
              <Trash2 className="size-5 text-zinc-500" />
            </button>
          </div>
        </li>
      ))}
    </ul>
  )
}
