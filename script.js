document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;

  // Exemplo de login simples
  if (user === 'admin' && pass === '1234') {
    document.getElementById('message').textContent = 'Login bem-sucedido!';
    // Redirecionar para outro painel, se quiser
    // window.location.href = 'painel.html';
  } else {
    document.getElementById('message').textContent = 'Usuário ou senha incorretos.';
  }
});