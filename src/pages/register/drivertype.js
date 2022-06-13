import taxi from "../../assets/img/taxi.png"
import rideHailing from "../../assets/img/rideHailing.png"
import intracity from "../../assets/img/intracity.png"
import intercity from "../../assets/img/intercity.png"
import Corporate from "../../assets/img/corporate.png"
import Haulage from "../../assets/img/haulage.png"
import schoolbus from "../../assets/img/schoolbus.png"
import dispatch from "../../assets/img/dispatch.png"

export const driverTypeOptions = [
    {
        src: taxi,
        driverType:"taxi",
        value:"TAXI",
        alt:"Taxi"
    },
    {
        src: rideHailing,
        driverType:"ride hailing",
        value:"RIDE-HAILING",
        alt:"Ride Hailing"
    },
    {
        src: intracity,
        driverType:"intra-city",
        value:"INTRA-CITY",
        alt:"intra-city"
    },
    {
        src: intercity,
        driverType:"inter-city",
        value:"INTER-CITY",
        alt:"intercity"
    },
    {
        src: Corporate,
        driverType:"corporate",
        value:"CORPORATE",
        alt:"Corporate"
    },
    {
        src: Haulage,
        driverType:"haulage",
        value:"HAULAGE/TRUCKS",
        alt:"Haulage"
    },
    {
        src: schoolbus,
        driverType:"school bus",
        value:"SCHOOL-BUS",
        alt:"schoolbus"
    },
    {
        src: dispatch,
        driverType:"dispatch",
        value:"DISPATCH",
        alt:"dispatch"
    }
];