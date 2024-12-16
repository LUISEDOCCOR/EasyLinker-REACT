import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
//Importamos dependencias de prettier
import prettierConfig from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";

export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
  { languageOptions: { globals: globals.browser } },
  ...tseslint.configs.recommended,
  // Añadimos dependencias de prettier a configuración de ESLint
  prettierConfig,
  prettierPlugin,
  pluginReactConfig,
  {
    //Añadimos estas reglas a la configuración
    rules: {
      ...prettierConfig.rules,
      "react/react-in-jsx-scope": "off",
      "prettier/prettier": "error ",
    },
  },
];
