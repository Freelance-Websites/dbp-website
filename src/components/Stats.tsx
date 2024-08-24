import CountUp from 'react-countup';
import { useInView } from "react-intersection-observer";

interface Stat {
  number: string;
  content: string;
  prepend?: string;
  append?: string;
}

const Stats = ({
  title,
  stats,
  image
}: {
  title: string;
  image: string;
  stats: Array<Stat>;
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.25,
  });

  return (
    <section
      className="px-4 lg:px-0 relative"
      style={{
        background: `url(${image}) no-repeat center center/cover`,
      }}
    >
      <div className="absolute w-full h-full bg-stone-800 opacity-20 left-0" />
      <article className="container mx-auto py-12 md:py-16 lg:py-24 xl:py-32 relative">
        {title && (
          <p className="text-sm uppercase tracking-widest font-medium text-white mb-4">
            {title}
          </p>
        )}
        {stats && (
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" ref={ref}>
            {stats.map((stat: Stat, index: number) => (
              <li
                key={index}
                className="flex flex-col items-center justify-center text-center bg-white/90 backdrop-blur-sm shadow-dp-1 py-6 md:py-8 lg:py-12"
              >
                <p className="text-7xl font-serif text-stone-800">
                  {stat.prepend && (
                    <span className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-stone-500">
                      {stat.prepend}
                    </span>
                  )}
                  <CountUp
                    start={inView ? 0 : 0}
                    end={inView ? Number(stat.number) : 0}
                    duration={3}
                    delay={0.5}
                  />
                  {stat.append && (
                    <span className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-stone-500">
                      {stat.append}
                    </span>
                  )}
                </p>
                <p className="text-sm uppercase tracking-widest font-medium text-indigo-600 mt-3">
                  {stat.content}
                </p>
              </li>
            ))}
          </ul>
        )}
      </article>
    </section>
  );
};

export default Stats;