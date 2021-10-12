const bg = document.getElementById("gradient")
const pickerOne = document.getElementById("picker-1")
const pickerTwo = document.getElementById("picker-2")
const pickerThree = document.getElementById("picker-3")
const split = document.getElementById("split")
const supriseEl = document.getElementById("suprise-btn")

function render (c1, c2, c3) {
    bg.style.backgroundImage = `linear-gradient(90deg, ${c1}, ${c2} ${split.value}%, ${c3})`
}

function getRandomNumber () {
    return Math.ceil ( Math.random() * 256 )
}

function rgbToHex (rgb) { 
    let hex = Number(rgb).toString(16)
    if (hex.length < 2) {
         hex = "0" + hex
    }
    return hex
}

supriseEl.addEventListener("click", () => {
    const c1 = "#" + rgbToHex(getRandomNumber()) + rgbToHex(getRandomNumber()) + rgbToHex(getRandomNumber())
    const c2 = "#" + rgbToHex(getRandomNumber()) + rgbToHex(getRandomNumber()) + rgbToHex(getRandomNumber())
    const c3 = "#" + rgbToHex(getRandomNumber()) + rgbToHex(getRandomNumber()) + rgbToHex(getRandomNumber())
    pickerOne.value = c1
    pickerTwo.value = c2
    pickerThree.value = c3
    render (c1, c2, c3)
})

pickerOne.addEventListener("change", () => {
    render(pickerOne.value, pickerTwo.value, pickerThree.value)
})

pickerTwo.addEventListener("change", () => {
    render(pickerOne.value, pickerTwo.value, pickerThree.value)
})

pickerThree.addEventListener("change", () => {
    render(pickerOne.value, pickerTwo.value, pickerThree.value)
})

split.addEventListener("change", () => {
    render(pickerOne.value, pickerTwo.value, pickerThree.value)
})

render(pickerOne.value, pickerTwo.value, pickerThree.value)
