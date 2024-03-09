import { LayoutView } from "@/module";
import { pwd_key_config } from "@/module/bin/val";
import _ from "lodash";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { unsealData } from "iron-session";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const c = cookies().get("_cookiesDisplay");
  if (!c || _.isUndefined(c) || !c.value || _.isEmpty(c.value))
    return redirect("/");
  const dataCookies = await unsealData(c!.value, {
    password: pwd_key_config as string,
  });
  if (_.isEmpty(dataCookies)) return redirect("/");
  return (
    <>
      <LayoutView>{children}</LayoutView>
    </>
  );
}
