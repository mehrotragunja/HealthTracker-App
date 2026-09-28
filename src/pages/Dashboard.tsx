import React from 'react'
import SummaryWidget from '../components/SummaryWidget'
import Card from '../components/Card'
import Chart from '../components/Chart'

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <SummaryWidget label="Steps Today" value={3245} />
        <SummaryWidget label="Last Night Sleep" value={'7h 12m'} />
        <SummaryWidget label="Avg Heart Rate" value={'72 bpm'} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card title="Activity">
          <Chart title="Steps (7d)" />
        </Card>
        <Card title="Sleep">
          <Chart title="Sleep (7d)" />
        </Card>
        <Card title="Nutrition">
          <div className="text-sm text-gray-600">Cal: 1,850</div>
        </Card>
      </div>
    </div>
  )
}
