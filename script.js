let is_ignite = true
function change_card(event){
    const card = event.currentTarget
    const bg = is_ignite 
    ? "explorer"
    : "ignite"
    is_ignite = !is_ignite
    card.style.backgroundImage = `url(./assets/bg-${bg}.svg)`
}