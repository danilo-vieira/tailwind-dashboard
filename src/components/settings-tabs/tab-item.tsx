import * as Tabs from '@radix-ui/react-tabs'
import { motion } from 'framer-motion'

export interface TabItemProps {
  value: string
  title: string
  selectedTab: string
}

export const TabItem = ({ value, title, selectedTab }: TabItemProps) => {
  return (
    <Tabs.Trigger
      className="relative px-1 pb-4 text-sm font-medium text-zinc-500 hover:text-violet-700 data-[state=active]:text-violet-700"
      value={value}
    >
      <span>{title}</span>

      {selectedTab === value && (
        <motion.div
          layoutId="active-tab"
          className="absolute inset-x-0 -bottom-px h-0.5 bg-violet-700"
        />
      )}
    </Tabs.Trigger>
  )
}
