import { imageQuery } from './common'

export const GLOBAL_QUERY = `*[_type == "globalSettings"][0] {
  "siteTitle": title,
  "siteDescription": description,
  footerCopy,
  "favicon": favicon.asset->url,
  socials,
  ${imageQuery('logo')},
  "navigation": *[_type == "navigation" && title == "Main Navigation"][0].items[]
}`
