'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { ClimateAction } from '@/lib/climate-data'

interface ClimateChartProps {
  data: ClimateAction[]
  title: string
  color: string
}

export function ClimateChart({ data, title, color }: ClimateChartProps) {
  // Trier les données par impact décroissant
  const sortedData = [...data].sort((a, b) => b.impact - a.impact)

  return (
    <div className="w-full h-[600px]">
      <h3 className="text-xl font-semibold mb-4 text-center">{title}</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={sortedData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 100,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="name" 
            angle={-45}
            textAnchor="end"
            height={120}
            fontSize={12}
            interval={0}
          />
          <YAxis 
            label={{ value: 'Tonnes CO₂ eq./an', angle: -90, position: 'insideLeft' }}
          />
          <Tooltip 
            content={({ active, payload, label }) => {
              if (active && payload && payload.length) {
                const data = payload[0].payload as ClimateAction
                return (
                  <div className="bg-white p-3 border rounded-lg shadow-lg max-w-xs">
                    <p className="font-semibold">{label}</p>
                    <p className="text-sm text-gray-600 mt-1">{data.description}</p>
                    <p className="font-medium mt-2">
                      Impact: {data.impact} tonnes CO₂ eq./an
                    </p>
                  </div>
                )
              }
              return null
            }}
          />
          <Bar dataKey="impact" fill={color} radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
} 