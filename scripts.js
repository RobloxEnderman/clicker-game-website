let balance = 0;
let multiplier = 0.5;

function Click(){
    balance += (1*multiplier);
    updateCount();
    document.getElementById('collectmoney').hidden = true;
    document.getElementById('collectmoney').hidden = false;
}

function Upgrade() {
    if (balance >= (10*multiplier)){
        balance -= (10*multiplier);
        multiplier += 0.5 * multiplier;
        multiplier = (Math.round(multiplier * 100)/100)
        multiplierCost = (Math.round((10*multiplier)*100))/100
        updateCount()
        document.getElementById('Multiplier').innerText = 'Upgrade Multiplier ($'+(multiplierCost)+ ')'
    }
}

function updateCount() {
    document.getElementById('Text').innerText = '$' + balance;
    //console.log(balance) (for debug purposes)
}
