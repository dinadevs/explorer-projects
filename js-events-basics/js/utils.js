export function notANumber(value) {
    return isNaN(value) || value == ""
}

export function calculeteIMC(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2)
}