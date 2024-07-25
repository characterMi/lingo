import { FeedWrapper } from "@/components/FeedWrapper";
import StickyWrapperLoader from "@/components/loader/StickyWrapperLoader";
import TitleLoader from "@/components/loader/TitleLoader";
import { StickyWrapper } from "@/components/StickyWrapper";

const Loading = () => {
  return (
    <div className="flex gap-12 px-6">
      <FeedWrapper>
        <TitleLoader />

        <div className="mt-10 w-full flex flex-col gap-y-8">
          {[...Array(2)].map((_, i) => (
            <div
              className="w-full flex items-center justify-between flex-wrap"
              key={i}
            >
              <div className="flex items-center gap-x-2">
                <div className="size-12 sm:size-20 rounded-full skeleton" />
                <div className="w-24 sm:w-32 h-8 rounded-md skeleton" />
              </div>

              <div className="w-28 h-10 rounded-lg skeleton" />
            </div>
          ))}
        </div>
      </FeedWrapper>
      <StickyWrapper>
        <StickyWrapperLoader />
      </StickyWrapper>
    </div>
  );
};
export default Loading;
