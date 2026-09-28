import React from 'react'
import Card from '../components/Card'
import TrackerForm from '../components/TrackerForm'

export default function Steps() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Steps</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card title="Add Steps">
          <TrackerForm />
        </Card>
        <Card title="History">
          <div className="text-sm text-gray-600">No data yet.</div>
        </Card>
      </div>
    </div>
  )
}
