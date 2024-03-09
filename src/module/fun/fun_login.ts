'use server'
import { sealData } from "iron-session"
import { pwd_key_config } from "../bin/val"
import { cookies } from "next/headers"

export default async function funLogin({ username, password }: { username: string, password: string }) {
   if (username == 'display_BIP' && password == '1UntukSemua') {
      const tkn = await sealData(username, { password: pwd_key_config as string })
      cookies().set(
         {
            name: "_cookiesDisplay",
            value: tkn
         }
      )
      return true
   } else {
      return false
   }
}