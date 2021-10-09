const { resolve } = require('path');
const { getDevicePath } = require('./src/utils/slug');

const createMarkdownPages = async ({ actions, graphql, reporter }) => {
  const component = resolve('src/components/Board.js');
  const { createPage } = actions;
  const result = await graphql(`
    {
      allBoardsJson(limit: 1000) {
        edges {
          node {
            manufacturer
            name
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('Error while running GraphQL markdown query.');
    return;
  }

  let counter = 0;

  result.data.allBoardsJson.edges.forEach(({ node }) => {
    const { manufacturer, name } = node;
    const path = getDevicePath(node);

    reporter.info(`Creating page at ${path}`);

    counter++;
    createPage({
      context: {
        name,
        manufacturer
      },
      component,
      path
    });
  });

  reporter.info(`Created ${counter} markdown pages!`);
};

exports.createPages = async (options) => {
  await createMarkdownPages(options);
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [resolve(__dirname, 'src'), 'node_modules']
    }
  });
};
