import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoLogoApple } from "react-icons/io5";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import './Register.css';

const Register = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userData.password === userData.confirmPassword) {
      localStorage.setItem("userData", JSON.stringify(userData));
      navigate("/");
    } else {
      console.error("As senhas não coincidem. Por favor, verifique novamente.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen medium:h-auto x-sm:h-auto">

      <main className="h-screen border-2 p-1 rounded-md flex m-4 medium:flex-col  medium:items-center  medium:m-0 w-[80%] medium:h-auto x-sm:h-auto">

        {/* Left Section */}
          <section className="w-1/2  py-2 flex flex-col justify-between gap-6 background-image medium:w-full medium:h-[250px] medium:rounded-md">

              <div className=''>
                  <h1 className='text-3xl text-center text-customOrange font-medium'>Codar Pizzaria</h1>
                  <h2 className='text-md text-center text-customLOrange'>PEGUE UMA FATIA</h2>
              </div>

              <div className='flex gap-6 justify-center my-4 large:flex-col large:items-center medium:flex-row x-sm:flex-col'>
                  <button type="button" className='flex bg-customRed rounded-lg px-4 py-2 items-center gap-2 text-white'>
                      <IoLogoApple size={30} />
                      <div className='flex flex-col'>
                      <span className='text-xs text-left'>Download on the</span>
                      <span className='text-lg font-medium text-left leading-4'>Apple Store</span>
                      </div>
                  </button>
                  <button type="button" className='flex bg-customPink rounded-lg px-4 py-2 items-center gap-2 text-white'>
                      <IoLogoGooglePlaystore  size={30} />
                      <div className='flex flex-col'>
                      <span className='text-xs text-left'>Get it on</span>
                      <span className='text-lg font-medium text-left leading-4'>Play Store</span>
                      </div>
                  </button>
              </div>
            </section>

        {/* Right Section */}
        <section className="w-1/2 py-5 flex flex-col justify-between items-center rounded-2x medium:w-full medium:rounded-none medium:h-[500px]">
          <div className="text-center">
            <h3 className='text-2xl text-center text-customRed font-semibold'>Cadastrar-se</h3>
            <span className='border-b-4 border-b-customOrange rounded-full inline-block w-14 text-center medium:my-[9px] medium:border-b-4'></span>
          </div>

          <form className='flex flex-col items-center justify-between w-3/4 gap-7' onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder='Nome Completo'
              name="fullName"
              value={userData.fullName}
              onChange={handleChange}
              className='rounded-2xl bg-transparent px-3 py-1 text-base focus:outline-customOrange focus:bg-transparent w-3/4 border border-slate-400'
              autoComplete="username"
              required
            />

            <input
              type="email"
              placeholder='E-mail'
              name="email"
              value={userData.email}
              onChange={handleChange}
              className='rounded-2xl bg-transparent px-3 py-1 text-base focus:outline-customOrange focus:bg-transparent w-3/4 border border-slate-400 '
              autoComplete="email"
              required
            />

            <input
              type="password"
              placeholder='Senha'
              name="password"
              value={userData.password}
              onChange={handleChange}
              className='rounded-2xl bg-transparent px-3 py-1 text-base focus:outline-customOrange focus:bg-transparent w-3/4 border border-slate-400 '
              autoComplete="new-password"
              required
            />

            <input
              type="password"
              placeholder='Confirmar senha'
              name="confirmPassword"
              value={userData.confirmPassword}
              onChange={handleChange}
              className='rounded-2xl bg-transparent px-3 py-1 text-base focus:outline-customOrange focus:bg-transparent w-3/4 border border-slate-400'
              autoComplete="new-password"
              required
            />

            <button type="submit" className='text-white bg-customOrange rounded-2xl px-6 py-2 w-3/4'>
              Registrar-se
            </button>
          </form>

          <p className='text-black text-sm self-end pr-2 medium:self-center pt-8 mb-[-10px]'>Codar pizzaria 2020</p>
        </section>
      </main>
    </div>
  )
}

export default Register;