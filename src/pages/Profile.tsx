import React from 'react'
import Card from '../components/Card'

export default function Profile() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Profile</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card title="User Info">
          <div className="text-sm text-gray-600">Name: Jane Doe</div>
        </Card>
        <Card title="Settings">
          <div className="text-sm text-gray-600">Preferences and units.</div>
        </Card>
      </div>
    </div>
  )
}
