function getPromised(time) {
    var promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, time);
    });
    return promise;
}
function setColor(color, el) {
    console.log(color);
    el.style.backgroundColor = color;
}
let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'purple', 'white'];
function teczoweKolory(el) {
    let promise = getPromised(1000);
    for (const color of colors) {
        promise = promise.then(() => {
            setColor(color, el);
            return getPromised(1000);
        });
    }
}
function getTSAvatar(el) {
    fetch("https://api.github.com/repos/Microsoft/TypeScript/commits")
        .then((response) => response.json())
        .then((data) => {
        console.log(data[0].author.avatar_url);
        el.src = data[0].author.avatar_url;
    })
        .catch((data) => {
        console.log(data);
    });
}
let clicks = 0;
function swapColor(el) {
    clicks++;
    get10iFib(clicks);
    let color = el.style.backgroundColor;
    let newColor;
    do {
        newColor = colors[Math.floor(Math.random() * colors.length)];
    } while (color == newColor);
    console.log(color + " -> " + newColor);
    el.style.backgroundColor = newColor;
}
let fibs = [];
fibs[0] = 0;
fibs[1] = 1;
// console.log(fibs);
function getFib(x) {
    if (fibs[x] == null) {
        fibs[x] = getFib(x - 1) + getFib(x - 2);
        // console.log(x + " " + fibs[x]);
    }
    return fibs[x];
}
function get10iFib(x) {
    return getFib(10 * x);
}
//# sourceMappingURL=main.js.map