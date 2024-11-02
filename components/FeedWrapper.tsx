import { ComponentProps } from "react";

type Props = {
  children: React.ReactNode;
} & ComponentProps<"div">;

export const FeedWrapper = ({ children, ...props }: Props) => {
  return (
    <div className="flex-1 relative top-0 pb-10" {...props}>
      {children}
    </div>
  );
};
