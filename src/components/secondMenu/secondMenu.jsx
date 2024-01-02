import { Link } from 'react-router-dom';
import './secondMenu.css'

const secondMenu = () => {
  const gridItems = [
    { id: 1, description: 'Pizza Matex', imageSrc: 'https://media.discordapp.net/attachments/1026845441071005776/1181311656630951978/cardapio2img1.png?ex=65809936&is=656e2436&hm=c2ab6359b2215ec08c8bc2be61a1bf039091dd901a69b7ba5a08ff4e3e3432dc&=&format=webp&quality=lossless' },
    { id: 2, description: 'Pizza Erivax', imageSrc: 'https://media.discordapp.net/attachments/1026845441071005776/1181311657172013128/cardapio2img2.png?ex=65809936&is=656e2436&hm=87c9b6b210d0cb2647b9f5a8f9bdfaaa796a3a148f920f5438be0ac0b02df011&=&format=webp&quality=lossless' },
    { id: 3, description: 'Pizza Cairo', imageSrc: 'https://media.discordapp.net/attachments/1026845441071005776/1181311657486590023/cardapio2img3.png?ex=65809936&is=656e2436&hm=36f5d39ab95c6e344944e663fc6ab6a82cf16b603f393c3c333b380cbd05d666&=&format=webp&quality=lossless' },
  ];

  // Componente para cada item do grid
  const GridItem = ({ description, imageSrc }) => (
    <div style={{borderRadius: '10%'}} className="bg-white rounded-lg border-b pr-4 cardapiodiv2">
      <Link to="/page4">
      <img style={{width: '16.3rem'}} src={imageSrc} alt={`Imagem para ${description}`} className="h-44 rounded-md object-cover mb-2" />
      <p className="text-base ml-2" style={{color: '#B30733'}}>{description}</p>
      </Link>
    </div>
  );

  return (
    <>
    <section className="flex justify-center align-center mb-4">
      <div className="columntr">
        {gridItems.map((item) => (
          <GridItem key={item.id} {...item} />
        ))}
      </div>
    </section>
    </>
  );
};

export default secondMenu;
