const QuestsLoader = () => (
  <div className="w-full flex flex-col gap-y-6">
    {[...Array(5)].map((_, i) => (
      <div className="flex w-full items-center gap-x-4" key={i}>
        <div className="w-8 h-10 rounded-md skeleton" />

        <div className="flex flex-col gap-y-1 w-full">
          <div className="w-36 h-6 rounded-md skeleton" />
          <div className="w-full h-4 rounded-full skeleton" />
        </div>
      </div>
    ))}
  </div>
);

export default QuestsLoader;
