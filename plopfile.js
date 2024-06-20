// This file is a configuration for Plop, a micro-generator framework.
// Plop helps automate the creation of files based on templates, ensuring consistency and reducing manual work.

module.exports = plop => {
  // Generator for creating a reusable component
  plop.setGenerator('Component', {
    // Description of the generator
    description: 'Create a reusable component',

    // Prompts that Plop will present to the user
    prompts: [
      {
        // Type of input expected from the user
        type: 'input',
        // Name of the variable that will store the user's input
        name: 'name',
        // Message to show to the user
        message: 'What is your component name?',
      },
    ],

    // Actions to perform based on the user's input
    actions: [
      {
        // Action type to add a new file
        type: 'add',
        // Path where the new file will be created
        path: 'src/components/{{name}}/component.tsx',
        // Template file to use for generating the new file
        templateFile: '.templates/component/component.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{name}}/styles.ts',
        templateFile: '.templates/component/styles.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{name}}/types.ts',
        templateFile: '.templates/component/types.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{name}}/index.ts',
        templateFile: '.templates/component/index.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{name}}/test.tsx',
        templateFile: '.templates/component/test.tsx.hbs',
      },
      {
        // Action type to append content to an existing file
        type: 'append',
        path: 'src/components/index.ts',
        // Template string to append to the existing file
        template: "export { {{name}} } from './{{name}}';",
      },
    ],
  });

  // Generator for creating a reusable utility function
  plop.setGenerator('Util', {
    description: 'Create a reusable util',

    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your util name?',
      },
    ],

    actions: [
      {
        type: 'add',
        path: 'src/utils/{{name}}/function.tsx',
        templateFile: '.templates/util/function.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/utils/{{name}}/index.ts',
        templateFile: '.templates/util/index.ts.hbs',
      },
      {
        type: 'append',
        path: 'src/utils/index.ts',
        template: "export * from './{{name}}';",
      },
    ],
  });
};

/**
 * Detailed Explanation:
 *
 * - **plop.setGenerator('Component', {...})**: Defines a generator named 'Component'.
 *   - **description**: A brief description of what this generator does.
 *   - **prompts**: Questions asked to the user to gather input. In this case, it asks for the component name.
 *   - **actions**: Steps Plop will take to create the component. This includes adding files based on templates and appending an export statement to the `index.ts` file.
 *
 * - **plop.setGenerator('Util', {...})**: Defines a generator named 'Util' for creating utility functions.
 *   - **description**: A brief description of what this generator does.
 *   - **prompts**: Questions asked to the user to gather input. In this case, it asks for the utility function name.
 *   - **actions**: Steps Plop will take to create the utility function. This includes adding files based on templates and appending an export statement to the `index.ts` file.
 *
 * Benefits of Using Plop:
 * - **Consistency**: Ensures that all components and utilities follow the same structure and naming conventions.
 * - **Efficiency**: Automates repetitive tasks, saving time and reducing the chance of errors.
 * - **Scalability**: Easy to add more generators and templates as the project grows.
 */
