document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const user = JSON.parse(localStorage.getItem(username));

  if (user && user.password === password) {
    alert("Login berhasil!");
    window.location.href = "dashboard.html";
  } else {
    alert("Username atau password salah!");
  }
});
