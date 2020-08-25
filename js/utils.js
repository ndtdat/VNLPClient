var serviceDomain = "http://localhost:5000"

function VNLPRecognize(req) {
    var xhr = new XMLHttpRequest()
    var url = `${serviceDomain}/predict`
    xhr.open("POST", url, false)
    xhr.send(req)
    var res = xhr.responseText
    return res
}