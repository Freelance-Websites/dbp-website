import ReactMarkdown from 'react-markdown';
import { useInView } from "react-intersection-observer";

import styles from './Contact.module.css';

const Contact = ({
  title,
  content,
  id,
  image
}: {
  title: string;
  content: string;
  id: string;
  image: string;
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
      id={id}
      data-scroll-section
    >
      <div className="container mx-auto py-12 md:py-16 lg:py-24 xl:py-32 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-32" ref={ref}>
        <ul className="grid grid-cols-1 gap-6 md:gap-8 content-between">
          <li>
            <h2
              className={`
                font-serif text-white text-2xl md:text-4xl pb-8 lg:pb-12
                ${inView ? 'opacity-1 translate-y-0' : 'opacity-0 translate-y-6'}
                transform transition delay-200 duration-1000 ease-in-out
              `}
            >
              {title}
            </h2>
            <ReactMarkdown
              className={`
                ${styles.Paragraph} text-white font-light text-lg md:text-2xl md:leading-relaxed
                ${inView ? 'opacity-1 translate-y-0' : 'opacity-0 translate-y-6'}
                transform transition delay-200 duration-1000 ease-in-out
              `}
            >
              {content}
            </ReactMarkdown>
          </li>
          {/* Desktop social networks & Copyright */}
          <li className="hidden md:block">
            <ol className="flex gap-2 mb-3">
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-600 w-8 h-8 rounded-full flex items-center justify-center transition ease-in-out duration-300 hover:opacity-70"
                >
                  <svg fill="none" height="14" viewBox="0 0 8 14" width="8" xmlns="http://www.w3.org/2000/svg">
                    <path d="m5.21166 7.90915h1.51515l.60606-2.42424h-2.12121v-1.21212c0-.62425 0-1.21212 1.21212-1.21212h.90909v-2.03637c-.19757-.026059-.94363-.084847-1.73151-.084847-1.64546 0-2.81394 1.004247-2.81394 2.848487v1.69697h-1.818182v2.42424h1.818182v5.15155h2.42424z" fill="#fff" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-600 w-8 h-8 rounded-full flex items-center justify-center transition ease-in-out duration-300 hover:opacity-70"
                >
                  <svg fill="none" height="12" viewBox="0 0 12 12" width="12" xmlns="http://www.w3.org/2000/svg">
                    <path d="m6.90185 5.10903 4.23875-4.927271h-1.0048l-3.68062 4.278181-2.93939-4.278788h-3.390302l4.444242 6.470298-4.444242 5.16665h1.004242l3.88667-4.51816 3.10485 4.51816h3.39025l-4.61025-6.70907zm-1.37576 1.59939-.4509-.64424-3.58364-5.126058h1.54303l2.89212 4.136358.4503.64425 3.7594 5.37757h-1.54303z" fill="#fff"/>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-600 w-8 h-8 rounded-full flex items-center justify-center transition ease-in-out duration-300 hover:opacity-70"
                >
                  <svg fill="none" height="12" viewBox="0 0 12 12" width="12" xmlns="http://www.w3.org/2000/svg">
                    <path d="m2.56975 1.75814c-.00016.32147-.12802.62972-.35545.85692s-.5358.35475-.85728.35459c-.32147-.00016-.629715-.12802-.856918-.35545-.227204-.22743-.354755-.5358-.354594-.85727.000161-.32148.12802-.62972.355451-.856926.22743-.227203.535801-.354754.857281-.354594.32147.000161.62971.12802.85692.355451.2272.227429.35475.535799.35459.857279zm.03636 2.10909h-2.424238v7.58787h2.424238zm3.83031 0h-2.41212v7.58787h2.38787v-3.98181c0-2.21818 2.89091-2.42424 2.89091 0v3.98181h2.39392v-4.80605c0-3.7394-4.27876-3.6-5.28483-1.76364z" fill="#fff"/>
                  </svg>
                </a>
              </li>
            </ol>
            <p className="text-sm uppercase tracking-widest font-medium text-stone-400">
              Copyright &copy; {new Date().getFullYear()} Delta Bridge Partners.
            </p>
          </li>
        </ul>
        <form
          className={`
            grid grid-cols-1 gap-6
            ${inView ? 'opacity-1 translate-y-0' : 'opacity-0 translate-y-6'}
            transform transition delay-1000 duration-1000 ease-in-out
          `}
        >
          <div className="grid grid-cols-1 gap-3">
            <label
              htmlFor="name"
              className="text-sm uppercase tracking-widest font-medium text-stone-400"
            >
              Name
            </label>
            <input
              type="text"
              required
              placeholder="Complete your name here"
              className="w-full p-4 bg-stone-800/80 backdrop-blur-sm text-white/90 rounded-lg border border-stone-700/60 font-light text-lg"
            />
          </div>
          <div className="grid grid-cols-1 gap-3">
            <label
              htmlFor="email"
              className="text-sm uppercase tracking-widest font-medium text-stone-400"
            >
              Email
            </label>
            <input
              type="email"
              required
              placeholder="Complete your email here"
              className="w-full p-4 bg-stone-800/80 backdrop-blur-sm text-white/90 rounded-lg border border-stone-700/60 font-light text-lg"
            />
          </div>
          <div className="grid grid-cols-1 gap-3">
            <label
              htmlFor="message"
              className="text-sm uppercase tracking-widest font-medium text-stone-400"
            >
              Message
            </label>
            <textarea
              required
              placeholder="Type your message here"
              className="w-full p-4 bg-stone-800/80 backdrop-blur-sm text-white/90 rounded-lg border border-stone-700/60 font-light text-lg resize-none h-32"
            />
          </div>
          <div>
            <button
              type="submit"
              className="font-serif text-white text-xl md:text-2xl underline decoration-stone-600 underline-offset-8 hover:no-underline decoration-1"
            >
              Submit
            </button>
          </div>
        </form>
        {/* Mobile social networks & Copyright */}
        <div className="block md:hidden">
          <ol className="flex gap-2 mb-3">
            <li>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-600 w-8 h-8 rounded-full flex items-center justify-center transition ease-in-out duration-300 hover:opacity-70"
              >
                <svg fill="none" height="14" viewBox="0 0 8 14" width="8" xmlns="http://www.w3.org/2000/svg">
                  <path d="m5.21166 7.90915h1.51515l.60606-2.42424h-2.12121v-1.21212c0-.62425 0-1.21212 1.21212-1.21212h.90909v-2.03637c-.19757-.026059-.94363-.084847-1.73151-.084847-1.64546 0-2.81394 1.004247-2.81394 2.848487v1.69697h-1.818182v2.42424h1.818182v5.15155h2.42424z" fill="#fff" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-600 w-8 h-8 rounded-full flex items-center justify-center transition ease-in-out duration-300 hover:opacity-70"
              >
                <svg fill="none" height="12" viewBox="0 0 12 12" width="12" xmlns="http://www.w3.org/2000/svg">
                  <path d="m6.90185 5.10903 4.23875-4.927271h-1.0048l-3.68062 4.278181-2.93939-4.278788h-3.390302l4.444242 6.470298-4.444242 5.16665h1.004242l3.88667-4.51816 3.10485 4.51816h3.39025l-4.61025-6.70907zm-1.37576 1.59939-.4509-.64424-3.58364-5.126058h1.54303l2.89212 4.136358.4503.64425 3.7594 5.37757h-1.54303z" fill="#fff"/>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-600 w-8 h-8 rounded-full flex items-center justify-center transition ease-in-out duration-300 hover:opacity-70"
              >
                <svg fill="none" height="12" viewBox="0 0 12 12" width="12" xmlns="http://www.w3.org/2000/svg">
                  <path d="m2.56975 1.75814c-.00016.32147-.12802.62972-.35545.85692s-.5358.35475-.85728.35459c-.32147-.00016-.629715-.12802-.856918-.35545-.227204-.22743-.354755-.5358-.354594-.85727.000161-.32148.12802-.62972.355451-.856926.22743-.227203.535801-.354754.857281-.354594.32147.000161.62971.12802.85692.355451.2272.227429.35475.535799.35459.857279zm.03636 2.10909h-2.424238v7.58787h2.424238zm3.83031 0h-2.41212v7.58787h2.38787v-3.98181c0-2.21818 2.89091-2.42424 2.89091 0v3.98181h2.39392v-4.80605c0-3.7394-4.27876-3.6-5.28483-1.76364z" fill="#fff"/>
                </svg>
              </a>
            </li>
          </ol>
          <p className="text-sm uppercase tracking-widest font-medium text-stone-400">
            Copyright &copy; {new Date().getFullYear()} Delta Bridge Partners.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;