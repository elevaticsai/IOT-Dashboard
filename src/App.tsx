import React from 'react';
import { Activity, AlertTriangle, MapPin, Mail, Phone, BarChart3 } from 'lucide-react';
import Sidebar from './components/Sidebar';
import EnergyConsumptionChart from './components/EnergyConsumptionChart';
import PowerChart from './components/PowerChart';
import VoltageFrequencyChart from './components/VoltageFrequencyChart';
import PowerDistributionChart from './components/PowerDistributionChart';
import WeeklyUsageChart from './components/WeeklyUsageChart';
import CostAnalysisChart from './components/CostAnalysisChart';
import GaugeChart from './components/GaugeChart';
import AlarmsTable from './components/AlarmsTable';

function App() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      
      <div className="flex-1">
        {/* Header */}
        <header className="bg-blue-900 text-white p-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <h1 className="text-xl font-semibold">Smart office</h1>
              <span className="text-gray-300">{'>'}</span>
              <span>Energy Meter: Energy meter</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="flex items-center">
                <Activity className="w-4 h-4 mr-2" />
                Realtime - last day
              </span>
              <button className="bg-blue-700 px-4 py-2 rounded">
                Edit mode
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Energy Overview Card */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="relative h-48">
              <img
                src="https://images.unsplash.com/photo-1466611653911-95081537e5b7"
                alt="Wind Turbines"
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg">
                <div className="p-6 text-white">
                  <h2 className="text-2xl font-bold mb-2">Total</h2>
                  <div className="text-4xl font-bold">478.40 kWh</div>
                  <div className="mt-4 flex items-center">
                    <BarChart3 className="w-5 h-5 mr-2" />
                    <span>Energy consumed per minute</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info Card */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Contact Info</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-gray-500 mt-1" />
                <div>
                  <div className="font-medium">Office</div>
                  <div className="text-gray-600">
                    246 Bowery New York NY 10012 United States
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-gray-500" />
                <span>+1112223334</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-gray-500" />
                <span>support@office-center.com</span>
              </div>
            </div>
          </div>

          {/* Power Distribution */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Power Distribution</h2>
            <PowerDistributionChart />
          </div>

          {/* Charts Section */}
          <div className="bg-white rounded-lg shadow-md p-6 col-span-1 md:col-span-2 lg:col-span-3">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Energy consumption</h2>
              <span className="text-sm text-gray-500">Realtime - last day</span>
            </div>
            <EnergyConsumptionChart />
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 col-span-1 md:col-span-2 lg:col-span-2">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Current (Amperage) and Power</h2>
              <div className="flex space-x-4">
                <GaugeChart value={2769} label="POWER" unit="W" color="purple" />
                <GaugeChart value={17.60} label="CURRENT" unit="A" color="red" />
              </div>
            </div>
            <PowerChart />
          </div>

          {/* Weekly Usage */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Weekly Usage Pattern</h2>
            <WeeklyUsageChart />
          </div>

          {/* Cost Analysis */}
          <div className="bg-white rounded-lg shadow-md p-6 col-span-1 md:col-span-2 lg:col-span-3">
            <h2 className="text-xl font-semibold mb-4">Cost & Efficiency Analysis</h2>
            <CostAnalysisChart />
          </div>

          {/* Alarms Section */}
          <div className="bg-white rounded-lg shadow-md p-6 col-span-1 md:col-span-2 lg:col-span-3">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Energy meter: Alarms</h2>
              <div className="flex items-center space-x-2">
                <AlertTriangle className="w-5 h-5 text-yellow-500" />
                <span>Realtime - last 30 days</span>
              </div>
            </div>
            <AlarmsTable />
          </div>

          {/* Voltage and Frequency */}
          <div className="bg-white rounded-lg shadow-md p-6 col-span-1 md:col-span-2 lg:col-span-3">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Voltage and Frequency</h2>
              <div className="flex space-x-4">
                <div className="text-blue-500">
                  <div className="text-sm">VOLTAGE</div>
                  <div className="text-xl font-bold">229.70V</div>
                </div>
                <div className="text-green-500">
                  <div className="text-sm">FREQUENCY</div>
                  <div className="text-xl font-bold">60.90Hz</div>
                </div>
              </div>
            </div>
            <VoltageFrequencyChart />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;