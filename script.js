const $ = (e) => document.querySelector(e);
const $$ = (e) => document.querySelectorAll(e);



// Creating Variables
let val = 0;


// Calling  Functions
creteNo();







const iBtn = $('.i-btn');
const dBtn = $('.d-btn');

let count = 1;
let child = 1;
let eCount = 1;
iBtn.onclick = () => {
    let change = $(`.value${child}`);

    if (count <= 9) {
        child = 1;
        change = $(`.value${child}`);
        change.style.top = (count * -100) + "%";
        count++;        
    } else {
        change.style.top = "0%";
        count = 1;
        child++;
        change = $(`.value${child}`);
        change.style.top = (eCount * -100) + "%";
        eCount++;
    }
}












// Creating Functions
function creteNo() {
    for(let i = 1; i <= 6; i++) {
        $(".value").innerHTML += `
            <div class=${"value" + (7 - i)} style="left: ${(i - 1)*(100/6)}%;">
                <span>0</span>
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
                <span>6</span>
                <span>7</span>
                <span>8</span>
                <span>9</span>
            </div>
        `;
    }
}