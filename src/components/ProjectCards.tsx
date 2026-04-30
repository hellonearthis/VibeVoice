import { Music, Radio, Users, MoreVertical, Edit2, Download, PlusCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface ProjectCardProps {
  title: string;
  meta: string;
  icon: typeof Music;
  status: 'Completed' | 'Analyzing' | 'Ready';
  progress?: number;
}

export function ProjectCard({ title, meta, icon: Icon, status, progress }: ProjectCardProps) {
  const statusColors = {
    Completed: 'bg-secondary-green',
    Analyzing: 'bg-tertiary-yellow',
    Ready: 'bg-secondary-green',
  };

  const textColors = {
    Completed: 'text-secondary-green',
    Analyzing: 'text-on-surface-variant',
    Ready: 'text-secondary-green',
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group relative rounded-2xl border border-on-surface/5 bg-white p-6 shadow-sm transition-smooth hover:shadow-md"
    >
      <div className="mb-6 flex justify-between items-start">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface-container">
          <Icon className="text-primary-orange" size={24} />
        </div>
        <button className="text-outline/40 hover:text-on-surface transition-smooth">
          <MoreVertical size={20} />
        </button>
      </div>

      <h4 className="font-display text-lg font-semibold text-on-surface mb-1 truncate" title={title}>
        {title}
      </h4>
      <p className="text-sm text-on-surface-variant mb-4">{meta}</p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className={`h-2 w-2 rounded-full ${statusColors[status]}`} />
          <span className={`text-sm font-bold ${textColors[status]}`}>{status}</span>
        </div>
        
        {status === 'Analyzing' && progress !== undefined ? (
          <div className="w-12 h-1 bg-surface-container rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="h-full bg-tertiary-yellow"
            />
          </div>
        ) : (
          <button className="opacity-0 group-hover:opacity-100 transition-smooth p-2 rounded-lg bg-surface-container-high">
            {status === 'Completed' ? <Edit2 size={16} /> : <Download size={16} />}
          </button>
        )}
      </div>
    </motion.div>
  );
}

export function AddProjectCard() {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="flex cursor-pointer flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-outline/20 p-6 text-outline/60 transition-smooth hover:border-primary-orange/40 hover:bg-primary-orange/5 hover:text-primary-orange"
    >
      <PlusCircle size={40} />
      <span className="font-semibold text-sm">New Project</span>
    </motion.div>
  );
}
