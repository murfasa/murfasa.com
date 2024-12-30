import Image from 'next/image';

interface PhotoProps {
  href: string;
  alt: string;
}

const Photo = ({ href, alt }: PhotoProps) => {
  return (
    <div className="drop-shadow-2xl relative w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] dark:mix-blend-lighten">
      <Image
        style={{ clipPath: 'circle()' }}
        src={href}
        alt={alt} 
        priority 
        quality={100} 
        fill 
        className="object-contain drop-shadow-2xl" />
    </div>
  );
};

export default Photo;