// This variable defines the speed of the animation.
let animation = 0.5
// This variable defines a color factor that affects the color of the circles.
let ColorFactor = 58


function setup() {

    // This function is called once when the canvas is created.
    createCanvas(1200, 800, WEBGL);


}


function draw() {
    // This function is called repeatedly every frame to draw the animation on the canvas.

    // Set the background color to black.
    background(0)

    // Define the number of circles to be drawn.
    let numberOfCircles = 7

    // Loop through each circle and draw it.
    for (let i = 1; i <= numberOfCircles; i++) {

        // Set the maximum noise value for this circle based on its index.
        let noiseMax = 1 / i

        // Set the fill color for the circle based on the color factor and index.
        fill(200 * ColorFactor, 0, ColorFactor * 2.5, i + 25)

        // Scale the circle to be smaller than the canvas.
        scale(0.7)

        // Draw the circle.
        drawShape(noiseMax, numberOfCircles, animation)


        // Increase the color factor every circle to make the colors of the circles change over time.
        ColorFactor += 0.8


    }
    // Increase the animation speed every frame to make the circles move over time.
    animation += 0.008


}

/**
 * This function draws a single circle shape.
 * @param {number} noiseMax - The maximum noise value for this circle.
 * @param {number} numOfCircles - The total number of circles to be drawn.
 * @param {number} scale - A scaling factor for the circle.
 */
function drawShape(noiseMax, numOfCircles, scale) {

    // Set the stroke color and weight for the circle.
    stroke(255)
    strokeWeight(3)

    // Begin the shape.
    beginShape()

    // Loop through each point on the circle and calculate its position.
    for (let a = 0; a <= TWO_PI + 1; a += 0.08) {
        // Calculate the x and y offset for the noise function.
        let xOff = map(sin(a), -1, 1, 0, noiseMax)
        let yOff = map(cos(a), -1, 1, 0, noiseMax)

        // Calculate the radius of the circle based on the noise function.
        let r = map(noise(xOff, yOff), 0, 1, 0, 560)

        // Calculate the x and y position of the point on the circle.
        let x = ((r * sin(a))) - width / scale / numOfCircles
        let y = ((r * cos(a)) - height / scale / numOfCircles)

        // Add the vertex to the shape.
        vertex(x, y)


    }
    // End the shape.
    endShape()


}
