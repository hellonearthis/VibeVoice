import { motion } from 'motion/react';
import { CloudUpload, ArrowRight } from 'lucide-react';

export default function UploadCard() {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="group cursor-pointer flex flex-col justify-between rounded-2xl bg-primary-container p-8 text-on-primary shadow-lg shadow-primary-orange/20 transition-smooth"
    >
      <div>
        <CloudUpload size={40} className="mb-4 transition-smooth group-hover:scale-110" />
        <h3 className="font-display text-2xl font-semibold mb-2">Drop & Vibe</h3>
        <p className="opacity-90">Upload any MP3 or WAV file to start the magic instantly.</p>
      </div>
      <div className="mt-6 flex items-center gap-2 text-sm font-bold tracking-wider">
        <span>START UPLOAD</span>
        <ArrowRight size={18} className="transition-smooth group-hover:translate-x-1" />
      </div>
    </motion.div>
  );
}
