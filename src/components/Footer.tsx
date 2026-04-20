export function Footer() {
  return (
    <footer className="w-full px-6 md:px-12 lg:px-20 py-10 border-t border-border text-sm text-muted flex items-center justify-between">
      <span>© {new Date().getFullYear()} baesisi</span>
      <div className="flex items-center gap-5">
        <a
          href="https://github.com/baesisi3648"
          target="_blank"
          rel="noreferrer"
          className="hover:text-foreground transition-colors"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}
