console.log('method start');

const user = getUser(1);
user.then((user) => getUserRepos(user));

function getUserRepos(user) {
  console.log(user);
  const p = getRepos(user);
  p.then((repos) => displayRepos(repos));
}

function displayRepos(repos) {
  console.log(repos);
}

console.log('method end');

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: 1, name: 'first user' });
    }, 2000);
  });
}

function getRepos(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(['repo1', 'repo2']);
    }, 1000);
  });
}
