let potteryID = 1

export const makePottery = (shape, weight, height) => {
    const newPottery = {
    shape: shape,
    weight: weight,
    height: height,
    id: potteryID,
    }
    potteryID++
    return newPottery
    
}