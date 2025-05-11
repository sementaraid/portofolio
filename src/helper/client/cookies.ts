'use client';

import Cookies from "js-cookie";
import { Settings } from "@/config";

type SetCookiesKey = typeof Settings['Cookies'][keyof typeof Settings['Cookies']]
type GetCookiesReturnedValue = string | undefined
const setCookies = (
  key: SetCookiesKey,
  value: string,
  options?: Cookies.CookieAttributes
): void => {
  Cookies.set(
    key,
    value,
    options
  )
}

const getCookies = (
  key: SetCookiesKey,
): GetCookiesReturnedValue => {
  return Cookies.get(key)
}

export { setCookies, getCookies }