'use client';
import {createContext,useContext} from 'react';
export type BookingInitial={vehicle?:string;service?:'airport'|'hourly'|'intercity';pickup?:string;destination?:string;date?:string;time?:string;hours?:number};
export const BookingContext=createContext<{openBooking:(initial?:BookingInitial)=>void}>({openBooking:()=>{}});
export const useBooking=()=>useContext(BookingContext);
