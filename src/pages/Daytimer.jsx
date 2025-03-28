import {useEffect, useState} from "react";

const Daytimer = () => {
    const [DDay, setDDay] = useState(0);
    const [DHours, setDHours] = useState(0);
    const [DMinutes, setMinutes] = useState(0);
    const [DSeconds, setDSeconds] = useState(0);
    const targetDate = new Date('2025-05-25T12:00:00+0900');

    useEffect(() => {
        const timer = setInterval(() => {
            const currentDate = new Date();
            const timeDifference = targetDate - currentDate;

            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor(
                (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
            );
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            const countdownString = `D-${days} ${hours.toString().padStart(2, '0')}
            :${minutes.toString().padStart(2, '0')}
            :${seconds.toString().padStart(2, '0')}`;

            const dDays = `${days}`;
            const dHours = `${hours.toString().padStart(2, '0')}`;
            const dMinutes = `${minutes.toString().padStart(2, '0')}`;
            const dSeconds = `${seconds.toString().padStart(2, '0')}`;

            setDDay(dDays);
            setDHours(dHours);
            setMinutes(dMinutes);
            setDSeconds(dSeconds);

            if (days < 1 && days > 0) {
                setDDay('D-DAY');
            }
        }, 50);

        return () => clearInterval(timer);
    }, []);

    return (
        <>
            <div className="mt30 dday-area">
                <div className="dday-inner">
                    <div className="d-days">
                        <h1>{DDay}</h1>
                        <h6>Days</h6>
                    </div>
                    <h1 className="pd10">:</h1>
                    <div className="d-days">
                        <h1>{DHours}</h1>
                        <h6>Hours</h6>
                    </div>
                    <h1 className="pd10">:</h1>
                    <div className="d-days">
                        <h1>{DMinutes}</h1>
                        <h6>Minutes</h6>
                    </div>
                    <h1 className="pd10">:</h1>
                    <div className="d-days">
                        <h1>{DSeconds}</h1>
                        <h6>Seconds</h6>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Daytimer;