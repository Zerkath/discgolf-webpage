interface FlightNumbers {
    speed: number,
    glide: number,
    stability: number,
    fade: number
}

export function debugGrid() {
    return (
        <path stroke="grey" stroke-width=".02" d={debugGridString(20)} />
    )
}

type VisualizerProps = {
    flightNums: FlightNumbers,
    discName: string
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
    // return `M ${divider} 0 V${size} M 0 ${divider} H${size} `
    return `M 0 ${divider} H${size} `
}

function getFlightPath(flightNums: FlightNumbers, width: number, height: number): string {

    let max = Math.max(width, height)

    let normalized = normalizeNumbers(flightNums, max)
    console.log(normalized)
    let { speed, glide, stability, fade } = normalized

    let h = height / (100 * (max / height))
    let w = width / (100 * (max / width))

    let middle = width / 2

    let startY = height - 5 * h
    // coordinates in x, y
    let startCoord = `${middle.toFixed(3)}, ${startY.toFixed(3)}`

    let apexY = startY - 12 * (h + speed)
    let distance = apexY - 2.6 * (h + speed)

    let stabilityOffset = w * (90 * stability - 10 * glide)
    let apexX = middle - stabilityOffset

    let apexXDiff = middle - apexX

    let fadeX = apexX - (0.9 * fade + 2.2 * speed + 1.8 * stability)

    let curve = `Q${middle.toFixed(3)}, ${(apexY + h * 5).toFixed(3)} ${apexX.toFixed(3)}, ${(apexY).toFixed(3)}`

    var svg = `M ${startCoord} ${curve} Q${(apexX - apexXDiff).toFixed(3)}, ${(apexY - h * 5).toFixed(3)} ${fadeX.toFixed(3)}, ${(distance - h * 5).toFixed(3)}`

    console.log(svg, flightNums)

    return svg
}

function normalizeNumbers(flightNums: FlightNumbers, divider: number): FlightNumbers {
    return {
        speed: flightNums.speed / divider,
        glide: flightNums.glide / divider,
        stability: flightNums.stability / divider,
        fade: flightNums.fade / divider
    }
}


export const FlightVisualizer = (props: VisualizerProps) => {
    let { speed, glide, stability, fade } = props.flightNums
    return (
        <svg viewBox="0 0 10 20" className='flight-visualization'>
            <text x="0.2" y="0.8" fontSize={0.7}>{props.discName}</text>
            <text dx="0.2" y="1.7" fontSize={0.6}>{`${speed} / ${glide} / ${stability} / ${fade}`}</text>
            <path d={getFlightPath(props.flightNums, 10, 20)} stroke="black" fill="transparent" stroke-width={0.08}></path>
            {debugGrid()}
        </ svg >
    )
}

export type { FlightNumbers }
export { getFlightPath }
