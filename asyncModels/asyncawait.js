console.log('method start');

displayUserRepos();

async function displayUserRepos() {
  const user = await getUser(1);
  console.log(user);
  const repos = await getRepos(user);
  displayRepos(repos);
}

console.log('method end');

function displayRepos(repos) {
  console.log(repos);
}

function getUser(id, callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: 1, name: 'first user' });
    }, 2000);
  });
}

function getRepos(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(['repo1', 'repo2']), 1000);
  });
}
