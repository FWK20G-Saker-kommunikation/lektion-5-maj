async function isLoggedIn() {
  const response = await fetch('http://localhost:8000/api/loggedin');
  const data = await response.json();

  if (!data.loggedIn) {
    location.href = 'http://localhost:8000/';
  }
}

isLoggedIn();