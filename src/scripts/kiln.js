export const firePottery = (pottery, fire) => {

    if (fire > 2200) {
        pottery.cracked = true
    } else {
        pottery.cracked = false
    }
    pottery.fired = true

    return pottery

}