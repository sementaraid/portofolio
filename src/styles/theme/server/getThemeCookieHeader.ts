import { Settings } from "@/config";
import { cookies } from "next/headers";

type GetCookiesReturnedValue = ThemeInitialState | undefined

const getThemeCookieHeader = async (): Promise<GetCookiesReturnedValue> => {
  const cookiesList = await cookies()
  return cookiesList.get(Settings.Cookies.Theme)?.value as GetCookiesReturnedValue
}

export { getThemeCookieHeader }