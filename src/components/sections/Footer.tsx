import { Separator } from '@/components/ui/separator';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-4 py-8 text-center text-muted-foreground">
        <div className="flex justify-center items-center gap-4 mb-4 text-sm">
          <span>NEBB Certified Agency</span>
          <Separator orientation="vertical" className="h-4 bg-muted-foreground/50" />
          <span>Carrier ALC Partner</span>
        </div>
        <p className="text-sm">
          &copy; {currentYear} MAConcepts. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
