
let toBeSold = []

export const toSellOrNotToSell = (pottery) => {
    if (pottery.cracked === false) {
    if (pottery.weight >= 6){
        pottery.price = 40
    }
    else {
        pottery.price = 20 
    }
    toBeSold.push(pottery)
}
return pottery
}

export const usePottery = () => {
    const copyOfToBeSold = toBeSold.map(pottery => pottery)
    return copyOfToBeSold;

}
