export const UsedSpaceWidget = () => {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-violet-50 px-4 py-5">
      <div className="space-y-1">
        <span className="text-sm/5 font-medium text-violet-700">
          Used space
        </span>
        <p className="block text-sm/5 text-violet-500">
          Your team has used 80% of your available space. Need more?
        </p>
      </div>

      <progress
        className="h-2 w-full rounded-full [&::-moz-progress-bar]:bg-violet-200 [&::-webkit-progress-bar]:rounded-full [&::-webkit-progress-bar]:bg-violet-200 [&::-webkit-progress-value]:rounded-full [&::-webkit-progress-value]:bg-violet-600"
        max={100}
        value={80}
      />

      <div className="space-x-3">
        <button
          type="button"
          className="text-sm font-medium text-violet-500 transition-colors hover:brightness-75"
        >
          Dismiss
        </button>
        <button
          type="button"
          className="text-sm font-medium text-violet-700 transition-colors hover:brightness-75"
        >
          Upgrade plan
        </button>
      </div>
    </div>
  )
}
