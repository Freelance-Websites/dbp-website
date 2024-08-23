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
  return (
    <section
      className="bg-stone-800 px-4 lg:px-0"
      id={id}
    >
      <div className="container mx-auto py-12 md:py-16 lg:py-24 xl:py-32 grid grid-cols-1 gap-3">
        {subtitle && (
          <p className="text-sm uppercase tracking-widest font-medium text-center text-indigo-400">
            {subtitle}
          </p>
        )}
        {title && (
          <h2 className="font-serif text-2xl md:text-4xl max-w-lg mx-auto md:leading-normal text-center text-white">
            {title}
          </h2>
        )}
        {image && (
          <Image
            src={image}
            alt={title}
            className="block mx-auto my-8"
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