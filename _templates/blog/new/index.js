const slugify = require('slugify');

module.exports = {
  prompt: async ({ prompter }) => {
    const { slug, title, description } = await prompter.prompt([
      {
        type: 'input',
        name: 'slug',
        message: 'Slug?',
      },
      {
        type: 'input',
        name: 'title',
        message: 'Title?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Description?',
      },
    ]);

    return {
      title,
      date: new Date().toISOString(),
      slug: slugify(slug, { remove: /[*+~.()'"!:@]/g, lower: true }),
      title,
      description,
    };
  },
};
