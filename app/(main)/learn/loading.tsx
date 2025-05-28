import { FeedWrapper } from "@/components/FeedWrapper";
import { StickyWrapper } from "@/components/StickyWrapper";
import StickyWrapperLoader from "@/components/loader/StickyWrapperLoader";

const Loading = () => {
  return (
    <div className="flex gap-12 px-6">
      <p className="sr-only">The page is loading...</p>
      <FeedWrapper aria-hidden>
        <div className="w-full h-24 flex justify-between items-center pb-4">
          <div />
          <div className="w-24 h-10 skeleton rounded-md" />
          <div />
        </div>

        <div className="w-full flex flex-col">
          <div className="w-full h-36 skeleton rounded-lg" />

          <div className="w-full flex flex-col items-center justify-center">
            {[...Array(5)].map((_, i) => {
              const cycleLength = 5;
              const cycleIndex = i % cycleLength;

              let indentationLevel;

              if (cycleIndex <= 0) {
                indentationLevel = cycleIndex;
              } else if (cycleIndex <= 1) {
                indentationLevel = 1.8 - cycleIndex;
              } else if (cycleIndex <= 2) {
                indentationLevel = 3.2 - cycleIndex;
              } else if (cycleIndex <= 3) {
                indentationLevel = 3.8 - cycleIndex;
              } else if (cycleIndex <= 4) {
                indentationLevel = 4 - cycleIndex;
              } else {
                indentationLevel = cycleIndex - 8;
              }

              const rightPosition = indentationLevel * 50;

              return (
                <div
                  className="size-20 rounded-full skeleton relative"
                  style={{
                    right: rightPosition + "px",
                    marginTop: 20,
                  }}
                  key={i}
                />
              );
            })}
          </div>
        </div>
      </FeedWrapper>
      <StickyWrapper aria-hidden>
        <StickyWrapperLoader />
      </StickyWrapper>
    </div>
  );
};
export default Loading;
