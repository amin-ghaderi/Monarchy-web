import { sanityClient, sanityConfigured } from "./client";
import { siteSettingsQuery } from "./queries";

export async function fetchSiteSettings() {
  if (!sanityConfigured) {
    return null;
  }

  return sanityClient.fetch(siteSettingsQuery);
}
