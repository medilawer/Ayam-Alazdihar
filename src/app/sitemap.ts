import {business} from '@/lib/config';
export default function sitemap(){return ['','/fleet','/services','/rates','/about','/contact','/book'].map(path=>({url:`${business.siteUrl}${path}`,changeFrequency:'monthly' as const,priority:path?0.8:1}));}
