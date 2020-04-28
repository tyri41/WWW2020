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
//# sourceMappingURL=main.js.map