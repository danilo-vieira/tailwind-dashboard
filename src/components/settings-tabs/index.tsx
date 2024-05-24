import * as Tabs from '@radix-ui/react-tabs'
import { TabItem } from './tab-item'
import { useState } from 'react'

export const SettingsTabs = () => {
  const [selectedTab, setSelectedTab] = useState('my-details')

  return (
    <Tabs.Root
      defaultValue="my-details"
      value={selectedTab}
      onValueChange={setSelectedTab}
    >
      <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200">
        <TabItem selectedTab={selectedTab} value="profile" title="Profile" />
        <TabItem
          selectedTab={selectedTab}
          value="my-details"
          title="My details"
        />
        <TabItem selectedTab={selectedTab} value="password" title="Password" />
        <TabItem selectedTab={selectedTab} value="team" title="Team" />
        <TabItem selectedTab={selectedTab} value="plan" title="Plan" />
        <TabItem selectedTab={selectedTab} value="billing" title="Billing" />
        <TabItem selectedTab={selectedTab} value="email" title="Email" />
        <TabItem
          selectedTab={selectedTab}
          value="notifications"
          title="Notifications"
        />
        <TabItem
          selectedTab={selectedTab}
          value="integrations"
          title="Integrations"
        />
        <TabItem selectedTab={selectedTab} value="api" title="API" />
      </Tabs.List>

      <Tabs.Content value="password">asdasd</Tabs.Content>
    </Tabs.Root>
  )
}
