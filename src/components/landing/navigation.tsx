const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-gray-800/50 bg-gray-950/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo/Brand */}
        <div className="flex items-center">
          <a href="/" className="text-xl font-bold bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent">
            AI Lab
          </a>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#projects" className="text-sm text-gray-400 hover:text-white transition-colors">
            Projects
          </a>
          <a href="#about" className="text-sm text-gray-400 hover:text-white transition-colors">
            About
          </a>
          <a href="#contact" className="text-sm text-gray-400 hover:text-white transition-colors">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
