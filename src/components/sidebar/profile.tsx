import { LogOut } from 'lucide-react'

export const Profile = () => {
  return (
    <div className="flex items-center gap-3">
      <img
        src="https://github.com/danilo-vieira.png"
        alt="Danilo Vieira"
        className="size-10 rounded-full"
      />

      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Danilo Vieira
        </span>
        <span className="truncate text-sm text-zinc-500">
          danilo_strvieira@hotmail.com
        </span>
      </div>

      <button type="button" className="ml-auto rounded-md p-2 hover:bg-zinc-50">
        <LogOut className="size-5 text-zinc-500" />
      </button>
    </div>
  )
}
