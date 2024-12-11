const button = document.getElementById('btn');
const div = document.getElementById('div');

button.addEventListener('click', (x) => {
    let p1 = document.createElement('p');
    div.insertAdjacentElement('afterbegin',p1)
    p1.textContent = "text"
    let p2 = "<p>text2</p>"
    div.insertAdjacentHTML('beforeend', p2)
})  

const cl = document.getElementById('clear');

function clear(elem) {
    for (let i = 0; i < elem.childNodes.length; i++) {
        elem.childNodes[i].innerHTML = "";
    }
}

cl.addEventListener('click', (x) => clear(div))





const d = document.getElementById('d');
const con = document.getElementById('copy')

function createButton() {
    const btn = document.createElement('button');
    btn.innerHTML = "Copy";
    btn.addEventListener('click', (x) => {
        d.insertAdjacentElement('beforeend', createButton());
    })
    return btn;
}


con.addEventListener('click', (x) => {
    d.insertAdjacentElement('beforeend', createButton());
})


const grid = document.getElementById('grid');
const rand = document.getElementById('rand');
let arr = [...grid.children];
let k = Math.sqrt(arr.length)

var promise = Promise.resolve();
rand.addEventListener('click', (x) => {
    for (let i = 0; i < k; i++) {
        
        promise = promise.then(function () {
            for (let j = 0; j < k; j++) {
                let a = Math.floor(Math.random() * 999999)
                debugger
                let m = k*(i+1)-j;
                (arr[m]).style.backgroundColor = `#${a}`
            }
        
            return new Promise(function (resolve) {
                setTimeout(resolve, "100");
              });
        })
    }

})