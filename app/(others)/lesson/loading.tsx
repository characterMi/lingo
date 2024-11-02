const Loading = () => (
  <section
    className="flex flex-col h-full w-full"
    aria-label="The page is loading..."
  >
    <div
      className="w-full h-16 flex items-center gap-x-7 max-w-[1140px] mx-auto lg:pt-[50px] pt-[20px] px-10"
      aria-hidden
    >
      <div className="w-full h-6 rounded-full skeleton" />
      <div className="w-20 h-8 rounded-md skeleton" />
    </div>

    <div className="flex-1" aria-hidden>
      <div className="h-full flex items-center justify-center">
        <div className="lg:min-h-[350px] lg:w-[600px] w-full px-6 lg:px-0 flex flex-col gap-y-12">
          <div className="w-full sm:w-1/2 mx-auto lg:mx-0 h-10 rounded-lg skeleton" />

          <div className="grid gap-2 grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(0,1fr))]">
            {[...Array(3)].map((_, i) => (
              <div
                className="w-full h-40 lg:h-48 rounded-lg skeleton"
                key={i}
              />
            ))}
          </div>
        </div>
      </div>
    </div>

    <div
      className="lg:h-[140px] h-[100px] border-t-2 mt-2 px-4 py-8 flex justify-end items-center max-w-[1140px] mx-auto w-full"
      aria-hidden
    >
      <div className="w-32 h-12 rounded-md skeleton" />
    </div>
  </section>
);

export default Loading;
