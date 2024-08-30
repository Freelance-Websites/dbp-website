import ReactMarkdown from 'react-markdown';
import { useInView } from "react-intersection-observer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const myForm = event.target as HTMLFormElement;
    const formData = new FormData(myForm);
    const formDataString = new URLSearchParams(formData as any).toString();

    await fetch("/__forms.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formDataString,
    })
      .then(() => toast("Mensaje enviado correctamente. Nos contactaremos a la brevedad.", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        type: "success",
      
      }))
      .catch((error) => alert(error));
  };

  return (
    <section
      className="px-4 lg:px-0 relative"
      style={{
        background: `url(${image}) no-repeat center center/cover`,
      }}
      id={id}
    >
      <article
        className="container mx-auto py-12 md:py-16 lg:py-24 xl:py-32 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-32"
        ref={ref}
      >
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
            <svg fill="none" height="18" viewBox="0 0 80 18" width="80" xmlns="http://www.w3.org/2000/svg" className="fill-stone-400 mb-2">
              <g>
                <path clipRule="evenodd" d="m69.0479 0 10.354 17.9337-8.4823-.0133-6.0957-10.59869zm-5.2873 9.00002 5.154 8.92698-10.3023-.0033z" fillRule="evenodd" className="fill-stone-400" />
                <path d="m44.5493 3.56808v-3.524684h15.1772v3.524684h-5.4448v14.43192h-4.2788v-14.43192z" />
                <path d="m33.2739 18v-17.956604h4.3401v14.431904h7.4703v3.5247z" />
                <path d="m18.0356 18v-17.956604h12.5206v3.524684h-8.1805v3.68251h7.5404v3.53341h-7.5404v3.6913h8.1805v3.5247z" />
                <path d="m6.63728 18h-6.63728v-17.956604h6.62851c1.82956 0 3.40489.359483 4.72589 1.078444 1.3269.71312 2.3498 1.74189 3.0687 3.0863.719 1.33856 1.0785 2.94015 1.0785 4.80479 0 1.87047-.3595 3.47797-1.0785 4.82237-.7131 1.3444-1.7331 2.3761-3.0599 3.095-1.3269.7131-2.9022 1.0697-4.72592 1.0697zm-2.29718-3.7h2.13059c1.00538 0 1.85587-.1696 2.55145-.5086.70143-.3448 1.23046-.9031 1.58696-1.6746.3624-.7775.5436-1.8121.5436-3.10387 0-1.2918-.1812-2.32056-.5436-3.08629-.3624-.77157-.89722-1.32687-1.6045-1.6659-.70143-.34487-1.56652-.5173-2.59529-.5173h-2.06921z" />
              </g>
            </svg>
            <p className="text-sm uppercase tracking-widest font-medium text-stone-400">
              Copyright &copy; {new Date().getFullYear()} Delta Bridge Partners.
            </p>
          </li>
        </ul>
        <form
          data-netlify="true"
          name="contact"
          className={`
            grid grid-cols-1 gap-6
            ${inView ? 'opacity-1 translate-y-0' : 'opacity-0 translate-y-6'}
            transform transition delay-1000 duration-1000 ease-in-out
          `}
          method="POST"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          {/* Honeypot */}
          <input type="hidden" name="form-name" value="contact" />
          <input name="bot-field" className="hidden" />
          {/* Rest of the fiels */}
          <div className="grid grid-cols-1 gap-3">
            <label
              htmlFor="name"
              className="text-sm uppercase tracking-widest font-medium text-stone-400"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
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
              name="email"
              id="email"
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
              name="message"
              id="message"
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
          <svg fill="none" height="18" viewBox="0 0 80 18" width="80" xmlns="http://www.w3.org/2000/svg" className="fill-stone-400 mb-2">
            <g>
              <path clipRule="evenodd" d="m69.0479 0 10.354 17.9337-8.4823-.0133-6.0957-10.59869zm-5.2873 9.00002 5.154 8.92698-10.3023-.0033z" fillRule="evenodd" className="fill-stone-400" />
              <path d="m44.5493 3.56808v-3.524684h15.1772v3.524684h-5.4448v14.43192h-4.2788v-14.43192z" />
              <path d="m33.2739 18v-17.956604h4.3401v14.431904h7.4703v3.5247z" />
              <path d="m18.0356 18v-17.956604h12.5206v3.524684h-8.1805v3.68251h7.5404v3.53341h-7.5404v3.6913h8.1805v3.5247z" />
              <path d="m6.63728 18h-6.63728v-17.956604h6.62851c1.82956 0 3.40489.359483 4.72589 1.078444 1.3269.71312 2.3498 1.74189 3.0687 3.0863.719 1.33856 1.0785 2.94015 1.0785 4.80479 0 1.87047-.3595 3.47797-1.0785 4.82237-.7131 1.3444-1.7331 2.3761-3.0599 3.095-1.3269.7131-2.9022 1.0697-4.72592 1.0697zm-2.29718-3.7h2.13059c1.00538 0 1.85587-.1696 2.55145-.5086.70143-.3448 1.23046-.9031 1.58696-1.6746.3624-.7775.5436-1.8121.5436-3.10387 0-1.2918-.1812-2.32056-.5436-3.08629-.3624-.77157-.89722-1.32687-1.6045-1.6659-.70143-.34487-1.56652-.5173-2.59529-.5173h-2.06921z" />
            </g>
          </svg>
          <p className="text-sm uppercase tracking-widest font-medium text-stone-400">
            Copyright &copy; {new Date().getFullYear()} Delta Bridge Partners.
          </p>
        </div>
      </article>
      <ToastContainer autoClose={5000} />
    </section>
  );
};

export default Contact;