import { FeedWrapper } from "@/components/FeedWrapper";
import QuestsLoader from "@/components/loader/QuestsLoader";
import StickyWrapperLoader from "@/components/loader/StickyWrapperLoader";
import TitleLoader from "@/components/loader/TitleLoader";
import { StickyWrapper } from "@/components/StickyWrapper";

const Loading = () => {
  return (
    <div className="flex gap-12 px-6">
      <p className="absolute opacity-0">The page is loading...</p>
      <FeedWrapper aria-hidden>
        <TitleLoader />

        <div className="w-full mt-10">
          <QuestsLoader />
        </div>
      </FeedWrapper>
      <StickyWrapper aria-hidden>
        <StickyWrapperLoader />
      </StickyWrapper>
    </div>
  );
};
export default Loading;
