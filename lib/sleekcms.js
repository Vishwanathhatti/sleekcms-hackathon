import { createClient } from '@sleekcms/client';

export const sleekClient = createClient({
  siteToken: process.env.NEXT_PUBLIC_SLEEKCMS_PUBLIC_TOKEN, // from https://pub.sleekcms.com/2azdp/latest
  env: 'latest',      // environment alias
  cdn: true,          // use CDN
});
