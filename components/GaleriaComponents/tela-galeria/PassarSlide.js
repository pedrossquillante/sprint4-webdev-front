'use client';

import { useEffect, useRef } from 'react';

const imagens = ['f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8'];
const INTERVALO_MS = 2000;

const imagemPorId = {
  f1: '/icons2/image.jpg',
  f2: '/icons2/image2.webp',
  f3: '/icons2/image3.webp',
  f4: '/icons2/image4.jpg',
  f5: '/icons2/image5.jpg',
  f6: '/icons2/image6.webp',
  f7: '/icons2/image7.jpg',
  f8: '/icons2/image8.jpg',
  f9: '/icons2/image9.jpg',
  f10: '/icons2/image10.webp',
  f11: '/icons2/image11.webp',
  f12: '/icons2/image12.webp',
  f13: '/icons2/image13.jpg',
  f14: '/icons2/image14.jpg',
  f15: '/icons2/image15.jpg',
  f16: '/icons2/image9.jpg',
  f17: '/icons2/image17.jpg',
  f18: '/icons2/image.jpg',
  f19: '/icons2/image18.webp',
  f20: '/icons2/image15.jpg',
};

export default function PassarSlide() {
  const containerRef = useRef(null);
  const indexRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    function proximo() {
      indexRef.current += 1;
      if (indexRef.current >= imagens.length) {
        indexRef.current = 0;
      }

      const primeiraImagem = container.children[0];
      const tam = primeiraImagem ? primeiraImagem.offsetWidth : 0;

      container.scrollTo({
        left: indexRef.current * tam,
        behavior: 'smooth',
      });
    }

    const slide = setInterval(proximo, INTERVALO_MS);

    function pausar() {
      clearInterval(slide);
    }

    container.addEventListener('mousedown', pausar);
    container.addEventListener('touchstart', pausar);

    return () => {
      clearInterval(slide);
      container.removeEventListener('mousedown', pausar);
      container.removeEventListener('touchstart', pausar);
    };
  }, []);

  return (
    <div
      className="flex overflow-x-auto overflow-y-hidden w-full h-full items-center px-5 gap-[15px] snap-x snap-mandatory scroll-smooth"
      style={{ WebkitOverflowScrolling: 'touch' }}
      ref={containerRef}
    >
      {imagens.map((id) => (
        <span
          key={id}
          className="flex-[0_0_85%] h-[80%] bg-[#222] rounded-[15px] snap-center bg-center bg-no-repeat bg-cover inline-block"
          style={{ backgroundImage: `url(${imagemPorId[id]})` }}
        ></span>
      ))}
    </div>
  );
}