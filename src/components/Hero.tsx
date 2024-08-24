import { useInView } from "react-intersection-observer";

const Hero = ({
  video,
  title,
  id
}: {
  video: string;
  title: string;
  id: string;
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.25,
  });

  return (
    <section id={id}>
      <article className="relative hero overflow-hidden">
        <div className="w-screen h-screen relative">
          <div className="absolute w-full h-full bg-stone-800 opacity-20" />
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            playsInline
            loop
          >
            <source src={video} />
          </video>
        </div>
      </article>
      <div
        className="absolute flex items-center justify-center w-full h-full top-0 text-[7vw]"
        ref={ref}
      >
        <h1
          className={`${inView ? 'opacity-1 translate-y-0' : 'opacity-0 translate-y-6'} transform transition delay-200 duration-500 ease-in-out text-white leading-none font-serif`}
        >
          {title}
        </h1>
      </div>
    </section>
  );
};

export default Hero;