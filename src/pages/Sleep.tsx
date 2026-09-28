import React from 'react'
import Card from '../components/Card'
import TrackerForm from '../components/TrackerForm'

export default function Sleep() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Sleep</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card title="Add Sleep">
          <TrackerForm />
        </Card>
        <Card title="Sleep Insights">
          <div className="text-sm text-gray-600">Summary and trends go here.</div>
        </Card>
      </div>
    </div>
  )
}
