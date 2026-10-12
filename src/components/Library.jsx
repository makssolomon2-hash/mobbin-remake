import { floatingImages, scrollImages } from '../constants/index.js';

const categories = [
  { title: 'Apps', kind: 'apps' },
  { title: 'Sites', kind: 'sites' },
  { title: 'Screens', kind: 'screens' },
  { title: 'Flows', kind: 'flows' },
  { title: 'Animations', kind: 'animations' },
  { title: 'UI Elements', kind: 'elements' },
];

const cardClassName = 'group relative flex min-w-0 h-[clamp(13.5rem,18vw,22rem)] max-[700px]:h-[clamp(12rem,54vw,16rem)] flex-col items-center overflow-hidden rounded-[clamp(1rem,1.5vw,1.75rem)] bg-[#f3f3f4] transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:-translate-y-[5px] hover:shadow-[0_18px_40px_#14141412]';

const PhonePreview = ({ image, variant = 'default', positionClass = '' }) => {
  const variantClasses = {
    default: 'bottom-[-18%] h-[83%] w-[clamp(4.5rem,8.5vw,8rem)] border-4 border-b-0 rounded-t-[1.25rem]',
    flow: 'bottom-[-26%] h-[82%] w-[clamp(4rem,7vw,6.5rem)] border-[3px] border-b-0 rounded-t-[0.9rem]',
    animation: 'bottom-[-18%] h-[83%] w-[clamp(4.5rem,8vw,7.5rem)] border-4 border-b-0 rounded-t-[1.25rem] rotate-[-5deg]',
  };

  return (
    <div
      className={`absolute left-1/2 -translate-x-1/2 overflow-hidden border-[#171717] bg-[#171717] ${variantClasses[variant]} ${positionClass}`}
      aria-hidden="true"
    >
      <img className="h-full w-full object-cover object-top" src={image.src} alt="" />
    </div>
  );
};

const AppStack = () => {
  const iconClasses = [
    '-translate-x-[2.15rem] -rotate-12',
    'z-[1] -translate-y-[0.15rem] scale-[1.08]',
    'translate-x-[2.15rem] rotate-12',
  ];

  return (
    <div className="absolute left-1/2 top-[52%] flex h-20 w-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center" aria-hidden="true">
      {floatingImages.slice(0, 3).map((image, index) => (
        <img
          key={image.id}
          src={image.src}
          alt=""
          className={`absolute aspect-square w-[clamp(3.2rem,5vw,5.2rem)] rounded-[25%] object-cover shadow-[0_12px_22px_#0002] ${iconClasses[index]}`}
        />
      ))}
    </div>
  );
};

const SitePreview = () => (
  <div className="absolute top-[26%] h-[64%] w-[82%] overflow-hidden rounded-[0.45rem] border border-[#e2e2e4] bg-white shadow-[0_8px_18px_#00000014]" aria-hidden="true">
    <div className="flex h-[1.2rem] items-center gap-[0.22rem] bg-white px-[0.4rem]">
      <i className="aspect-square w-1 rounded-full bg-[#c6c6ca]" />
      <i className="aspect-square w-1 rounded-full bg-[#c6c6ca]" />
      <i className="aspect-square w-1 rounded-full bg-[#c6c6ca]" />
      <span className="mx-auto text-[0.4rem] text-[#777]">mobbin.com</span>
    </div>
    <img className="h-[calc(100%-1.2rem)] w-full object-cover object-top" src={scrollImages[7].src} alt="" />
    <img
      className="absolute bottom-[-12%] right-[4%] h-[72%] w-[31%] rounded-[0.3rem] border-[3px] border-white object-cover shadow-[0_5px_12px_#0002]"
      src={scrollImages[2].src}
      alt=""
    />
  </div>
);

const CardPreview = ({ kind }) => {
  if (kind === 'apps') return <AppStack />;
  if (kind === 'sites') return <SitePreview />;
  if (kind === 'screens') return <PhonePreview image={scrollImages[0]} />;
  if (kind === 'flows') {
    const phonePositions = ['left-[16%]', 'left-1/2', 'left-[84%]'];

    return (
      <div className="absolute inset-x-0 bottom-0 top-[27%]" aria-hidden="true">
        {scrollImages.slice(1, 4).map((image, index) => (
          <PhonePreview key={image.id} image={image} variant="flow" positionClass={phonePositions[index]} />
        ))}
      </div>
    );
  }
  if (kind === 'animations') {
    return (
      <div className="absolute inset-0" aria-hidden="true">
        <PhonePreview image={scrollImages[4]} variant="animation" />
        <span className="absolute left-1/2 top-[58%] aspect-square w-[clamp(7rem,13vw,12rem)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#c9c9cc]" />
        <span className="absolute left-1/2 top-[58%] aspect-square w-[clamp(9rem,17vw,15rem)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d9d9dc]" />
      </div>
    );
  }
  return (
    <div className="absolute left-1/2 top-[55%] flex -translate-x-1/2 -translate-y-1/2 items-center gap-[0.3rem] rounded-full bg-white p-[0.45rem] shadow-[0_4px_16px_#0000000b]" aria-hidden="true">
      {['◼', '✣', '☆', '◇', '⌕'].map((icon) => (
        <span key={icon} className="grid aspect-square w-[clamp(1.8rem,3.2vw,3.2rem)] place-items-center rounded-full bg-[#f5f5f6] text-[clamp(0.75rem,1.2vw,1.2rem)] text-[#252525]">
          {icon}
        </span>
      ))}
    </div>
  );
};

const Library = () => (
  <section
    id="library"
    className="bg-white px-[6vw] pt-[clamp(5rem,10vw,9rem)] pb-[clamp(6rem,12vw,11rem)] text-[#141414] max-[700px]:px-4"
  >
    <h2
      className="mx-auto mb-[clamp(2.5rem,5vw,4.5rem)] text-center text-[clamp(2rem,3.4vw,3.25rem)] font-[650] leading-[1.04] tracking-[-0.055em]"
      data-reveal
    >
      One library<br />for all your needs.
    </h2>
    <div className="mx-auto grid w-full max-w-[82rem] grid-cols-3 gap-[clamp(0.75rem,1.15vw,1.25rem)] max-[700px]:grid-cols-2">
      {categories.map((category) => (
        <article key={category.kind} className={cardClassName} data-reveal="scale">
          <h3 className="relative z-[2] mt-[clamp(1.1rem,1.6vw,1.6rem)] text-[clamp(0.9rem,1.15vw,1.15rem)] font-semibold tracking-[-0.025em]">
            {category.title}
          </h3>
          <CardPreview kind={category.kind} />
        </article>
      ))}
    </div>
  </section>
);

export default Library;
