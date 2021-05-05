const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#pass');
const loginButton = document.querySelector('#login');

async function login(user, pass) {
  const obj = {
    username: user,
    password: pass
  }

  const response = await fetch('http://localhost:8000/api/login', {
    method: 'POST',
    body: JSON.stringify(obj),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const data = await response.json();

  console.log('Login:', data);

  return await data;
}

async function isLoggedIn() {
  const response = await fetch('http://localhost:8000/api/loggedin');
  const data = await response.json();

  if (data.loggedIn) {
    location.href = 'http://localhost:8000/loggedIn.html';
  }
}


loginButton.addEventListener('click', async () => {
  const username = usernameInput.value;
  const password = passwordInput.value;

  const loggedIn = await login(username, password);

  if (loggedIn.success) {
    //location.href = 'http://localhost:8000/loggedIn.html';
  }
});

isLoggedIn();