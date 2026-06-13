import antfu from "@antfu/eslint-config";

export default antfu(
  {
    stylistic: false,
    markdown: false,
    perfectionist: false,
    react: true,
    ignores: ["package.json"],
  },
  {
    name: "fantomstudy/overrides",
    rules: {
      "antfu/top-level-function": "off",
      "no-console": "off",
      "node/prefer-global/process": "off",
      "react/no-array-index-key": "off",
      "react-hooks/exhaustive-deps": "off",
      "react-refresh/only-export-components": "off",
      "eslint-comments/no-unlimited-disable": "off",
    },
  },
);
