/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Music, Radio, Headphones, CloudUpload, Users } from 'lucide-react';
import Sidebar from './components/Sidebar';
import TopNav from './components/TopNav';
import PerformanceCard from './components/PerformanceCard';
import UploadCard from './components/UploadCard';
import { ProjectCard, AddProjectCard } from './components/ProjectCards';
import InsightsList from './components/InsightsList';
import ActivityCard from './components/ActivityCard';

const projects = [
  {
    title: "CEO Interview...",
    meta: "42 mins • English",
    icon: Music,
    status: "Completed" as const,
  },
  {
    title: "Ep. 42 Mixdown",
    meta: "1 hr 12 mins • Multi",
    icon: Radio,
    status: "Analyzing" as const,
    progress: 65,
  },
  {
    title: "Legal Deposition...",
    meta: "18 mins • Spanish",
    icon: Headphones,
    status: "Ready" as const,
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-surface">
      <Sidebar />
      <TopNav />
      
      <main className="lg:pl-64 pt-16 pb-24 lg:pb-8">
        <div className="mx-auto max-w-7xl px-6 md:px-12 py-8">
          
          {/* Header Section */}
          <div className="relative mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-1">
              <span className="font-handwritten text-xl text-primary-orange/80">Welcome back, Alex</span>
              <h2 className="font-display text-5xl font-bold tracking-tight text-on-surface">Your Projects</h2>
            </div>
            
            {/* Sticky Note Annotation */}
            <motion.div
              initial={{ rotate: 10, opacity: 0 }}
              animate={{ rotate: 6, opacity: 1 }}
              transition={{ delay: 1, type: "spring" }}
              className="relative rounded-sm border border-outline/5 bg-tertiary-yellow p-4 shadow-xl md:w-48 sm:block"
            >
              <div className="absolute top-1 left-1 opacity-10">
                <Music size={40} />
              </div>
              <p className="font-handwritten text-lg leading-tight text-on-surface select-none">
                Transcription processing 22% faster today!
              </p>
              <div className="absolute -top-2 -left-2 h-4 w-4 rounded-full bg-white/20 blur-sm" />
            </motion.div>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PerformanceCard />
            <UploadCard />

            <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {projects.map((project, i) => (
                <ProjectCard key={i} {...project} />
              ))}
              <AddProjectCard />
            </div>

            <InsightsList />
            <ActivityCard />
          </div>
        </div>
      </main>

      {/* Mobile Bottom Nav */}
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-6 h-20 bg-white/90 backdrop-blur-xl border-t border-primary-orange/10 shadow-[0_-10px_40px_rgba(167,58,0,0.08)] z-50 md:hidden">
        <a href="#" className="flex flex-col items-center justify-center bg-primary-orange text-white rounded-2xl p-3 -translate-y-4 shadow-lg shadow-primary-orange/40">
          <Music size={20} />
          <span className="text-[10px] uppercase font-bold tracking-widest mt-1">Home</span>
        </a>
        <a href="#" className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:text-primary-orange transition-smooth">
          <CloudUpload size={20} />
          <span className="text-[10px] uppercase font-bold tracking-widest mt-1">Upload</span>
        </a>
        <a href="#" className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:text-primary-orange transition-smooth">
          <Headphones size={20} />
          <span className="text-[10px] uppercase font-bold tracking-widest mt-1">Studio</span>
        </a>
        <a href="#" className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:text-primary-orange transition-smooth">
          <Users size={20} />
          <span className="text-[10px] uppercase font-bold tracking-widest mt-1">Profile</span>
        </a>
      </nav>
    </div>
  );
}
