'use client';
import {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {useLocale,useTranslations} from 'next-intl';
import {ArrowUpRight,BriefcaseBusiness,CarFront,Check,ChevronRight,Droplets,Plane,Users,Wifi} from 'lucide-react';
import {vehicles,type Vehicle,type VehicleCategory} from '@/lib/data';
import {useBooking} from './booking-context';
import {Button} from './ui/button';
import {Dialog,DialogContent,DialogTitle,DialogDescription} from './ui/dialog';
export function Fleet({full=false}:{full?:boolean}){
 const t=useTranslations();const locale=useLocale();const {openBooking}=useBooking();const [filter,setFilter]=useState<VehicleCategory|'all'>('all');const [selected,setSelected]=useState<Vehicle|null>(null);
 const items=(full?vehicles:vehicles.slice(0,3)).filter(v=>filter==='all'||v.category===filter);
 return <section className={`fleet-section section ${full?'fleet-page':''}`} id="fleet"><div className="container">
  {!full&&<div className="section-header"><div><span className="eyebrow">{t('fleetEyebrow')}</span><h2>{t('fleetTitle')}</h2><p>{t('fleetDesc')}</p></div><Link className="text-link" href="/fleet">{t('viewFleet')}<ArrowUpRight className="directional size-4"/></Link></div>}
  {full&&<div className="fleet-filters" role="group" aria-label={t('fleet')}>{(['all','sedan','suv','limousine','group'] as const).map(value=><button key={value} aria-pressed={filter===value} className={filter===value?'selected':''} onClick={()=>setFilter(value)}>{t(value)}</button>)}</div>}
  <div className="fleet-grid">{items.map(v=><article className="vehicle-card" key={v.id}><div className="vehicle-image"><span className={`vehicle-tag ${v.tag==='popular'?'tag-gold':''}`}>{t(v.tag==='group'?'group':v.tag)}</span><Image src={v.image} alt={`${locale==='ar'?v.ar:v.name} — ${t('photoNote')}`} width={900} height={450} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"/><button className="vehicle-open" aria-label={`${t('details')} ${locale==='ar'?v.ar:v.name}`} onClick={()=>setSelected(v)}><ArrowUpRight className="directional size-4"/></button></div><div className="vehicle-info"><span className="vehicle-category">{t(v.category)}</span><h3>{locale==='ar'?v.ar:v.name}</h3><div className="vehicle-specs"><span><Users size={15}/>{v.passengers} {t('passengers')}</span><span><BriefcaseBusiness size={15}/>{v.luggage} {t('bags')}</span><span><Wifi size={15}/>Wi-Fi</span></div><div className="vehicle-bottom"><button className="text-link" onClick={()=>setSelected(v)}>{t('details')}<ChevronRight className="directional size-4"/></button></div></div></article>)}</div>
  <p className="fine-print">{t('sampleImages')}</p>
 </div><Dialog open={!!selected} onOpenChange={open=>{if(!open)setSelected(null);}}><DialogContent closeLabel={t('close')} className="vehicle-dialog">{selected&&<><div className="vehicle-modal-image"><Image src={selected.image} alt={locale==='ar'?selected.ar:selected.name} width={1000} height={500}/></div><span className="eyebrow">{t(selected.category)}</span><DialogTitle className="dialog-title">{locale==='ar'?selected.ar:selected.name}</DialogTitle><DialogDescription className="dialog-description">{t('availability')}</DialogDescription><div className="modal-specs"><span><Users/>{selected.passengers} {t('passengers')}</span><span><BriefcaseBusiness/>{selected.luggage} {t('bags')}</span></div><h3 className="amenities-title">{t('amenities')}</h3><div className="amenities">{[[Wifi,'wifi'],[Droplets,'water'],[CarFront,'leather'],[Plane,'monitor']].map(([Icon,key])=>{const I=Icon as typeof Check;return <span key={String(key)}><I size={18}/>{t(key as string)}</span>;})}</div><Button className="w-full" onClick={()=>{const v=selected;setSelected(null);openBooking({vehicle:v.id});}}>{t('bookVehicle')}<ArrowUpRight className="directional"/></Button></>}</DialogContent></Dialog></section>;
}
