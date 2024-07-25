import { FeedWrapper } from "@/components/FeedWrapper";
import QuestsLoader from "@/components/loader/QuestsLoader";
import StickyWrapperLoader from "@/components/loader/StickyWrapperLoader";
import TitleLoader from "@/components/loader/TitleLoader";
import { StickyWrapper } from "@/components/StickyWrapper";

const Loading = () => {
  return (
    <div className="flex gap-12 px-6">
      <FeedWrapper>
        <TitleLoader />

        <div className="w-full mt-10">
          <QuestsLoader />
        </div>
      </FeedWrapper>
      <StickyWrapper>
        <StickyWrapperLoader />
      </StickyWrapper>
    </div>
  );
};
export default Loading;
