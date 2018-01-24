const upperCamelCasePattern = /^([A-Z][a-z]+)+$/;
const hypenCasePattern = /^[a-z\-]+$/; // eslint-disable-line no-useless-escape
const packagePrefix = '@strokes/';

const isComponentNameValid = componentName => componentName.match(upperCamelCasePattern);
const isPackageNameValid = packageName => packageName.replace(packagePrefix, '').match(hypenCasePattern);


module.exports = {
  prompts: {
    componentName: {
      type: 'string',
      required: true,
      message: 'Component name, should be upper camel case:',
      validate: (componentName) => {
        if (!isComponentNameValid(componentName)) {
          return `${componentName} should be upper camel case`;
        }
        return true;
      },
    },
    packageName: {
      type: 'string',
      required: true,
      message: 'Name of the package in the package.json, should be hyphen-case, for example: "ui-text":',
      filter: packageName => `${packagePrefix}${packageName}`,
      validate: (packageName) => {
        if (!isPackageNameValid(packageName)) {
          return `${packageName} should be hyphen-case after "${packagePrefix}" prefix`;
        }
        return true;
      },
    },
  },
  completionMessage: 'Component created successfully in {{destDirName}}',
};
