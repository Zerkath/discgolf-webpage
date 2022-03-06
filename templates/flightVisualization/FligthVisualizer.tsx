interface FlightNumbers {
    speed: number,
    glide: number,
    stability: number,
    fade: number
}

export function BackgroundGrid() {
    return (
        <path className="grid" stroke="grey" strokeWidth=".02" d={gridString(20)} />
    )
}

type VisualizerProps = {
    flightNums: FlightNumbers,
    discName: string,
    manufacturer: string
    style?: string
}


const gridString = (size: number): string => {
    let accuaracy = 20
    let tenth = size / accuaracy
    var str = ""
    for (let i = 4; i < accuaracy; i++) {
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
        <svg viewBox="0 0 10 20" className={`flight-visualization ${props.style || ""}`} >
            <text x="0.2" y="1.2" fontSize={1.2}>{props.manufacturer}</text>
            <text x="0.2" y="2.4" fontSize={1}>{props.discName}</text>
            <text dx="0.2" y="3.6" fontSize={0.8}>{`${speed} / ${glide} / ${stability} / ${fade}`}</text>
            <path className="flight" d={getFlightPath(props.flightNums, 10, 20)} stroke="black" fill="transparent" stroke-width={0.08}></path>
            <BackgroundGrid />
        </ svg >
    )
}

export type { FlightNumbers }
export { getFlightPath }
