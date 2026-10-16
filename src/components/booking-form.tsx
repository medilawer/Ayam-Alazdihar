'use client';
import {useState} from 'react';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {useLocale,useTranslations} from 'next-intl';
import {Check,Copy,MessageCircle,ShieldCheck} from 'lucide-react';
import {bookingSchema,formatBooking,type BookingValues} from '@/lib/booking';
import {vehicles} from '@/lib/data';
import {business,whatsappUrl} from '@/lib/config';
import {Button} from '@/components/ui/button';
import type {BookingInitial} from './booking-context';
export function BookingForm({initial={}}:{initial?:BookingInitial}) {
 const t=useTranslations();const locale=useLocale() as 'ar'|'en';const [message,setMessage]=useState('');const [copied,setCopied]=useState(false);
 const {register,handleSubmit,watch,formState:{errors}}=useForm<BookingValues>({resolver:zodResolver(bookingSchema),defaultValues:{name:'',country:'966',phone:'',service:'airport',vehicle:'s-class',pickup:'',destination:'',date:'',time:'',hours:3,childSeat:false,meetGreet:true,flight:'',requests:'',...initial}});
 const service=watch('service');
 const error=(field:keyof BookingValues)=>errors[field]?<span role="alert" className="field-error">{t(['nameError','phoneError','pickupError','destinationError','dateError','futureError','required'].includes(String(errors[field]?.message))?String(errors[field]?.message):'required')}</span>:null;
 const submit=(values:BookingValues)=>{const v=vehicles.find(v=>v.id===values.vehicle)!;setMessage(formatBooking(values,locale==='ar'?v.ar:v.name,locale));};
 const copy=async()=>{try{await navigator.clipboard.writeText(message);setCopied(true);setTimeout(()=>setCopied(false),2500);}catch{setCopied(false);}};
 return <form onSubmit={handleSubmit(submit)} className="booking-form" noValidate>
  <div className="form-grid">
   <label className="field">{t('name')}<input autoComplete="name" placeholder={t('namePlaceholder')} aria-invalid={!!errors.name} {...register('name')}/>{error('name')}</label>
   <div className="field"><label htmlFor="booking-phone">{t('phone')}</label><div className="phone-input" dir="ltr"><select aria-label={locale==='ar'?'رمز الدولة':'Country code'} {...register('country')}><option value="966">🇸🇦 +966</option><option value="971">🇦🇪 +971</option><option value="973">🇧🇭 +973</option><option value="974">🇶🇦 +974</option><option value="965">🇰🇼 +965</option><option value="968">🇴🇲 +968</option><option value="1">🇺🇸 +1</option><option value="44">🇬🇧 +44</option></select><input id="booking-phone" type="tel" autoComplete="tel-national" placeholder="5X XXX XXXX" aria-invalid={!!errors.phone} {...register('phone')}/></div>{error('phone')}</div>
   <label className="field">{t('serviceType')}<select {...register('service')}><option value="airport">{t('airport')}</option><option value="hourly">{t('hourly')}</option><option value="intercity">{t('intercity')}</option></select></label>
   <label className="field">{t('vehicle')}<select {...register('vehicle')}>{vehicles.map(v=><option key={v.id} value={v.id}>{locale==='ar'?v.ar:v.name}</option>)}</select></label>
   <label className="field">{t('pickup')}<input placeholder={t('pickupPlaceholder')} aria-invalid={!!errors.pickup} {...register('pickup')}/>{error('pickup')}</label>
   {service!=='hourly'?<label className="field">{t('destination')}<input placeholder={t('destinationPlaceholder')} aria-invalid={!!errors.destination} {...register('destination')}/>{error('destination')}</label>:<label className="field">{t('hours')}<input type="number" min="3" max="24" {...register('hours',{valueAsNumber:true})}/>{error('hours')}</label>}
   <label className="field">{t('date')}<input type="date" min={new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Riyadh'}).format(new Date())} aria-invalid={!!errors.date} {...register('date')}/>{error('date')}</label>
   <label className="field">{t('time')}<input type="time" aria-invalid={!!errors.time} {...register('time')}/>{error('time')}</label>
  </div>
  <p className="form-note">{t('timezone')}</p>
  {service==='airport' && <label className="field">{t('flight')}<input dir="ltr" placeholder="SV 1024" {...register('flight')}/></label>}
  <fieldset className="extras"><legend>{t('extras')}</legend><label><input type="checkbox" {...register('childSeat')}/>{t('childSeat')}</label><label><input type="checkbox" {...register('meetGreet')}/>{t('meetGreet')}</label></fieldset>
  <label className="field">{t('requests')}<textarea rows={3} placeholder={t('requestsPlaceholder')} {...register('requests')}/>{error('requests')}</label>
  {!business.phone && <p className="config-note">{t('notConfigured')}</p>}
  <Button type="submit" className="w-full"><MessageCircle/>{business.phone?t('prepareBooking'):t('prepareBooking')}</Button>
  <p className="privacy-note"><ShieldCheck className="size-4 shrink-0"/>{t('privacy')}</p>
  {message && <div className="booking-preview" role="status"><h3>{t('requestReady')}</h3><p>{t('requestReadyDesc')}</p><details><summary>{t('preview')}</summary><pre>{message}</pre></details><div className="flex flex-wrap gap-3">{whatsappUrl(message) && <Button asChild><a href={whatsappUrl(message)!} target="_blank" rel="noopener noreferrer"><MessageCircle/>{t('sendBooking')}</a></Button>}<Button type="button" variant="outline" onClick={copy}>{copied?<Check/>:<Copy/>}{copied?t('copied'):t('copyRequest')}</Button></div></div>}
 </form>;
}
