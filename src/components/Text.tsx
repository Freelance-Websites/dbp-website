import ReactMarkdown from 'react-markdown';

const Text = ({
  title,
  content,
  ctaText,
  ctaLink,
  id
}: {
  title: string;
  content: string;
  ctaLink?: string;
  ctaText?: string;
  id: string;
}) => {
  return (
    <section
      id={id}
      className="bg-indigo-600 px-4 lg:px-0"
    >
      <ul
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 container mx-auto py-12 md:py-16 lg:py-24 xl:py-32"
      >
        <li>
          <h2 className="text-white text-2xl md:text-4xl pb-0 md:pb-8 lg:pb-12">{title}</h2>
          {ctaLink || ctaText &&
            <a
              href={ctaLink ? ctaLink : id === 'about' ? 'mission-vission' : '#'}
              className="text-white text-xl md:text-2xl underline decoration-indigo-400 underline-offset-8 hover:no-underline decoration-1 hidden md:block"
            >
              {ctaText}
            </a>
          }
        </li>
        <li className="text-white font-light text-lg md:text-2xl md:leading-relaxed grid gap-4 md:gap-6 relative md:top-1.5">
          <ReactMarkdown>{content}</ReactMarkdown>
        </li>
        {/* Separate mobile CTA */}
        <li className="block md:hidden">
          <a
            href={ctaLink ? ctaLink : id === 'about' ? 'mission-vission' : '#'}
            className="text-white text-xl md:text-2xl underline decoration-indigo-400 underline-offset-8 hover:no-underline decoration-1"
          >
            {ctaText}
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Text;