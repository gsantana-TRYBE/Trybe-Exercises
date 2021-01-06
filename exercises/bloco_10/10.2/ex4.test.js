const getRepos = require('./ex4.js');

it('gets a list of repositories and checks for specific', () => {
  const url = 'https://api.github.com/users/tryber/repos';
  return getRepos(url).then(result => {
    expect(result).toContain('sd-01-week4-5-project-todo-list');
    expect(result).toContain('sd-01-week4-5-project-meme-generator');
  });
});