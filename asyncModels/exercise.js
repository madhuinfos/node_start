sendEmailToCustomer(10);

async function sendEmailToCustomer(id) {
  console.log('trying to send movies E-mail to user, ', id);

  const customer = await getCustomer(id);
  console.log(customer);

  if (customer && customer.isGold) {
    try {
      const topMovies = await getTopMovies();
      console.log(`Top movies ${topMovies}`);

      console.log(await sendEmail(customer.email, topMovies));
    } catch (e) {
      console.log(e);
    }
  }
}

function getCustomer(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: id,
        name: 'Mosh Hamedani',
        isGold: true,
        email: 'email',
      });
    }, 4000);
  });
}

function getTopMovies() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(['movie1', 'movie2']);
    }, 4000);
  });
}

function sendEmail(email, movies) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Sent E-mail');
    }, 4000);
  });
}
