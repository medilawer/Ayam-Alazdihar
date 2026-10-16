'use server';
import {cookies} from 'next/headers';
export async function setLocale(locale:'ar'|'en') {
 if(locale!=='ar' && locale!=='en') return;
 (await cookies()).set('AYAM_LOCALE',locale,{path:'/',sameSite:'lax',maxAge:31536000});
}
