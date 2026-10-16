import {getRequestConfig} from 'next-intl/server';
import {cookies} from 'next/headers';
import {messages} from '@/lib/messages';
export default getRequestConfig(async()=>{
 const locale=(await cookies()).get('AYAM_LOCALE')?.value==='en'?'en':'ar';
 return {locale,messages:messages[locale],timeZone:'Asia/Riyadh'};
});
