import ReactMarkdown from 'react-markdown';
import { useInView } from "react-intersection-observer";

const Text = ({
  title,
  content,
  ctaText,
  ctaLink,
  id,
  bgColor
}: {
  title: string;
  content: string;
  ctaLink?: string;
  ctaText?: string;
  bgColor?: string;
  id: string;
}) => {
  const fontColor = bgColor === 'bg-indigo-600' || bgColor === 'bg-stone-800' ? 'text-white' : 'text-stone-800';
  const isCtaUrl = ctaLink && ctaLink.startsWith('http') || ctaLink && ctaLink.startsWith('/');
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.25,
  });
  
  return (
    <section
      id={id}
      className={`px-4 lg:px-0 ${bgColor}`}
      ref={ref}
      data-scroll-section
    >
      <ul
        className={`
          grid grid-cols-1 lg:grid-cols-2 gap-8 container mx-auto py-12 md:py-16 lg:py-24 xl:py-32
          ${inView ? 'opacity-1 translate-y-0' : 'opacity-0 translate-y-6'}
          transform transition delay-200 duration-1000 ease-in-out
        `}
      >
        <li>
          <h2
            className={`font-serif ${fontColor} text-2xl md:text-4xl pb-0 md:pb-8 lg:pb-12`}
            data-scroll
            data-scroll-speed="0.5"
          >
            {title}
          </h2>
          {ctaLink && ctaText &&
            <a
              href={isCtaUrl ? ctaLink : `#${ctaLink}`}
              className={`
                font-serif ${fontColor} text-xl md:text-2xl underline decoration-indigo-400 underline-offset-8 hover:no-underline decoration-1 hidden md:block
              `}
              data-scroll
              data-scroll-speed="0.5"
            >
              {ctaText}
            </a>
          }
        </li>
        <li
          className={`${fontColor} font-light text-lg md:text-2xl md:leading-relaxed grid gap-4 md:gap-6 relative md:top-1.5`}
          data-scroll
          data-scroll-speed="0.5"
        >
          <ReactMarkdown>{content}</ReactMarkdown>
        </li>
        {/* Separate mobile CTA */}
        <li className="block md:hidden">
          {ctaLink && ctaText &&
            <a
              href={isCtaUrl ? ctaLink : `#${ctaLink}`}
              className={`${fontColor} font-serif text-xl md:text-2xl underline decoration-indigo-400 underline-offset-8 hover:no-underline decoration-1`}
              data-scroll
              data-scroll-speed="0.5"
            >
              {ctaText}
            </a>
          }
        </li>
      </ul>
    </section>
  );
};

export default Text;