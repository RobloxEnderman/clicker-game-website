let balance = 0;
let multiplier = 0.5;

function Click() {
  balance += (1 * multiplier);
  updateCount();
  document.getElementById('collectmoney').hidden = true;
  document.getElementById('collectmoney').hidden = false;
}


var multiplierCostMultiplier = 1;

function Upgrade() {
  if (balance >= (10 * multiplierCostMultiplier)) {

    multiplier += 0.5 * multiplierCostMultiplier;
    balance -= (10 * multiplierCostMultiplier);

    multiplierCostMultiplier += 1;
    multiplierCost = (10 * multiplierCostMultiplier);
    updateCount()
    document.getElementById('Multiplier').innerText = 'Upgrade Multiplier ($' + (multiplierCost) + ')'
  }
}

function updateCount() {
  document.getElementById('Text').innerText = '$' + balance;
  //console.log(balance) (for debug purposes)
}
