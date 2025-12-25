'use client';

import { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Bot, Loader2, FileText } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export function SmartAudit() {
  const [challenge, setChallenge] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [recommendation, setRecommendation] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!challenge.trim()) {
      setError('Please describe your facility challenge before submitting.');
      return;
    }
    setError('');
    setIsLoading(true);
    setRecommendation('');

    setTimeout(() => {
      setIsLoading(false);
      setRecommendation(
        'Based on your challenge, we recommend a phased upgrade strategy. Phase 1 would involve installing our "Reality Strategy" sensors to gather baseline data on your existing pneumatic and electrical systems. This allows us to verify the physics of your building before any hardware is purchased. Phase 2 would focus on integrating a WebCTRL front-end to bring all disparate systems under a single interface, immediately improving operational visibility. Phase 3 involves a targeted replacement of critical pneumatic components with open-protocol DDC controllers to improve tenant comfort and energy efficiency. This approach minimizes upfront capital expenditure while delivering immediate ROI through energy savings and operational improvements.'
      );
    }, 2500);
  };

  return (
    <section id="smart-audit" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary-foreground">
            Get a Smart Audit
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Describe your biggest facility challenge, and our AI will provide a
            high-level strategic recommendation.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="bg-background/50">
            <CardHeader className="flex flex-row items-center gap-4">
              <Bot className="h-8 w-8 text-accent" />
              <div>
                <CardTitle>AI Facility Strategist</CardTitle>
                <CardDescription>
                  This is a simulation. For a real audit, contact us.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <Textarea
                  placeholder="e.g., 'Our building has uneven temperatures across floors, and our energy bills are skyrocketing...'"
                  value={challenge}
                  onChange={(e) => setChallenge(e.target.value)}
                  className="min-h-[120px] text-base"
                  disabled={isLoading}
                />
                {error && (
                  <p className="text-sm font-medium text-destructive">
                    {error}
                  </p>
                )}
                <div className="text-center">
                  <Button
                    type="submit"
                    size="lg"
                    variant="accent"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Analyzing...
                      </>
                    ) : (
                      'Generate Recommendation'
                    )}
                  </Button>
                </div>
              </form>

              {recommendation && !isLoading && (
                <div className="mt-8">
                  <Alert>
                    <FileText className="h-4 w-4" />
                    <AlertTitle className="font-bold">
                      Strategic Recommendation
                    </AlertTitle>
                    <AlertDescription className="leading-relaxed">
                      {recommendation}
                    </AlertDescription>
                  </Alert>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
