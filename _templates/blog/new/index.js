const slugify = require('slugify');

module.exports = {
  prompt: ({ prompter }) => {
    return new Promise((resolve, reject) => {
      prompter
        .prompt([
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
        ])
        .then(({ slug, title, description }) => {
          resolve({
            title,
            date: new Date().toISOString(),
            slug: slugify(slug, { remove: /[*+~.()'"!:@]/g, lower: true }),
            title,
            description,
          });
        });
    });
  },
};
