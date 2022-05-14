function formatCash(money) {
    if(money >= 1000000000000000){
        let moneyStr = `${Math.round((money / 1000000000000000) * 10) / 10}q`
        return moneyStr;
    } else if(money >= 1000000000000){
        let moneyStr = `${Math.round((money / 1000000000000) * 10) / 10}t`
        return moneyStr;
    } else if(money >= 1000000000){
        let moneyStr = `${Math.round((money / 1000000000) * 10) / 10}b`
        return moneyStr;
    } else if(money >= 1000000){
        let moneyStr = `${Math.round((money / 1000000) * 10) / 10}m`
        return moneyStr;
    } else {
        return money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
}

function updateCash(){
    document.getElementById("userMoney").innerHTML = formatCash(cash);
}
