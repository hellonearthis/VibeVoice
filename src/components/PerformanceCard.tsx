import { motion } from 'motion/react';
import { Mic } from 'lucide-react';

const stats = [40, 65, 50, 85, 60, 75, 45];

export default function PerformanceCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-on-surface/5 bg-white p-8 md:col-span-2 shadow-sm"
    >
      <div className="relative z-10">
        <div className="mb-6 flex justify-between items-start">
          <div>
            <h3 className="font-display text-2xl font-semibold text-on-surface mb-2">Weekly Performance</h3>
            <p className="text-on-surface-variant">Your audio processing volume is up 12% this week.</p>
          </div>
          <span className="rounded-full bg-secondary-container px-3 py-1 text-xs font-bold text-secondary-green shadow-sm">
            High Accuracy
          </span>
        </div>

        <div className="flex h-48 w-full items-end gap-2 pt-4">
          {stats.map((height, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${height}%` }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: "easeOut" }}
              className={`flex-1 rounded-t-lg transition-smooth ${
                height === Math.max(...stats) ? 'bg-primary-container' : 'bg-surface-container hover:bg-primary-orange/20'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="absolute -bottom-16 -right-16 opacity-[0.03] pointer-events-none">
        <Mic size={300} strokeWidth={1.5} />
      </div>
    </motion.div>
  );
}
