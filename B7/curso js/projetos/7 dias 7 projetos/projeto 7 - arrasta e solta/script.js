let areas = {
    a: null,
    b: null,
    c: null
}

document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd);
})

document.querySelectorAll('.area').forEach(area => {
    area.addEventListener('dragover', dragOver) // roda a função quando passa por cima da area
    area.addEventListener('dragleave', dragLeave) // roda a função qunado vc ta por cima da area q pode soltar e saiu de cima dela
    area.addEventListener('drop', dragDrop) // só roda quando pode ser dropado em um dragover, roda a função qunado dropa algo naquele lugar
})

document.querySelector('.neutralArea').addEventListener('dragover', dragOverNeutral)
document.querySelector('.neutralArea').addEventListener('dragleave', dragLeaveNeutral)
document.querySelector('.neutralArea').addEventListener('drop', dropNeutral)

// FUNÇÕES ITENS
function dragStart(e) {
    e.currentTarget.classList.add('dragging');
}

function dragEnd(e) {
    e.currentTarget.classList.remove('dragging');
}

// FUNÇÕES AREA

function dragOver(e) {
    if(e.currentTarget.querySelector('.item') === null ) {
        // o padrão é n aceitar drop, usa o prevent default no evento para poder liberar a area para drop
        e.preventDefault()

        e.currentTarget.classList.add('hover')
    }
}

function dragLeave(e) {
    e.currentTarget.classList.remove('hover')
}

function dragDrop(e) {
    e.currentTarget.classList.remove('hover')

    if(e.currentTarget.querySelector('.item') === null ) {
        let dragItem = document.querySelector('.item.dragging')
        e.currentTarget.appendChild(dragItem)
        updateAreas()
    }

}

// FUNÇÕES NEUTRAL AREA

function dragOverNeutral(e) {
    e.preventDefault()
    e.currentTarget.classList.add('hover')
}  

function dragLeaveNeutral(e) {
    e.currentTarget.classList.remove('hover')
}

function dropNeutral(e) {
    e.currentTarget.classList.remove('hover')

    let dragItem = document.querySelector('.item.dragging')
    e.currentTarget.appendChild(dragItem)
    updateAreas()
}

// FUNÇÕES DE LÓGICA

function updateAreas() {
    document.querySelectorAll('.area').forEach(area => {
        let name = area.getAttribute('data-name')

        if(area.querySelector('.item') !== null) {
            areas[name] = area.querySelector('.item').innerHTML
        } else{
            areas[name] = null
        }
    })

    if(areas.a === '1' && areas.b === '2' && areas.c === '3') {
        document.querySelector('.areas').classList.add('correct')
    } else {
        document.querySelector('.areas').classList.remove('correct')
    }
}