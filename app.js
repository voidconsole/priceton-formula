var dom = document


function Priceton(time=0, qlty=0,mat=0, will=0, beta=0,hrP=30,fac=1){
    return (time*hrP*((beta/100)+fac)*(((100-will)/100)+fac))+mat+qlty
}
function update() {
    let time = parseFloat(dom.querySelector("#time").value);
    let love = parseInt(dom.querySelector("#love").value);
    let mat = parseInt(dom.querySelector("#mat").value);
    let hrPr = parseInt(dom.querySelector("#hrPr").value);
    let will = parseInt(dom.querySelector("#will").value);
    let beta = parseInt(dom.querySelector("#beta").value);
    let fac = parseInt(dom.querySelector("#fac").value);
    res = Priceton(time,love,mat,will,beta,hrPr,fac)
    document.querySelector("#res").innerHTML = "₹" + Math.round(res);
    // var arr = [parseInt(dom.querySelector("#time").value),parseInt(dom.querySelector("#love").value),parseInt(dom.querySelector("#mat").value),parseInt(dom.querySelector("#hrPr").value),parseInt(dom.querySelector("#will").value),parseInt(dom.querySelector("#beta").value)]
    // dom.querySelector("#res").innerHTML = Math.round(Priceton(...arr));


    dom.querySelector("main").style = 'filter:blur(10px)';
    dom.querySelector("#pop").style = 'display:flex;';
    dom.querySelector("#black").style = 'display:block;';

}
function remove() {
    dom.querySelector("main").style = 'filter:blur(0px)';
    dom.querySelector("#pop").style = 'display:none;';
    dom.querySelector("#black").style = 'display:none;';
}

function slide(){
    dom.querySelector("#sl").innerHTML = dom.querySelector('#fac').value
}
function slideMob(){
    dom.querySelector("#slMob").innerHTML = dom.querySelector('#facMob').value
}


