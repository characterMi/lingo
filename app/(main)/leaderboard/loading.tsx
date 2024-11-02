import { FeedWrapper } from "@/components/FeedWrapper";
import { StickyWrapper } from "@/components/StickyWrapper";
import StickyWrapperLoader from "@/components/loader/StickyWrapperLoader";
import TitleLoader from "@/components/loader/TitleLoader";

const Loading = () => {
  return (
    <div className="flex gap-12 px-6" aria-label="The page is loading...">
      <FeedWrapper aria-hidden>
        <TitleLoader />

        <div className="flex flex-col gap-y-4 w-full mt-10">
          {[...Array(10)].map((_, i) => (
            <div className="w-full flex justify-between items-center" key={i}>
              <div className="flex items-center gap-x-2">
                <div className="size-10 rounded-full skeleton" />
                <div className="w-32 h-6 rounded-md skeleton" />
              </div>

              <div className="w-14 h-6 rounded-md skeleton" />
            </div>
          ))}
        </div>
      </FeedWrapper>
      <StickyWrapper aria-hidden>
        <StickyWrapperLoader />
      </StickyWrapper>
    </div>
  );
};
export default Loading;
