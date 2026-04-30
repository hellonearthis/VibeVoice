import { Timer } from 'lucide-react';

export default function ActivityCard() {
  return (
    <div className="lg:col-span-2 rounded-2xl border border-on-surface/10 bg-white p-8 shadow-sm">
      <div className="mb-8 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
        <h3 className="font-display text-xl font-semibold text-on-surface">Transcription Activity</h3>
        <select className="rounded-lg border-outline/20 px-3 py-1.5 text-sm outline-none focus:ring-1 focus:ring-primary-orange">
          <option>Last 30 days</option>
          <option>Last 7 days</option>
        </select>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-secondary-container/20 p-3 text-secondary-green">
              <Timer size={24} />
            </div>
            <div>
              <p className="text-xs font-medium text-on-surface-variant">Total Minutes Processed</p>
              <p className="font-display text-2xl font-bold">12,482</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm font-bold text-secondary-green">+5.2%</p>
            <p className="text-xs text-on-surface-variant">vs last month</p>
          </div>
        </div>

        <div className="h-3 w-full overflow-hidden rounded-full bg-surface-container">
          <div className="h-full w-[78%] bg-primary-orange" />
        </div>

        <div className="mt-4 grid grid-cols-3 gap-4">
          <div className="text-center">
            <p className="font-display text-3xl font-bold text-on-surface">98%</p>
            <p className="text-xs font-medium text-on-surface-variant uppercase tracking-wider">Avg. Accuracy</p>
          </div>
          <div className="text-center">
            <p className="font-display text-3xl font-bold text-on-surface">4.2s</p>
            <p className="text-xs font-medium text-on-surface-variant uppercase tracking-wider">Latency</p>
          </div>
          <div className="text-center">
            <p className="font-display text-3xl font-bold text-on-surface">12</p>
            <p className="text-xs font-medium text-on-surface-variant uppercase tracking-wider">Languages</p>
          </div>
        </div>
      </div>
    </div>
  );
}
