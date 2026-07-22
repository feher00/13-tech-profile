export default function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-border" data-testid="footer">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 bg-white text-black flex items-center justify-center font-display font-bold text-sm">
            13
          </div>
          <span className="text-muted-foreground font-mono text-xs uppercase tracking-widest">
            © {new Date().getFullYear()} 13 Tech LLC. All systems nominal.
          </span>
        </div>

        <div className="flex items-center gap-6 text-xs font-mono text-muted-foreground uppercase tracking-widest">
          <a href="#" className="hover:text-primary transition-colors">Privacy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms</a>
          <a href="#" className="hover:text-primary transition-colors">Security Specs</a>
        </div>


      </div>
    </footer>
  );
}