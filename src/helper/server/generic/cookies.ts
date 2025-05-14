import { Settings } from "@/config";
import { cookies } from "next/headers";

type CookiesKeys = keyof typeof Settings['Cookies']
type CookiesValues = typeof Settings['Cookies'][CookiesKeys]

const getCookies = async (key: CookiesValues): Promise<CookiesValues | undefined> => {
  const cookiesList = await cookies()
  return cookiesList.get(key)?.value
}

export { getCookies }