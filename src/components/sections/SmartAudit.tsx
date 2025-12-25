'use client';

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { getSmartAuditAnalysis } from '@/app/actions';
import { Loader2, Wand2, Sparkles } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const formSchema = z.object({
  facilityChallenge: z.string().min(20, {
    message: 'Please describe your facility challenge in at least 20 characters.',
  }),
});

type FormValues = z.infer<typeof formSchema>;

export function SmartAudit() {
  const [isLoading, setIsLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      facilityChallenge: '',
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    setRecommendation(null);
    setError(null);

    const result = await getSmartAuditAnalysis({
      facilityChallenge: data.facilityChallenge,
    });

    setIsLoading(false);
    if (result.recommendation) {
      setRecommendation(result.recommendation);
    } else {
      setError(result.error || 'An unexpected error occurred.');
    }
  };

  return (
    <section id="audit" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <Card className="bg-card border-accent/30 shadow-2xl shadow-accent/10">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <Wand2 className="h-10 w-10 text-accent" />
            </div>
            <CardTitle className="text-3xl md:text-4xl font-bold tracking-tight">
              Smart Audit
            </CardTitle>
            <CardDescription className="mt-2 text-muted-foreground">
              Leverage our expertise. Instantly.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="facilityChallenge"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          placeholder="Describe your facility challenge... e.g., 'Our building has inconsistent temperatures and high energy bills, and our current BAS is locked down.'"
                          className="min-h-[120px] bg-background/50 border-border focus-visible:ring-accent"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full"
                  variant="accent"
                  size="lg"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Generating Strategy...
                    </>
                  ) : (
                    'Generate Strategy'
                  )}
                </Button>
              </form>
            </Form>

            {recommendation && (
              <div className="mt-8 p-6 bg-background rounded-lg border border-border">
                <h4 className="font-semibold text-lg mb-4 flex items-center text-accent">
                  <Sparkles className="mr-2 h-5 w-5" />
                  Strategic Recommendation
                </h4>
                <p className="text-foreground/90 whitespace-pre-wrap">
                  {recommendation}
                </p>
              </div>
            )}
            {error && (
              <div className="mt-8 p-4 bg-destructive/20 text-destructive-foreground rounded-lg border border-destructive">
                <p>{error}</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
