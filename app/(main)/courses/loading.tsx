const Loading = () => (
  <div className="h-full max-w-[912px] px-3 mx-auto">
    <p className="absolute opacity-0">The page is loading...</p>
    <div className="w-40 h-8 rounded-md skeleton" aria-hidden />

    <section
      className="mt-10 grid grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4"
      aria-hidden
    >
      {[...Array(5)].map((_, i) => (
        <div
          className="w-full h-full min-h-[150px] lg:min-h-[217px] lg:min-w-[200px] rounded-lg skeleton"
          key={i}
        />
      ))}
    </section>
  </div>
);

export default Loading;
