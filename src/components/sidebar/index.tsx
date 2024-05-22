import { Logo } from './logo'
import {
  BarChart,
  CheckSquare,
  ChevronDown,
  Cog,
  Flag,
  Home,
  LifeBuoy,
  Search,
  SquareStack,
  Users,
} from 'lucide-react'

import { UsedSpaceWidget } from './used-space-widget'
import { Profile } from './profile'
import * as NavItem from './nav-item'
import * as Input from '../input'

export const Sidebar = () => {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <Logo />

      <Input.Root>
        <Input.Prefix>
          <Search className="size-5 text-zinc-500" />
        </Input.Prefix>

        <Input.Control placeholder="Search..." />
      </Input.Root>

      <nav className="space-y-0.5">
        <NavItem.Root>
          <NavItem.Prefix>
            <Home />
          </NavItem.Prefix>

          <NavItem.Content>Home</NavItem.Content>

          <NavItem.Suffix>
            <ChevronDown />
          </NavItem.Suffix>
        </NavItem.Root>
        <NavItem.Root>
          <NavItem.Prefix>
            <BarChart />
          </NavItem.Prefix>

          <NavItem.Content>Dashboard</NavItem.Content>

          <NavItem.Suffix>
            <ChevronDown />
          </NavItem.Suffix>
        </NavItem.Root>
        <NavItem.Root>
          <NavItem.Prefix>
            <SquareStack />
          </NavItem.Prefix>

          <NavItem.Content>Projects</NavItem.Content>

          <NavItem.Suffix>
            <ChevronDown />
          </NavItem.Suffix>
        </NavItem.Root>
        <NavItem.Root>
          <NavItem.Prefix>
            <CheckSquare />
          </NavItem.Prefix>

          <NavItem.Content>Tasks</NavItem.Content>

          <NavItem.Suffix>
            <ChevronDown />
          </NavItem.Suffix>
        </NavItem.Root>
        <NavItem.Root>
          <NavItem.Prefix>
            <Flag />
          </NavItem.Prefix>

          <NavItem.Content>Reporting</NavItem.Content>

          <NavItem.Suffix>
            <ChevronDown />
          </NavItem.Suffix>
        </NavItem.Root>
        <NavItem.Root>
          <NavItem.Prefix>
            <Users />
          </NavItem.Prefix>

          <NavItem.Content>Users</NavItem.Content>

          <NavItem.Suffix>
            <ChevronDown />
          </NavItem.Suffix>
        </NavItem.Root>
      </nav>

      <div className="mt-auto flex flex-col gap-6">
        <nav className="space-y-0.5">
          <NavItem.Root>
            <NavItem.Prefix>
              <LifeBuoy className="group-hover:text-violet-500" />
            </NavItem.Prefix>

            <NavItem.Content className="group-hover:text-violet-700">
              Support
            </NavItem.Content>
          </NavItem.Root>
          <NavItem.Root>
            <NavItem.Prefix>
              <Cog className="group-hover:text-violet-500" />
            </NavItem.Prefix>

            <NavItem.Content className="group-hover:text-violet-700">
              Settings
            </NavItem.Content>
          </NavItem.Root>
        </nav>

        <UsedSpaceWidget />

        <div className="h-px bg-zinc-200" />

        <Profile />
      </div>
    </aside>
  )
}
