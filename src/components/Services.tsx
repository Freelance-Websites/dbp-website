import { useInView } from "react-intersection-observer";
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
    <section id={id}>
      <article>
        {services.length > 0 &&
          <ul className="grid grid-cols-1 lg:grid-cols-2">
            <li className="relative aspect-video md:aspect-[4/3]">
              <Image
                src={image}
                alt="Services"
                loading="lazy"
                width={640}
                height={480}
                className="w-full h-full object-cover"
              />
            </li>
            {services.map((service, index) => {
              const fontColor = service.bgColor === 'bg-indigo-600' || service.bgColor === 'bg-stone-800' ? 'text-white' : 'text-stone-800';
              const { ref, inView } = useInView({
                triggerOnce: true,
                threshold: 0.25,
              });

              return (
                <li
                  key={index}
                  className={`${service.bgColor} px-4 md:px-8 py-12 md:py-0 grid grid-cols-1 content-center md:aspect-[4/3]`}
                >
                  <div
                    className="grid grid-cols-1 content-center gap-3 max-w-xl mx-auto"
                    ref={ref}
                  >
                    {service.subtitle &&
                      <span
                        className={`
                          ${fontColor} text-sm uppercase tracking-widest font-medium
                          ${inView ? 'opacity-1 translate-y-0' : 'opacity-0 translate-y-6'}
                          transform transition delay-200 duration-1000 ease-in-out
                        `}
                      >
                        {service.subtitle}
                      </span>
                    }
                    <h4
                      className={`
                        font-serif ${fontColor} text-2xl md:text-4xl
                        ${inView ? 'opacity-1 translate-y-0' : 'opacity-0 translate-y-6'}
                        transform transition delay-200 duration-1000 ease-in-out
                      `}
                    >
                      {service.title}
                    </h4>
                    <p
                      className={`
                        ${fontColor} font-light text-lg md:text-2xl md:leading-relaxed
                        ${inView ? 'opacity-1 translate-y-0' : 'opacity-0 translate-y-6'}
                        transform transition delay-200 duration-1000 ease-in-out
                      `}
                    >
                      {service.content}
                    </p>
                  </div>
                </li>
              )
            }
            )}
          </ul>
        }
      </article>
    </section>
  );
};

export default Services;