import React from 'react'
import Card from '../components/Card'
import TrackerForm from '../components/TrackerForm'

export default function Vitals() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Vitals</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card title="Add Vitals">
          <TrackerForm />
        </Card>
        <Card title="Recent Vitals">
          <div className="text-sm text-gray-600">No recent entries.</div>
        </Card>
      </div>
    </div>
  )
}
