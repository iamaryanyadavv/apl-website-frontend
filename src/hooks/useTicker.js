import { useEffect, useState } from "react";
import { intervalToDuration, isBefore, isDate } from 'date-fns';

export const useTicker = (endDate) => {
    const [now, setNow] =  useState(new Date());
    const end = new Date(endDate);
    useEffect(() => {        
        const interval = setInterval(() => {
            setNow(new Date());          
        }, 1000);
    
        return () => {
          clearInterval(interval);
        };
    }, [end]);
    const isTimeUp = isBefore(end, now);
    if (isTimeUp) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0, isTimeUp };
    }

    let { days, hours, minutes, seconds } = intervalToDuration({
        start: now,
        end: end
    });

    return { days, hours, minutes, seconds, isTimeUp };
};