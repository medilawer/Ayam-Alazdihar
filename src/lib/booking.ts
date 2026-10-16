import {business} from './config';
import {z} from 'zod';
import {vehicles} from './data';
export const bookingSchema = z.object({
 name:z.string().trim().min(2,'nameError').max(100),
 country:z.enum(['966','971','973','974','965','968','1','44']),
 phone:z.string().trim().regex(/^[0-9\s()-]{7,18}$/,'phoneError').refine(v=>v.replace(/\D/g,'').replace(/^0/,'').length>=7 && v.replace(/\D/g,'').length<=12,'phoneError'),
 service:z.enum(['airport','hourly','intercity']),
 vehicle:z.string().refine(value=>vehicles.some(vehicle=>vehicle.id===value),'required'),
 pickup:z.string().trim().min(3,'pickupError').max(200),
 destination:z.string().trim().max(200),
 date:z.string().min(1,'dateError'),
 time:z.string().min(1,'dateError'),
 hours:z.number().min(3).max(24),
 childSeat:z.boolean(),
 meetGreet:z.boolean(),
 flight:z.string().max(30),
 requests:z.string().max(1000),
}).superRefine((data,ctx)=>{
 if(data.service!=='hourly' && data.destination.length<3)ctx.addIssue({code:'custom',path:['destination'],message:'destinationError'});
 const pickup=new Date(`${data.date}T${data.time}:00+03:00`);
 if(!Number.isFinite(pickup.getTime()) || pickup.getTime()<=Date.now())ctx.addIssue({code:'custom',path:['date'],message:'futureError'});
});
export type BookingValues=z.infer<typeof bookingSchema>;
export function formatBooking(data:BookingValues,vehicleName:string,locale:'ar'|'en') {
 if(locale==='ar') return `طلب حجز جديد — ${business.nameAr}\nالاسم: ${data.name}\nواتساب: +${data.country}${data.phone.replace(/\D/g,'').replace(/^0/,'')}\nالخدمة: ${{airport:'نقل المطار',hourly:'سائق بالساعة',intercity:'بين المدن / الخليج'}[data.service]}\nالسيارة: ${vehicleName}\nالانطلاق: ${data.pickup}\nالوجهة: ${data.destination || 'حسب البرنامج'}\nالتاريخ: ${data.date}\nالوقت: ${data.time} (توقيت السعودية)${data.service==='hourly'?`\nالمدة: ${data.hours} ساعات`:''}\nرقم الرحلة: ${data.flight||'غير محدد'}\nمقعد طفل: ${data.childSeat?'نعم':'لا'}\nاستقبال بالاسم: ${data.meetGreet?'نعم':'لا'}\nطلبات خاصة: ${data.requests||'لا يوجد'}\nيرجى تأكيد السعر والتوفر.`;
 return `New booking request — ${business.name}\nName: ${data.name}\nWhatsApp: +${data.country}${data.phone.replace(/\D/g,'').replace(/^0/,'')}\nService: ${{airport:'Airport transfer',hourly:'Hourly chauffeur',intercity:'Intercity / GCC'}[data.service]}\nVehicle: ${vehicleName}\nPickup: ${data.pickup}\nDestination: ${data.destination||'As directed'}\nDate: ${data.date}\nTime: ${data.time} (Saudi Arabia time)${data.service==='hourly'?`\nDuration: ${data.hours} hours`:''}\nFlight: ${data.flight||'Not supplied'}\nChild seat: ${data.childSeat?'Yes':'No'}\nMeet & greet sign: ${data.meetGreet?'Yes':'No'}\nSpecial requests: ${data.requests||'None'}\nPlease confirm price and availability.`;
}
