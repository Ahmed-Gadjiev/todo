window.onload = function(){
    let add = document.getElementById('add')

    add.onclick = () => {
        addCard()
    }
}

function addCard(){
    let inputTitleCard = document.getElementById('inputTitleCard')
    let inputContentCard = document.getElementById('inputContentCard')

    let card = document.createElement('div')
    card.className = 'card'
    let closeCard = document.createElement('div')
    closeCard.className = 'closeCard'
    let titleCard = document.createElement('p')
    titleCard.className = 'titleCard'
    let contentCard = document.createElement('p')
    contentCard.className = 'contentCard'

    titleCard.innerHTML = inputTitleCard.value
    contentCard.innerHTML = inputContentCard.value
    closeCard.innerHTML = '☒'

    card.prepend(closeCard)
    card.append(titleCard)
    card.append(contentCard)

    closeCard.onclick = () => {
        card.remove()
    }

    return document.body.append(card)   
}

