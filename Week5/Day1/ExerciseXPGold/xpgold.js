let form = document.querySelector('form');
let anotherHtml = document.getElementById('butt');

console.log(anotherHtml);
form.addEventListener('submit',printBdy)

function printBdy(e) {
    //prevent the default form actin
    e.preventDefault();
    const data = new FormData(e.target);
    const fromJSON = Object.fromEntries(data.entries());
    const res = JSON.stringify(fromJSON);
    anotherHtml.textContent = res;
    // console.log('res', res);
    return res;
}


