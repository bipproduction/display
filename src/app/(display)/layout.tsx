import { LayoutView } from "@/module";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <LayoutView>{children}</LayoutView>
    </>
  );
}
