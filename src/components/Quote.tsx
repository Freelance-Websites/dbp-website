const Quote = ({
  bgColor,
  quote,
  ctaText,
  ctaLink
}: {
  bgColor: string;
  quote: string;
  ctaText: string;
  ctaLink: string;
}) => {
  const fontColor = bgColor === 'bg-indigo-600' || bgColor === 'bg-stone-800' ? 'text-white' : 'text-stone-800';
  return (
    <section
      className={`${bgColor} px-4 md:px-8 lg:px-0`}
    >
      <div className="container mx-auto py-12 md:py-16 lg:py-24 xl:py-32 grid grid-cols-1 gap-6 md:gap-8">
        <blockquote className={`font-serif text-2xl md:text-4xl ${fontColor} text-center md:leading-normal mx-auto max-w-sm md:max-w-3xl`}>
          {quote}
        </blockquote>
        <a
          href={ctaLink}
          className={`font-serif text-xl md:text-2xl underline decoration-indigo-400 underline-offset-8 hover:no-underline decoration-1 ${fontColor} text-center`}
        >
          {ctaText}
        </a>
      </div>
    </section>
  );
};

export default Quote;