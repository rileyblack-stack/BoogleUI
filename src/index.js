import { analyzeLayout } from "./core/analyzeLayout.js";
import { generateSuggestions } from "./core/generateSuggestions.js";
import { themeTokens } from "./theme/themeTokens.js";

const sampleScreen = {
  name: "Dashboard Prototype",
  sections: 5,
  components: 18,
  spacing: "inconsistent",
  typography: "mixed",
  hierarchy: "unclear"
};

const layoutReport = analyzeLayout(sampleScreen);
const suggestions = generateSuggestions(layoutReport, themeTokens);

console.log("BoogleUI Analysis");
console.log("----------------");
console.log(layoutReport);
console.log("Suggestions:");
console.log(suggestions);
