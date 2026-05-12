export function analyzeLayout(screen) {
  const spacingScore = screen.spacing === "consistent" ? 0.95 : 0.68;
  const typographyScore = screen.typography === "aligned" ? 0.93 : 0.72;
  const hierarchyScore = screen.hierarchy === "clear" ? 0.91 : 0.64;

  const overallScore = Number(
    ((spacingScore + typographyScore + hierarchyScore) / 3).toFixed(2)
  );

  return {
    screen: screen.name,
    componentsScanned: screen.components,
    sectionsScanned: screen.sections,
    scores: {
      spacing: spacingScore,
      typography: typographyScore,
      hierarchy: hierarchyScore,
      overall: overallScore
    },
    status: overallScore >= 0.85 ? "demo-ready" : "needs polish"
  };
}
