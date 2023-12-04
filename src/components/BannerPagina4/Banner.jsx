import './Banner.css';

const Banner = () => {
  return (
<>
<section className="flex justify-center mt-4 flex-col items-center md:flex-row md:items-start">
      <div className="banner bg-cover">
        <div className="content text-center">
          <div className="buttons mt-6 md:mt-8 lg:mt-10 xl:mt-12 flex justify-end">
            <h1 className="text-2xl mr-24 font-medium mt-4 md:mt-6 lg:mt-8 xl:mt-10">
              Pizzaria Erivax
            </h1>
            <p className="text-md mr-6 font-medium">
              Onde o sabor fala com o seu paladar
            </p>
            <p className="mr-2 mt-4 md:mt-6 lg:mt-8 xl:mt-10 font
            -semibold">
              Aberto agora, <span style={{ color: '#8A98BA' }}>horário</span> 18:30 a 23:00
            </p>
            <div className='mt-6'>
              <button className="button md:ml-2">Italiana</button>
              <button className="button">Broto</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="divmeio justify-start flex flex-col items-center md:flex-row md:items-start">
      <h1 className="font-bold text-xl" style={{color: '#B30733', marginBottom: '1rem', marginTop: '0'}}>CARDÁPIO</h1>
    </div>
    </>
  );
}

export default Banner;
