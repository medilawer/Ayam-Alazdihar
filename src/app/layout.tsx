import type {Metadata,Viewport} from 'next';
import localFont from 'next/font/local';
const jakarta=localFont({src:[{path:'../../public/fonts/plus-jakarta-sans-400.ttf',weight:'400'},{path:'../../public/fonts/plus-jakarta-sans-500.ttf',weight:'500'},{path:'../../public/fonts/plus-jakarta-sans-600.ttf',weight:'600'},{path:'../../public/fonts/plus-jakarta-sans-700.ttf',weight:'700'}],variable:'--font-jakarta',display:'swap'});
const arabic=localFont({src:[{path:'../../public/fonts/tajawal-400.ttf',weight:'400'},{path:'../../public/fonts/tajawal-500.ttf',weight:'500'},{path:'../../public/fonts/tajawal-700.ttf',weight:'700'}],variable:'--font-arabic',display:'swap'});
import {cookies} from 'next/headers';
import {NextIntlClientProvider} from 'next-intl';
import {messages} from '@/lib/messages';
import {business} from '@/lib/config';
import {SiteShell} from '@/components/site-shell';
import './globals.css';
export const viewport:Viewport={themeColor:'#0A192F'};
export async function generateMetadata(): Promise<Metadata> {
  const ar = (await cookies()).get('AYAM_LOCALE')?.value !== 'en';
  const title = ar ? `${business.nameAr} | نقل خاص من الرياض` : `${business.name} | Private Travel from Riyadh`;
  const description = ar
    ? 'شركة ايام الازدهار في حي العليا، الرياض. خطط لنقل المطارات ورحلات العمل وزيارات الحرمين والتنقل بين مدن المملكة.'
    : 'AYAM, ayam alazdihar Company, based in Olaya, Riyadh. Plan airport transfers, business travel, pilgrimage journeys, and private intercity transport.';
  return {
    metadataBase: new URL(business.siteUrl),
    title: {default: title, template: `%s | ${business.name}`},
    description,
    applicationName: business.name,
    openGraph: {
      type: 'website', siteName: business.name, title, description,
      locale: ar ? 'ar_SA' : 'en_GB',
      images: [{url: '/images/hero.webp', width: 1942, height: 809, alt: 'Illustrative premium vehicles for AYAM private travel'}],
    },
    twitter: {card: 'summary_large_image', title, description},
  };
}
export default async function RootLayout({children}:{children:React.ReactNode}){const locale=(await cookies()).get('AYAM_LOCALE')?.value==='en'?'en':'ar';const schema={'@context':'https://schema.org','@graph':[{'@type':'LocalBusiness','@id':`${business.siteUrl}/#business`,name:business.name,legalName:business.legalName,alternateName:business.nameAr,address:{'@type':'PostalAddress',streetAddress:business.address.streetAddress,addressLocality:business.address.city,addressCountry:business.address.country},url:business.siteUrl,image:`${business.siteUrl}/images/hero.webp`,...(business.phone?{telephone:`+${business.phone}`} :{}),...(business.email?{email:business.email}:{}),areaServed:['Saudi Arabia','Madinah','Riyadh','Jeddah','Dammam','Makkah','Bahrain','United Arab Emirates','Qatar','Kuwait'],currenciesAccepted:'SAR'},{'@type':'TaxiService',name:`${business.name} Chauffeur Service`,serviceType:'ChauffeurService',provider:{'@id':`${business.siteUrl}/#business`},areaServed:['Saudi Arabia','GCC'],description:'Private chauffeured airport transfers, executive travel, pilgrimage transport and GCC cross-border journeys.'}]};return <html lang={locale} dir={locale==='ar'?'rtl':'ltr'} className={`${jakarta.variable} ${arabic.variable}`}><body><a href="#main-content" className="skip-link">{locale==='ar'?'انتقل إلى المحتوى':'Skip to content'}</a><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,'\\u003c')}}/><NextIntlClientProvider locale={locale} messages={messages[locale]} timeZone="Asia/Riyadh"><SiteShell>{children}</SiteShell></NextIntlClientProvider></body></html>;}
