function startClassification() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    })
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/4ylj10I8d/model.json", modelLoaded)
}

function modelLoaded() {
    classifier.classify(gotResult)
}

function gotResult(error, result) {
    if (error) {
        console.error(error)
    } else {
        console.log(result)

        random_number_r = Math.floor(Math.random() * 255 + 1)
        random_number_g = Math.floor(Math.random() * 255 + 1)
        random_number_b = Math.floor(Math.random() * 255 + 1)

        document.getElementById("result_label").style.color = "r(" + random_number_r + "," + random_number_g + "," + random_number_b + ")"
        document.getElementById("result_confidence").style.color = "r(" + random_number_r + "," + random_number_g + "," + random_number_b + ")"
        document.getElementById("result_label").innerHTML = "I can hear " + result[0].label
        document.getElementById("result_confidence").innerHTML = "Accuracy: " + (result[0].confidence*100).toFixed(2)+" %"

        img1 = document.getElementById("listen1")
        if (result[0].label == "Le chien") {
            img1.src = "Copy of bark.gif"
        }
        else if (result[0].label == "Le chat") {
            img1.src = "Copy of meow.gif"
        }
        else if (result[0].label == "Background noise"){
            img1.src = "Copy of listen.gif"
    }

}
}