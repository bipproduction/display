import { sealData } from "iron-session"

export default async function funLogin({ username, password }: { username: string, password: string }) {
   if (username == 'display_BIP' && password == '1UntukSemua') {
      // const tkn = await sealData(username, { password: pwd_key_config as string })
      return true
   } else {
      return false
   }
}