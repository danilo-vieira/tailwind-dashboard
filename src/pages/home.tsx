import { SettingsTabs } from '../components/settings-tabs'
import * as Input from '../components/input'
import { Mail, UploadCloud, User } from 'lucide-react'

export const Home = () => {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>

      <SettingsTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-5">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
            <span className="text-sm text-zinc-500">
              Update your photo and personal details here.
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm transition-colors hover:bg-zinc-50"
            >
              Cancel
            </button>
            <button
              form="settings"
              type="submit"
              className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-violet-700"
            >
              Save
            </button>
          </div>
        </div>

        <form
          id="settings"
          className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200"
        >
          <div className="grid grid-cols-form gap-3">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-zinc-700"
            >
              Name
            </label>
            <div className="grid grid-cols-2 gap-6">
              <Input.Root>
                <Input.Control
                  id="firstName"
                  defaultValue="Danilo"
                  placeholder="Name"
                />
              </Input.Root>

              <Input.Root>
                <Input.Control defaultValue="Vieira" placeholder="Last name" />
              </Input.Root>
            </div>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700"
            >
              Email address
            </label>
            <Input.Root>
              <Input.Prefix>
                <Mail />
              </Input.Prefix>
              <Input.Control
                id="email"
                type="email"
                placeholder="Email address"
                defaultValue="danilo_strvieira@hotmail.com"
              />
            </Input.Root>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="photo"
              className="text-sm font-medium text-zinc-700"
            >
              Your photo
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                This will be displayed on your profile.
              </span>
            </label>
            <div className="flex items-start gap-5">
              <div className="flex size-16 items-center justify-center rounded-full bg-violet-50">
                <User className="size-8 text-violet-500" />
              </div>

              <label
                htmlFor="photo"
                className="group flex flex-1 cursor-pointer flex-col items-center gap-3 rounded-lg border border-zinc-300 px-6 py-4 text-center text-zinc-500 shadow-sm hover:border-violet-200 hover:bg-violet-25 hover:text-violet-500"
              >
                <div className="rounded-full border-6 border-zinc-50 bg-zinc-100 group-hover:border-violet-50 group-hover:bg-violet-100">
                  <UploadCloud className="size-5 text-zinc-600" />
                </div>

                <div className="flex flex-col items-center gap-1">
                  <span className="text-sm">
                    <span className="font-semibold text-violet-700">
                      Click to upload
                    </span>{' '}
                    or drag and drop
                  </span>
                  <span className="text-xs">
                    SVG, PNG, JPG or GIF (max. 800x400px)
                  </span>
                </div>
              </label>

              <input type="file" className="sr-only" id="photo" />
            </div>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="role" className="text-sm font-medium text-zinc-700">
              Role
            </label>
            <Input.Root>
              <Input.Control
                id="role"
                placeholder="Role"
                defaultValue="FE Engineer"
              />
            </Input.Root>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="country"
              className="text-sm font-medium text-zinc-700"
            >
              Country
            </label>
            <Input.Root>
              <Input.Control
                id="country"
                placeholder="Country"
                defaultValue="Brazil"
              />
            </Input.Root>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="timezone"
              className="text-sm font-medium text-zinc-700"
            >
              Timezone
            </label>
            <Input.Root>
              <Input.Control
                id="timezone"
                placeholder="Timezone"
                defaultValue="Pacific Standard Time"
              />
            </Input.Root>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
              Bio
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Write a short introduction.
              </span>
            </label>
            <div></div>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="portfolio"
              className="text-sm font-medium text-zinc-700"
            >
              Portfolio projects
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Share a few snippets of your work.
              </span>
            </label>
            <div></div>
          </div>

          <div className="flex items-center justify-end gap-2 pt-5">
            <button
              type="button"
              className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm transition-colors hover:bg-zinc-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-violet-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
