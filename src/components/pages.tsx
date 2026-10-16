'use client';
import {business} from '@/lib/config';
import {useTranslations} from 'next-intl';
import {Clock3,HeartHandshake,ShieldCheck,Sparkles} from 'lucide-react';
import {PageHero,JourneyCTA,Services,TrustStrip,Promise} from './sections';
import {ContactCards,CoverageMap} from './contact';
import {Fleet} from './fleet';
import {RouteEstimator} from './route-estimator';
import {BookingForm} from './booking-form';
import {WhatsAppButton} from './site-shell';
export function FleetPage(){return <><PageHero eyebrow="fleet" title="fleetPageTitle" description="fleetPageDesc"/><Fleet full/><JourneyCTA/></>;}
export function ServicesPage(){return <><PageHero eyebrow="services" title="serviceTitle" description="serviceDesc"/><Services full/><TrustStrip/><JourneyCTA/></>;}
export function RatesPage(){return <><PageHero eyebrow="rates" title="routeTitle" description="routeDesc"/><RouteEstimator full/><JourneyCTA/></>;}
export function ContactPage(){return <><PageHero eyebrow="contact" title="contactTitle" description="contactDesc"/><ContactCards/><CoverageMap/><JourneyCTA/></>;}
export function BookPage(){const t=useTranslations();return <><PageHero eyebrow="book" title="bookingTitle" description="bookingDesc"/><section className="section"><div className="container book-page-layout"><div className="book-page-form"><BookingForm/></div><aside className="booking-aside"><span className="eyebrow">{t('promiseEyebrow')}</span><h2>{t('needHelp')}</h2><p>{t('needHelpDesc')}</p><WhatsAppButton/>{[ShieldCheck,Clock3,Sparkles].map((Icon,i)=><div className="booking-benefit" key={i}><Icon size={24}/><div><h3>{t(`trust${i+1}`)}</h3><p>{t(`trust${i+1}desc`)}</p></div></div>)}<span className="aside-monogram" aria-hidden="true">A</span></aside></div></section></>;}
export function AboutPage(){const t=useTranslations();return <><PageHero eyebrow="about" title="aboutTitle" description="aboutDesc"/><section className="section"><div className="container about-story"><span className="eyebrow">{business.name}</span><h2>{t('aboutStory')}</h2><p>{t('aboutBody')}</p><div className="about-values">{[Clock3,Sparkles,HeartHandshake].map((Icon,i)=><article key={i}><Icon size={28}/><h3>{t(`aboutValue${i+1}`)}</h3><p>{t(`aboutValue${i+1}desc`)}</p></article>)}</div></div></section><Promise/><TrustStrip/><JourneyCTA/></>;}
