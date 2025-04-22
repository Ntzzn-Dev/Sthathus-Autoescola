function mouseIn(e, rot, scl) {
    const el = e.currentTarget;
    el.style.transform = 'rotate(' + rot + 'deg) scale(' + (scl + 0.02) + ')';
}
function mouseOut(e, rot, scl) {
    const el = e.currentTarget;
    el.style.transform = 'rotate(' + rot + 'deg) scale(' + (scl) + ')';
}

function expandQuest(e){
    const el = e.currentTarget;
    el.classList.toggle("active");
}
