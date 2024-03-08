import { ViewLogin } from "@/module";
import { cookies } from "next/headers";
import _ from "lodash"
import { pwd_key_config } from "@/module/bin/val";
import { unsealData } from "iron-session";
import { redirect } from "next/navigation";

export default async function Page() {
  const c = cookies().get("_cookiesDisplay");
  if (c && !_.isUndefined(c) && c.value != "" && !_.isEmpty(c.value)) {
    const dataCookies = await unsealData(c!.value, {
      password: pwd_key_config as string,
    });
    if (!_.isEmpty(dataCookies)) return redirect("/ninox");
  }
  return <ViewLogin />;
}
