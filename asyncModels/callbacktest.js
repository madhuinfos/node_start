console.log('method start');

getUser(1, getUserRepos);

function displayRepos(repos) {
  console.log(repos);
}

function getUserRepos(user) {
  console.log(user);
  getRepos(user, displayRepos);
}

console.log('method end');

function getUser(id, callback) {
  setTimeout(() => {
    callback({ id: 1, name: 'first user' });
  }, 2000);
}

function getRepos(user, callback) {
  setTimeout(() => {
    callback(['repo1', 'repo2']);
  }, 1000);
}
