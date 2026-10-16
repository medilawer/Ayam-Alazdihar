export type VehicleCategory = 'sedan' | 'suv' | 'limousine' | 'group';
export const vehicles = [
  {id:'s-class',name:'Mercedes-Benz S-Class',ar:'مرسيدس بنز الفئة S',category:'sedan' as VehicleCategory,passengers:3,luggage:3,rate:250,image:'/images/sedan.webp',tag:'executive'},
  {id:'yukon',name:'GMC Yukon Denali',ar:'جي إم سي يوكون دينالي',category:'suv' as VehicleCategory,passengers:7,luggage:5,rate:320,image:'/images/suv.webp',tag:'popular'},
  {id:'staria',name:'Hyundai Staria',ar:'هيونداي ستاريا',category:'group' as VehicleCategory,passengers:7,luggage:6,rate:280,image:'/images/van.webp',tag:'group'},
  {id:'bmw',name:'BMW 7 Series',ar:'بي إم دبليو الفئة السابعة',category:'sedan' as VehicleCategory,passengers:3,luggage:3,rate:250,image:'/images/sedan.webp',tag:'executive'},
  {id:'lexus',name:'Lexus LS',ar:'لكزس LS',category:'sedan' as VehicleCategory,passengers:3,luggage:3,rate:240,image:'/images/sedan.webp',tag:'executive'},
  {id:'suburban',name:'Chevrolet Suburban',ar:'شيفروليه سوبربان',category:'suv' as VehicleCategory,passengers:7,luggage:6,rate:320,image:'/images/suv.webp',tag:'popular'},
  {id:'land-cruiser',name:'Toyota Land Cruiser',ar:'تويوتا لاند كروزر',category:'suv' as VehicleCategory,passengers:6,luggage:4,rate:300,image:'/images/suv.webp',tag:'popular'},
  {id:'maybach',name:'Mercedes-Maybach',ar:'مرسيدس مايباخ',category:'limousine' as VehicleCategory,passengers:3,luggage:3,rate:600,image:'/images/sedan.webp',tag:'vip'},
  {id:'hiace',name:'Toyota Hiace',ar:'تويوتا هايس',category:'group' as VehicleCategory,passengers:12,luggage:8,rate:380,image:'/images/van.webp',tag:'group'},
  {id:'coaster',name:'Toyota Coaster',ar:'تويوتا كوستر',category:'group' as VehicleCategory,passengers:22,luggage:14,rate:550,image:'/images/van.webp',tag:'group'},
];
export type Vehicle = typeof vehicles[number];
export const routes = [
 {id:'jed-makkah',en:'Jeddah Airport → Makkah',ar:'مطار جدة ← مكة المكرمة',km:95,minutes:80,base:350},
 {id:'ruh-city',en:'Riyadh Airport → City center',ar:'مطار الرياض ← وسط المدينة',km:40,minutes:45,base:180},
 {id:'riyadh-dammam',en:'Riyadh → Dammam',ar:'الرياض ← الدمام',km:410,minutes:270,base:1100},
 {id:'khobar-bahrain',en:'Khobar → Bahrain',ar:'الخبر ← البحرين',km:80,minutes:90,base:450},
 {id:'makkah-madinah',en:'Makkah → Madinah',ar:'مكة المكرمة ← المدينة المنورة',km:450,minutes:300,base:1200},
 {id:'dammam-city',en:'Dammam Airport → Khobar',ar:'مطار الدمام ← الخبر',km:55,minutes:50,base:220},
 {id:'riyadh-dubai',en:'Riyadh → Dubai',ar:'الرياض ← دبي',km:990,minutes:660,base:2800},
 {id:'dammam-qatar',en:'Dammam → Doha',ar:'الدمام ← الدوحة',km:400,minutes:300,base:1400},
 {id:'dammam-kuwait',en:'Dammam → Kuwait City',ar:'الدمام ← مدينة الكويت',km:470,minutes:330,base:1600},
];
export function calculateQuote(routeId: string, vehicleId: string, mode: string = 'airport', hours = 3) {
 const route = routes.find(r=>r.id===routeId);
 const vehicle = vehicles.find(v=>v.id===vehicleId);
 if (!vehicle || (mode !== 'hourly' && !route)) return null;
 if (!Number.isFinite(hours) || hours < 3 || hours > 24) return null;
 const subtotal = mode === 'hourly' ? Math.round(vehicle.rate * .6 * hours) : Math.round(route!.base * vehicle.rate / 250);
 const vat = Math.round(subtotal * .15);
 return {subtotal,vat,total:subtotal+vat,currency:'SAR',estimated:true};
}
