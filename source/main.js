let items = document.querySelectorAll('.tab-item')
let contents = document.querySelectorAll('.item-content')
document.querySelector('.line').style.width = items[0].offsetWidth + 'px'

items.forEach(node => {
    node.onclick = function () {
        items.forEach(node => node.classList.remove('active'))
        this.classList.add('active')
        document.querySelector('.line').style.width = this.offsetWidth + 'px'
        document.querySelector('.line').style.transform = `translateX(${this.offsetLeft}px)`
        let index = [...items].indexOf(this)
        contents.forEach(node => node.classList.remove('active'))
        document.querySelector('.tab-content').children[index].classList.add('active')
    }
})