let balance = 0;
let multiplier = 1;

let multiplierCost = 10;
let multiplierCostMultiplier = 1;

document.getElementById('Multiplier').innerText = 'Upgrade Multiplier ($' + (multiplierCost) + ')'


function Click() {
  balance += (1 * multiplier);
  updateCount();
  document.getElementById('collectmoney').hidden = true;
  document.getElementById('collectmoney').hidden = false;
}



function Upgrade() {
  if (balance >= (multiplierCost * multiplierCostMultiplier)) {

    multiplier += 0.5 * multiplierCostMultiplier;
    balance -= (multiplierCost * multiplierCostMultiplier);

    multiplierCostMultiplier += 1;
    multiplierCost = (multiplierCost * multiplierCostMultiplier);
    updateCount()
    document.getElementById('Multiplier').innerText = 'Upgrade Multiplier ($' + (multiplierCost * multiplierCostMultiplier) + ')'
  }
}

function updateCount() {
  document.getElementById('Text').innerText = '$' + balance;
  //console.log(balance) (for debug purposes)
}
