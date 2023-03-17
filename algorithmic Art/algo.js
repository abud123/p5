let animation = 0.5
let ColorFactor = 58


function setup() {
    // creating the canavs with width , height
    createCanvas(1200, 800, WEBGL);


}


function draw() {

    background(0)
    let numberOfCircles = 7


    for (let i = 1; i <= numberOfCircles; i++) {

        let noiseMax = 1/i
        fill(200 * ColorFactor, 0, ColorFactor * 2.5, i + 25)
        scale(0.7)

        drawShape(noiseMax, numberOfCircles, animation)

    }

    ColorFactor += 0.8


    animation += 0.008


}

function drawShape(noiseMax, numOfCircles, qop) {
    stroke(255)
    strokeWeight(3)


    beginShape()


    for (let a = 0; a <= TWO_PI + 1; a += 0.08) {
        let xOff = map(sin(a), -1, 1, 0, noiseMax)
        let yOff = map(cos(a), -1, 1, 0, noiseMax)
        let r = map(noise(xOff, yOff), 0, 1, 0, 450)
        let x = ((r * sin(a))) - width / qop / numOfCircles
        let y = ((r * cos(a)) - height / numOfCircles)
        vertex(x, y)


    }
    endShape()


}
