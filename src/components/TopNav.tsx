import { Search, Bell, Settings } from 'lucide-react';

export default function TopNav() {
  return (
    <header className="fixed top-0 z-40 w-full border-b border-surface-container bg-white/80 backdrop-blur-md lg:pl-64">
      <div className="flex h-16 items-center justify-between px-6 md:px-12">
        <div className="flex items-center gap-8">
          <span className="font-display text-2xl font-bold text-primary-orange lg:hidden">VibeVoice</span>
          <nav className="hidden items-center gap-6 md:flex">
            <a href="#" className="border-b-2 border-primary-orange pb-1 font-display font-bold text-primary-orange">Dashboard</a>
            <a href="#" className="font-display text-on-surface-variant transition-smooth hover:text-primary-orange">Uploads</a>
            <a href="#" className="font-display text-on-surface-variant transition-smooth hover:text-primary-orange">Editor</a>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 rounded-full border border-outline/10 bg-surface-container px-4 py-1.5 focus-within:border-primary-orange focus-within:ring-1 focus-within:ring-primary-orange/20 transition-smooth">
            <Search size={16} className="text-on-surface-variant" />
            <input
              type="text"
              placeholder="Search projects..."
              className="w-48 bg-transparent text-sm outline-none placeholder:text-on-surface-variant"
            />
          </div>
          
          <button className="rounded-lg p-2 text-on-surface-variant transition-smooth hover:bg-primary-orange/5 hover:text-primary-orange">
            <Bell size={20} />
          </button>
          
          <button className="rounded-lg p-2 text-on-surface-variant transition-smooth hover:bg-primary-orange/5 hover:text-primary-orange">
            <Settings size={20} />
          </button>
          
          <div className="h-8 w-8 overflow-hidden rounded-full border-2 border-primary-container shadow-sm">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUPI-ppywzy1MnTuZXXSZoJzTLT_-kV2du9gbWTpakUvT4ND1EfImsMXQmLqh9oGjk0-60X9Y9niqlzrrycHgiqpqmqByF3-TSaNEdznJtWXEW2aHIYYyE0Pus1XWRK6vnbTPM8MXCREXKhXYlHkvnOH8B1yA2VwXwss44iFNzju1Ubj62IrILPNaO2KUjQPu2pvwAAU9yUDq6AX3GT8I90NmEBJtZsSykAv36o7V1B699BgWld7BFKNWaLj3lp7gkuHzbkM58"
              alt="User"
              className="h-full w-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
