module.exports = plop => {
  plop.setGenerator('Component', {
    description: 'Create a reusable component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{name}}/component.tsx',
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
        type: 'append',
        path: 'src/components/index.ts',
        template: "export { {{name}} } from './{{name}}';",
      },
    ],
  });
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
