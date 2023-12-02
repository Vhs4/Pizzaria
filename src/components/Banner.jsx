import './Banner.css';

const Banner = () => {
  return (
    <section className="flex items-center justify-center">
      <div className="banner">
        <div className="content">
          <div className="header mt-10 text-right">
            <h1 className="text-2xl mr-32 font-medium mt-4 md:mt-6 lg:mt-8 xl:mt-10">
              Pizzaria Erivax
            </h1>
            <p className="text-lg font-medium">
              Onde o sabor fala com o seu paladar
            </p>
            <p className="mr-2 mt-4 md:mt-6 lg:mt-8 xl:mt-10 font-semibold">
              Aberto agora, <span style={{color: '#8A98BA'}}>horário</span> 18:30 a 23:00
            </p>
          </div>
          <div className="buttons mt-6 md:mt-8 lg:mt-10 xl:mt-12 flex justify-end">
            <button className="button md:ml-2">Italiana</button>
            <button className="button">Broto</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
