import { FeedWrapper } from "@/components/FeedWrapper";
import { StickyWrapper } from "@/components/StickyWrapper";
import { Navbar } from "./Navbar";

const LearnPage = () => {
  return (
    // add flex-row-reerse
    <div className="flex gap-12 px-6">
      <FeedWrapper>
        <Navbar title="Spanish" />
      </FeedWrapper>
      <StickyWrapper>Sticky Wrapper</StickyWrapper>
    </div>
  );
};
export default LearnPage;
