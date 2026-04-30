import { LayoutDashboard, FolderOpen, BarChart3, Settings2, Plus, HelpCircle, LogOut } from 'lucide-react';
import { motion } from 'motion/react';

const navItems = [
  { icon: LayoutDashboard, label: 'Home', active: true },
  { icon: FolderOpen, label: 'Library' },
  { icon: BarChart3, label: 'Analytics' },
  { icon: Settings2, label: 'Process' },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 hidden h-screen w-64 flex-col border-r border-primary-orange/5 bg-white shadow-xl shadow-primary-orange/5 lg:flex z-50">
      <div className="flex flex-col gap-4 py-8 h-full">
        <div className="px-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-container text-white">
              <span className="text-xl">🎙️</span>
            </div>
            <div>
              <h1 className="font-display text-xl font-bold text-on-surface">VibeVoice</h1>
              <p className="text-[10px] uppercase tracking-widest text-on-surface-variant">Audio Intelligence</p>
            </div>
          </div>
        </div>

        <nav className="flex flex-col gap-1 px-2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href="#"
              className={`flex items-center gap-3 rounded-xl px-4 py-3 font-medium transition-smooth ${
                item.active
                  ? 'bg-primary-orange/5 text-primary-orange shadow-sm'
                  : 'text-on-surface-variant hover:translate-x-1 hover:bg-surface-container'
              }`}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        <div className="mt-auto px-4 pb-8 flex flex-col gap-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-2 rounded-xl bg-primary-orange px-4 py-3 font-bold text-on-primary shadow-lg shadow-primary-orange/20 transition-smooth"
          >
            <Plus size={20} />
            <span>New Project</span>
          </motion.button>
          
          <div className="pt-4 border-t border-primary-orange/10">
            <a href="#" className="flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:text-primary-orange transition-smooth">
              <HelpCircle size={18} />
              <span className="text-sm">Help</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:text-red-600 transition-smooth">
              <LogOut size={18} />
              <span className="text-sm">Logout</span>
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}
