import Image from "next/image";

interface Service {
  title?: string;
  subtitle?: string;
  content?: string;
  bgColor?: string;
}

const Services = ({
  id,
  image,
  services
}: {
  id: string;
  image: string;
  services: Array<Service>;
}) => {
  return (
    <section
      id={id}
    >
        {services.length > 0 &&
          <ul className="grid grid-cols-1 lg:grid-cols-2">
            <li className="relative aspect-video md:aspect-[4/3]">
              <Image
                src={image}
                alt="Services"
                loading="lazy"
                layout="fill"
                objectFit="cover"
              />
            </li>
            {services.map((service, index) => {
              const fontColor = service.bgColor === 'bg-indigo-600' || service.bgColor === 'bg-stone-800' ? 'text-white' : 'text-stone-800';

              return (
                <li
                  key={index}
                  className={`${service.bgColor} px-4 md:px-8 py-12 md:py-0 grid grid-cols-1 content-center md:aspect-[4/3]`}
                >
                  <div className="grid grid-cols-1 content-center gap-3 max-w-xl mx-auto">
                    <span className={`${fontColor} text-sm uppercase tracking-widest font-medium`}>{service.subtitle}</span>
                    <h4 className={`font-serif ${fontColor} text-2xl md:text-4xl`}>{service.title}</h4>
                    <p className={`${fontColor} font-light text-lg md:text-2xl md:leading-relaxed`}>{service.content}</p>
                  </div>
                </li>
              )
            }
            )}
          </ul>
        }
    </section>
  );
};

export default Services;