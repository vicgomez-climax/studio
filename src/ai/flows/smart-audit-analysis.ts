'use server';

/**
 * @fileOverview This file defines the smart audit analysis flow.
 *
 * The smartAuditAnalysis function takes a facility challenge as input and returns a strategic recommendation.
 * SmartAuditAnalysisInput - The input type for the smartAuditAnalysis function.
 * SmartAuditAnalysisOutput - The return type for the smartAuditAnalysis function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SmartAuditAnalysisInputSchema = z.object({
  facilityChallenge: z.string().describe('The description of the facility challenge.'),
});

export type SmartAuditAnalysisInput = z.infer<typeof SmartAuditAnalysisInputSchema>;

const SmartAuditAnalysisOutputSchema = z.object({
  strategicRecommendation: z.string().describe('A strategic recommendation to address the facility challenge.'),
});

export type SmartAuditAnalysisOutput = z.infer<typeof SmartAuditAnalysisOutputSchema>;

export async function smartAuditAnalysis(input: SmartAuditAnalysisInput): Promise<SmartAuditAnalysisOutput> {
  return smartAuditAnalysisFlow(input);
}

const smartAuditAnalysisPrompt = ai.definePrompt({
  name: 'smartAuditAnalysisPrompt',
  input: {schema: SmartAuditAnalysisInputSchema},
  output: {schema: SmartAuditAnalysisOutputSchema},
  prompt: `Generate a strategic recommendation for this facility challenge: {{{facilityChallenge}}}`,
});

const smartAuditAnalysisFlow = ai.defineFlow(
  {
    name: 'smartAuditAnalysisFlow',
    inputSchema: SmartAuditAnalysisInputSchema,
    outputSchema: SmartAuditAnalysisOutputSchema,
  },
  async input => {
    const {output} = await smartAuditAnalysisPrompt(input);
    return output!;
  }
);
