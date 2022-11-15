module.exports = (
  /** @type {import('plop').NodePlopAPI} */
  plop
) => {
  plop.setGenerator("component", {
    description: "Добавить новый компонент",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Имя компонента",
      },
    ],
    actions: [
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/index.tsx",
        templateFile: "./templates/component/component.tsx.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/index.stories.tsx",
        templateFile: "./templates/component/stories.tsx.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/index.module.scss",
        templateFile: "./templates/styles.scss.hbs",
      },
    ],
  });
};
