function loginUser(event) {
  event.preventDefault();
  const user = document.getElementById('username').value.trim();
  const pass = document.getElementById('password').value;

  if (user === "zel" && pass === "1234") {
    window.location.href = "index.html";
  } else {
    document.getElementById('error-msg').textContent = "Invalid username or password!";
  }
}
