export const wind_degrees2label = (deg: number) => {
    deg = deg % 360;
    let labels = [
        "N", "NNE", "NE", "ENE", 
        "E", "ESE", "SE", "SSE", 
        "S", "SSW", "SW", "WSW", 
        "W", "WNW", "NW", "NNW",
    ];
    let idx = deg / (360 / 16);
    return labels[Math.floor(idx)];
}