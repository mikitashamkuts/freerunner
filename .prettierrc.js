// Exporting the Prettier configuration
module.exports = {
  // Arrow functions should avoid parentheses when they have a single argument.
  arrowParens: 'avoid',

  // Put the closing bracket of JSX elements on the same line as the last prop.
  bracketSameLine: true,

  // No spaces between brackets in object literals.
  bracketSpacing: false,

  // Use single quotes instead of double quotes.
  singleQuote: true,

  // Print trailing commas wherever possible.
  trailingComma: 'all',

  // Specify the line length that the printer will wrap on.
  printWidth: 100,
};

/**
 * Detailed Explanation:
 *
 * - **arrowParens: 'avoid'**
 *   - Avoids parentheses around a single arrow function parameter.
 *   - Example: `(x) => x` becomes `x => x`.
 *
 * - **bracketSameLine: true**
 *   - Places the closing bracket of JSX elements on the same line as the last prop.
 *   - Example: `<div prop="value" />` remains on one line.
 *
 * - **bracketSpacing: false**
 *   - Removes spaces between brackets in object literals.
 *   - Example: `{ foo: bar }` becomes `{foo: bar}`.
 *
 * - **singleQuote: true**
 *   - Uses single quotes instead of double quotes for strings.
 *   - Example: `"string"` becomes `'string'`.
 *
 * - **trailingComma: 'all'**
 *   - Adds trailing commas wherever possible (e.g., in objects, arrays, etc.).
 *   - Example: `{foo: 'bar',}`.
 *
 * - **printWidth: 100**
 *   - Sets the maximum line length to 100 characters.
 *   - Helps keep code more readable by wrapping lines that exceed this length.
 *
 * Usage:
 * - Place this configuration file in the root of your project as `prettier.config.js` or `.prettierrc.js`.
 * - This configuration will be used by Prettier to format your code consistently according to the specified rules.
 * - You can run Prettier using `npx prettier --write .` to format all files in your project.
 *
 * Benefits:
 * - Ensures consistent code formatting across the project.
 * - Helps improve code readability and maintainability.
 * - Reduces the number of diffs in commits by standardizing formatting rules.
 */
