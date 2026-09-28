import React from 'react'
import Card from '../components/Card'

export default function Nutrition() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Nutrition</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card title="Log Meal">
          <div className="text-sm text-gray-600">Meal form placeholder.</div>
        </Card>
        <Card title="Calories Today">
          <div className="text-sm text-gray-600">1,850 kcal</div>
        </Card>
      </div>
    </div>
  )
}
