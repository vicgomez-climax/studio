import { Separator } from '@/components/ui/separator';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <Separator className="my-8 bg-border/50" />
        <p className="text-center text-sm text-muted-foreground">
          &copy; {currentYear} MAConcepts. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
