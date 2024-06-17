function mostrar() {
    let reader = new FileReader()
    let image = document.getAnimations('image').files[0]

    reader.onloadend = function() {
        let img = document.createElement('img')
        img.src = reader.result
        img.width = 300

        document.getElementById('area').appendChild(img)
    }

    reader.readAsDataURL(image)
}


// usa callback pra rodar o codigo, deixando ele meio assincrono