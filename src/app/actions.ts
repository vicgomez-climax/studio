'use server';

import {
  smartAuditAnalysis,
  type SmartAuditAnalysisInput,
} from '@/ai/flows/smart-audit-analysis';

export async function getSmartAuditAnalysis(
  data: SmartAuditAnalysisInput
): Promise<{ recommendation?: string; error?: string }> {
  try {
    const result = await smartAuditAnalysis(data);
    return { recommendation: result.strategicRecommendation };
  } catch (error) {
    console.error('AI analysis failed:', error);
    return {
      error: 'Failed to generate strategic recommendation. Please try again.',
    };
  }
}
