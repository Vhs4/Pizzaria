import React from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');
  const [loginEmail, setLoginEmail] = React.useState('');
  const [loginSenha, setLoginSenha] = React.useState('');
  const [isLoggedIn, setLoggedIn] = React.useState(false);

  const registerUser = () => {
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = existingUsers.some(user => user.email === email);

    if (userExists) {
      alert('Este e-mail já está em uso. Escolha outro.');
    } else {
      const newUser = { email, senha };
      existingUsers.push(newUser);
      localStorage.setItem('users', JSON.stringify(existingUsers));

      alert('Registro bem-sucedido! Faça login agora.');
    }
  };

  const loginUser = () => {
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = existingUsers.find(user => user.email === loginEmail);

    if (user && user.senha === loginSenha) {
      alert('Login bem-sucedido!');
      setLoggedIn(true);
    } else {
      alert('E-mail ou senha incorretos. Tente novamente.');
    }
  };

  const logoutUser = () => {
    setLoggedIn(false);
  };

  return (
    <div className="flex container mx-auto h-screen bg-gray-100 border-solid border border-gray-700 rounded-lg">
      <div className="flex flex-col left-div bg-cover h-full w-1/2">
        <h1 className="text-orange-500 text-4xl mt-1">Pizzaria</h1>
        <h2 className="text-red-500">Pegue uma fatia</h2>
        <ul className="flex justify-center mt-auto">
          <li className="list-none m-1 p-2 bg-red-700 border-white border rounded-md">aaaa</li>
          <li className="list-none m-1 p-2 bg-red-700 border-white border rounded-md">aaaa</li>
        </ul>
      </div>
      <div className="flex flex-col right-div justify-center items-center p-20 w-1/2">
        {isLoggedIn ? (
          <div>
            <h2>Bem-vindo!</h2>
            {/* Adicione aqui o conteúdo após o login */}
            <button onClick={logoutUser} className="mt-4 p-2 bg-red-700 text-white rounded-md cursor-pointer">Logout</button>
          </div>
        ) : (
          <form className="flex flex-col items-center">
            <label htmlFor="email" className="mt-10">E-mail:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mb-10 p-2"
              required
            />

            <label htmlFor="senha">Senha:</label>
            <input
              type="password"
              id="senha"
              name="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="mb-10 p-2"
              required
            />

            <p>
              <a href="#esqueceu-senha" className="text-orange-500">Esqueceu sua senha?</a>
            </p>

            <button
              type="button"
              onClick={registerUser}
              className="mt-10 p-2 bg-red-700 text-white rounded-md cursor-pointer"
            >
              Criar Conta
            </button>
            <button
              type="button"
              onClick={loginUser}
              className="p-2 bg-red-700 text-white rounded-md cursor-pointer"
            >
              Acessar
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
