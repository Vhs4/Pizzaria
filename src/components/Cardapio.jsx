const Cardapio = () => {
  const gridItems = [
    { id: 1, description: 'Pizza sabor da casa', imageSrc: 'https://media.discordapp.net/attachments/1026845441071005776/1180608743453511810/img1Grid.png?ex=657e0a93&is=656b9593&hm=dd6ae366e84e321012e9c00920e181cbd8d3699690f20c71fcf54925199dfab1&=&format=webp&quality=lossless' },
    { id: 2, description: 'Pizza calabresa', imageSrc: 'https://media.discordapp.net/attachments/1026845441071005776/1180608743784853625/img2Grid.png?ex=657e0a93&is=656b9593&hm=bd708d792aa2ad25d3b1eece93771f1a2a3d93f7eb90f546041fe85cf61d4783&=&format=webp&quality=lossless' },
    { id: 3, description: 'Pizza doce', imageSrc: 'https://media.discordapp.net/attachments/1026845441071005776/1180608744091041882/img3Grid.png?ex=657e0a93&is=656b9593&hm=afb4f02e649ee8d73a1e0a31105c855c2d9e421ee61d452d506ae78db28c48ee&=&format=webp&quality=lossless' },
    { id: 4, description: 'Pizza pepperoni', imageSrc: 'https://media.discordapp.net/attachments/1026845441071005776/1180608744464339134/img4Grid.png?ex=657e0a93&is=656b9593&hm=46afbe1b212b0ed9ae74a253b32e6c627a6bd96bf8f28c7ce721d8d5b431cce9&=&format=webp&quality=lossless' },
    { id: 5, description: 'Pizza marguerita', imageSrc: 'https://media.discordapp.net/attachments/1026845441071005776/1180608744741154966/img5Grid.png?ex=657e0a93&is=656b9593&hm=13a7342249cd946777bd66dd63d1ce6b2ccab48b2ef92180721a751fa14d8f55&=&format=webp&quality=lossless' }
  ];

  // Componente para cada item do grid
  const GridItem = ({ description, imageSrc }) => (
    <div style={{borderRadius: '10%'}} className="bg-white rounded-lg border-b pb-4 ">
      <img src={imageSrc} alt={`Imagem para ${description}`} className="w-full h-44 rounded-md object-cover mb-2" />
      <p className="text-base ml-2" style={{color: '#B30733'}}>{description}</p>
    </div>
  );

  return (
    <>
    <h3 className="font-bold text-xl" style={{color: '#B30733', marginLeft: '262px', marginBottom: '2rem', marginTop: '0'}}>NOSSO CARDÁPIO</h3>
    <section className="flex items-center justify-center min-w-min">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {gridItems.map((item) => (
          <GridItem key={item.id} {...item} />
        ))}
      </div>
    </section>
    </>
  );
};

export default Cardapio;
