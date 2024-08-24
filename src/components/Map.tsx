import { useInView } from "react-intersection-observer";
import Image from "next/image";

const Map = ({
  title,
  subtitle,
  id,
  image
}: {
  title: string;
  subtitle: string;
  id: string;
  image: string;
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.25,
  });
  
  return (
    <section
      className="bg-stone-800 px-4 lg:px-0"
      id={id}
    >
      <div className="container mx-auto py-12 md:py-16 lg:py-24 xl:py-32 grid grid-cols-1 gap-3" ref={ref}>
        {subtitle && (
          <p
            className={`
              text-sm uppercase tracking-widest font-medium text-center text-indigo-400
              ${inView ? 'opacity-1 translate-y-0' : 'opacity-0 translate-y-6'}
              transform transition delay-200 duration-1000 ease-in-out
            `}
          >
            {subtitle}
          </p>
        )}
        {title && (
          <h2
            className={`
              font-serif text-2xl md:text-4xl max-w-lg mx-auto md:leading-normal text-center text-white
              ${inView ? 'opacity-1 translate-y-0' : 'opacity-0 translate-y-6'}
              transform transition delay-200 duration-1000 ease-in-out
            `}
          >
            {title}
          </h2>
        )}
        {image && (
          <Image
            src={image}
            alt={title}
            className={`
              ${inView ? 'opacity-1 translate-y-0' : 'opacity-0 translate-y-6'}
              transform transition delay-200 duration-1000 ease-in-out
              block mx-auto my-8
            `}
            width={1024}
            height={768}
            loading="lazy"
          />
        )}
      </div>
    </section>
  );
};

export default Map;