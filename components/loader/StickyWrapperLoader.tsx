import QuestsLoader from "./QuestsLoader";

const StickyWrapperLoader = () => (
  <>
    <div className="w-full flex justify-between items-center">
      <div className="w-12 h-8 rounded-md skeleton" />
      <div className="w-12 h-8 rounded-md skeleton" />
      <div className="w-12 h-8 rounded-md skeleton" />
    </div>

    <div className="w-full flex flex-col gap-y-4 mt-12">
      <div className="w-36 h-10 skeleton rounded-md" />
      <div className="w-full h-8 skeleton rounded-md" />
      <div className="w-full h-14 skeleton rounded-lg" />
    </div>

    <div className="mt-16 flex flex-col gap-y-8 w-full">
      <div className="w-full flex items-center justify-between">
        <div className="w-20 h-10 rounded-md skeleton" />
        <div className="w-20 h-10 rounded-md skeleton" />
      </div>

      <QuestsLoader />
    </div>
  </>
);

export default StickyWrapperLoader;
