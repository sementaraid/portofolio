import type { Theme } from "@anantara/theme/types"
import { getCookies } from "@/helper/server/generic/cookies"
import { Settings } from "@/config"

const getSanitizedTheme = async (): Promise<Theme> => {
  const cookie = await getCookies(Settings.Cookies.Theme)
  if (cookie !== 'light' && cookie !== 'dark' && cookie !== 'system') return 'light'
  return cookie
}

export { getSanitizedTheme }