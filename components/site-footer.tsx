export function SiteFooter() {
  return (
    <footer className="border-t mt-16">
      <div className="container py-10 text-sm text-foreground/70 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Clements United. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="/privacy" className="hover:text-foreground">Privacy</a>
          <a href="mailto:hello@clementsunited.com" className="hover:text-foreground">hello@clementsunited.com</a>
        </div>
      </div>
    </footer>
  );
}


