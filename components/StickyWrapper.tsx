import { ComponentProps } from "react";

type Props = {
  children: React.ReactNode;
} & ComponentProps<"div">;

export const StickyWrapper = ({ children, ...props }: Props) => {
  return (
    <div
      className="hidden sticky self-end bottom-6 lg:block w-[368px]"
      {...props}
    >
      <div className="min-h-[calc(100vh-48px)] sticky top-6 flex flex-col gap-y-4">
        {children}
      </div>
    </div>
  );
};
