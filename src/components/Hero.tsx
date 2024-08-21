const Hero = ({
  video,
  title,
  id
}: {
  video: string;
  title: string;
  id: string;
}) => {
  return (
    <section
      id={id}
    >
      <div className="relative hero overflow-hidden">
        <div className="w-screen h-screen relative">
          <div className="absolute w-full h-full bg-gray-900 opacity-20" />
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
      </div>
      <div
        className="absolute flex items-center justify-center w-full h-full top-0 text-[7vw]"
      >
        <h1 className="text-white leading-none">
          {title}
        </h1>
      </div>
    </section>
  );
};

export default Hero;