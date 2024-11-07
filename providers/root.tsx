import { ClerkProvider } from "@clerk/nextjs";

const Root = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <ClerkProvider
    appearance={{
      variables: {
        colorPrimary: "#16a34a",
      },
    }}
  >
    {children}
  </ClerkProvider>
);

export default Root;
