import { useInView } from "react-intersection-observer";

interface Item {
  title: string;
  content: string;
}

const List = ({
  title,
  content,
  items,
  bgColor,
  id
}: {
  title: string;
  content: string;
  bgColor: string;
  id: string;
  items: Array<Item>;
}) => {
  const fontColor = bgColor === 'bg-indigo-600' || bgColor === 'bg-stone-800' ? 'text-white' : 'text-stone-800';
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.25,
  });

  return (
    <section
      className={`${bgColor} px-4 lg:px-0`}
      id={id}
      data-scroll-section
    >
      <div className="container mx-auto py-12 md:py-16 lg:py-24 xl:py-32 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ul>
          <li ref={ref}>
            <h2
              className={`
                font-serif ${fontColor} text-2xl md:text-4xl pb-8 lg:pb-12
                ${inView ? 'opacity-1 translate-y-0' : 'opacity-0 translate-y-6'}
                transform transition duration-1000 ease-in-out
              `}
              data-scroll
              data-scroll-speed="0.5"
            >
              {title}
            </h2>
            <p
              className={`
                text-stone-500 font-light text-lg md:text-2xl md:leading-relaxed
                ${inView ? 'opacity-1 translate-y-0' : 'opacity-0 translate-y-6'}
                transform transition duration-1000 ease-in-out
              `}
              data-scroll
              data-scroll-speed="0.5"
            >
              {content}
            </p>
          </li>
        </ul>
        {items.length > 0 &&
          <ol className="grid gap-6 md:gap-8 lg:gap-12 xl:gap-16">
            {items.map((item, index) => {
              const { ref, inView } = useInView({
                triggerOnce: true,
                threshold: 0.25,
              });

              return (
                <li
                  key={index}
                  className="grid gap-4 md:gap-6 lg:gap-10"
                  data-scroll
                  data-scroll-speed="0.5"
                >
                  <div className="flex items-center gap-3" ref={ref}>
                    <div
                      className={`
                          bg-white rounded-full h-10 w-10 md:w-12 md:h-12 flex items-center justify-center
                          ${inView ? 'opacity-1 translate-y-0' : 'opacity-0 translate-y-6'}
                          transform transition delay-200 duration-1000 ease-in-out
                      `}
                    >
                      <span className="text-indigo-600 text-xl md:text-2xl">{index + 1}</span>
                    </div>
                    <h3
                      className={`
                        ${fontColor} text-sm uppercase tracking-widest font-medium
                        ${inView ? 'opacity-1 translate-y-0' : 'opacity-0 translate-y-6'}
                        transform transition delay-200 duration-1000 ease-in-out
                      `}
                    >
                      {item.title}
                    </h3>
                  </div>
                  <p
                    className={`
                      text-stone-500 font-light text-lg md:text-2xl md:leading-relaxed
                      ${inView ? 'opacity-1 translate-y-0' : 'opacity-0 translate-y-6'}
                      transform transition delay-500 duration-1000 ease-in-out
                    `}
                  >
                    {item.content}
                  </p>
                </li>
              )
            }
            )}
          </ol>
        }
      </div>
    </section>
  );
};

export default List;