// Imports go first
import { makePottery } from "./PotteryWheel.js";
import { toSellOrNotToSell } from "./PotteryCatalog.js";
import { usePottery } from "./PotteryCatalog.js";
import { firePottery } from "./kiln.js";
import { PotteryList } from "./PotteryList.js";
let itemsToSell = []



// Make 5 pieces of pottery at the wheel
let mug = makePottery("Mug", 1, 4);
let bowl = makePottery("Bowl", 4, 3);
let vase = makePottery("Vase", 2, 9);
let platter = makePottery("Platter", 2, 9);
let lampBase = makePottery("LampBase", 60, 92);


// Fire each piece of pottery in the kiln
firePottery(mug, 2000);
firePottery(bowl, 2000);
firePottery(vase, 2900);
firePottery(platter, 2500);
firePottery(lampBase, 2000);


// Determine which ones should be sold, and their price
toSellOrNotToSell(mug);
toSellOrNotToSell(bowl);
toSellOrNotToSell(vase);
toSellOrNotToSell(platter);
toSellOrNotToSell(lampBase);

itemsToSell = usePottery();

// Invoke the component function that renders the HTML list
const potteryHTML = PotteryList(itemsToSell);

const renderPotteryToDOM = (potteryHTML) => {
    const potterylists = document.querySelector('.potteryList');
        if (potterylists) {
            potterylists.innerHTML = potteryHTML;
        } else {
            console.error('Could not find element "potteryList')
        }
}

renderPotteryToDOM(potteryHTML);