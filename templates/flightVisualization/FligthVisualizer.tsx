import { ReactChild } from "react"
import { FlightNumbers, getFlightPath } from "./svgGenerator"

export function debugGrid() {
    return (
        <path stroke="teal" stroke-width=".2" d={debugGridString(200)} />
    )
}

type VisualizerProps = {
    flightNums: FlightNumbers,
    discName: string
}


export const FlightVisualizer = (props: VisualizerProps) => {
    let { speed, glide, stability, fade } = props.flightNums
    return (
        <svg viewBox="0 0 100 200" className='flight-visualization'>
            <text x="2" y="7" fontSize={6}>{props.discName}</text>
            <text dx="2" y="17" fontSize={6}>{`${speed} / ${glide} / ${stability} / ${fade}`}</text>
            <path d={getFlightPath(props.flightNums, 100, 200)} stroke="black" fill="transparent" stroke-width={1}></path>
            {debugGrid()}
        </ svg >
    )
}

const debugGridString = (size: number): string => {
    let accuaracy = 20
    let tenth = size / accuaracy
    var str = ""
    for (let i = 1; i < accuaracy; i++) {
        str += slice(i * tenth, size)
    }
    return str
}

const slice = (divider: number, size: number): string => {
    return `M ${divider} 0 V${size} M 0 ${divider} H${size} `
}