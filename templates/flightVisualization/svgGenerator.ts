
interface FlightNumbers {
    speed: number,
    glide: number,
    stability: number,
    fade: number
}

function getFlightPath(flightNums: FlightNumbers, width: number, height: number): string {

    console.log(flightNums)
    let normalized = normalizeNumbers(flightNums)
    console.log(normalized)

    let { speed, glide, stability, fade } = normalized

    let fHeight = (height / 10)
    let fWidth = (width / 10)

    let maxDistance = height - 4 * fHeight * (speed + glide)

    let middle = width / 2
    let start = height - (fHeight / 2)

    let distanceToApex = maxDistance * 0.4

    let xApex = middle - (fWidth * (2 * glide * stability))

    /*
    M x y # starting point
    C x y # starting length

    */
    var svg = `
        M${middle}, ${start}
        C${middle}, ${distanceToApex}
        ${xApex}, ${distanceToApex}
        ${xApex}, ${distanceToApex}
        S${middle}, ${maxDistance}
        ${middle}, ${maxDistance}
        `

    return svg
}

function normalizeNumbers(flightNums: FlightNumbers): FlightNumbers {
    return {
        speed: flightNums.speed / 30,
        glide: flightNums.glide / 40,
        stability: flightNums.stability / 15 - 0.1,
        fade: flightNums.fade / 7
    }
}

export type { FlightNumbers }
export { getFlightPath }