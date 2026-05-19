export type SocialLink = {
  label: string;
  url?: string;
};

export type SiteSettings = {
  organizationName: string;
  organizationNameEn?: string;
  siteTitle?: string;
  siteDescription?: string;
  institutionalDescription?: string;
  footerCopy?: string;
  participateNavLabel?: string;
  socialLinks?: SocialLink[];
  pressEmail?: string;
  officeEmail?: string;
};
