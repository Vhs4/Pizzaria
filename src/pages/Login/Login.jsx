import { IoLogoApple } from "react-icons/io5";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Login.css';

const Login = () => {
    const navigate = useNavigate()

    const [loginData, setLoginData] = useState({ email: '', password: ''});
    const [loginStatus, setLoginStatus] = useState(null);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setLoginData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleLogin = () => {

        const storedUserData = JSON.parse(localStorage.getItem("userData"));
        if (
            storedUserData &&
            storedUserData.email === loginData.email &&
            storedUserData.password === loginData.password
        ) {

            navigate('/page2');
        } else {
            setLoginStatus("error");
            console.error("Login falhou. Verifique suas credenciais.");
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
                <section className="w-1/2 py-5 flex flex-col justify-between items-center rounded-2x medium:w-full medium:rounded-none x-sm:500px">
                    <div className="border-b-2 border-slate-300">

                    </div>

                    <div className="text-center">
                        <h3 className='text-2xl text-center text-customRed font-semibold'>Efetuar Login</h3>
                        <span className='border-b-4 border-b-customOrange rounded-full inline-block w-14 text-center medium:my-[9px] medium:border-b-4'></span>
                    </div>

                    <form onSubmit={handleLogin} className='flex flex-col items-center justify-between w-3/4 gap-10 relative x-sm:w-5/6'>   

                        <input 
                            type="email" 
                            placeholder='E-mail'
                            name="email"
                            className='input'
                            value={loginData.email}
                            onChange={handleChange} 
                        />

                        <input 
                            type="password" 
                            placeholder='Senha'
                            name="password"  
                            className='input'
                            value={loginData.password}
                            onChange={handleChange}
                        />

                        <Link to={'/register'} className="w-3/4 self-center text-xs text-right absolute top-[8.3rem]">
                            Esqueceu sua senha?
                        </Link>


                        <button type="submit" className='bg-customOrange rounded-2xl py-2 text-white w-3/4 text-center' >
                            Acessar
                        </button>
                        {loginStatus === "error" && (
                            <p className="text-red-500 text-sm mt-2">
                                Login falhou. Verifique suas credenciais.
                            </p>
                        )}

                        <Link to={'/register'} className='rounded-2xl py-2 w-3/4 text-center border-2'>
                            Criar uma conta
                        </Link>
                    </form>
                    
                    <p className='text-black text-sm self-end pr-2 medium:self-center mt-8 medium:mt-36rem'>Codar pizzaria 2020</p>
                </section>
            </main>
        </div>
    )
}

export default Login;