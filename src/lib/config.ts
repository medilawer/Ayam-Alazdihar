export const business = {
  name: 'AYAM',
  displayName: 'Ayaam Al-Azdihar',
  legalName: 'ayam alazdihar Company',
  nameAr: 'شركة ايام الازدهار',
  // Business location supplied by the owner.
  address: {
    en: 'Olaya, Riyadh, Saudi Arabia',
    ar: 'حي العليا، الرياض، المملكة العربية السعودية',
    streetAddress: 'Olaya',
    city: 'Riyadh',
    country: 'SA',
  },
  phone: (process.env.NEXT_PUBLIC_DISPATCH_PHONE || '966554500138').replace(/\D/g, ''),
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'info@ayam-alazdihar.com',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://ayam-alazdihar.com',
  tga: process.env.NEXT_PUBLIC_TGA_LICENSE || '',
  cr: process.env.NEXT_PUBLIC_CR_NUMBER || '',
  vat: process.env.NEXT_PUBLIC_VAT_NUMBER || '',
};
export function whatsappUrl(message: string) {return business.phone ? `https://wa.me/${business.phone}?text=${encodeURIComponent(message)}` : null;}
