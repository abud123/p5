// import {TWO_PI} from "../p5";
let qop =1
let ff = 58

function setup() {
    createCanvas(windowWidth, windowHeight);


}


function draw() {

    background(0)
    let numberOfCircles = 10


    translate(width / numberOfCircles, height / numberOfCircles)
    for (let i = 0; i <= numberOfCircles; i++) {

        let noiseMax = i/numberOfCircles+1
        // drawLine(50,90,noiseMax)
        fill(200 * ff, 0, ff * 2.5, i+25 )
        drawShape(5/noiseMax, numberOfCircles, qop)

    }

    ff+=0.1


    qop+=0.008

    // drawShape(noiseMax, phase, numX, numY)

}

function drawShape(noiseMax, numOfCircles, qop) {
    translate(width / numOfCircles, height / numOfCircles)
    stroke(255)
    strokeWeight(3)


    // noFill()
    beginShape()
    for (let a = 0; a <= TWO_PI + 1; a += 0.08) {
        let xOff = map(sin(a), -1, 1, 0, noiseMax)
        let yOff = map(cos(a), -1, 1, 0, noiseMax)
        let r = map(noise(xOff, yOff), 0, 1, 0, 450)
        let x = ((r * sin(a)))-width/qop
        let y = ((r * cos(a*qop)) - height /a )
        vertex(x, y)


    }
    endShape()


}
