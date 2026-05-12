export function generateSuggestions(report, tokens) {
  const suggestions = [];

  if (report.scores.spacing < 0.8) {
    suggestions.push({
      category: "Spacing",
      suggestion: `Use consistent spacing steps like ${tokens.spacing.md}px and ${tokens.spacing.lg}px.`
    });
  }

  if (report.scores.typography < 0.8) {
    suggestions.push({
      category: "Typography",
      suggestion: "Normalize heading sizes and reduce mixed font weights."
    });
  }

  if (report.scores.hierarchy < 0.8) {
    suggestions.push({
      category: "Hierarchy",
      suggestion: "Increase contrast between primary actions, section headers, and supporting text."
    });
  }

  return suggestions;
}
