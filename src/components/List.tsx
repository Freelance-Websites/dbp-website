interface Item {
  title: string;
  content: string;
}

const List = ({
  title,
  content,
  items
}: {
  title: string;
  content: string;
  items: Array<Item>;
}) => {
  return (
    <section
      className="bg-stone-100 px-4 lg:px-0"
    >
      <div className="container mx-auto py-12 md:py-16 lg:py-24 xl:py-32 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ul>
          <li>
            <h2 className="text-stone-800 text-2xl md:text-4xl pb-8 lg:pb-12">{title}</h2>
            <p className="text-stone-500 font-light text-lg md:text-2xl md:leading-relaxed">{content}</p>
          </li>
        </ul>
        {items.length > 0 &&
          <ol className="grid gap-6 md:gap-8 lg:gap-12 xl:gap-16">
            {items.map((item, index) =>
              <li
                key={index}
                className="grid gap-4 md:gap-6 lg:gap-10"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-white rounded-full h-10 w-10 md:w-12 md:h-12 flex items-center justify-center">
                    <span className="text-indigo-600 text-xl md:text-2xl">{index + 1}</span>
                  </div>
                  <h3 className="text-stone-800 text-sm uppercase tracking-widest font-medium">{item.title}</h3>
                </div>
                <p className="text-stone-500 font-light text-lg md:text-2xl md:leading-relaxed">{item.content}</p>
              </li>
            )}
          </ol>
        }
      </div>
    </section>
  );
};

export default List;