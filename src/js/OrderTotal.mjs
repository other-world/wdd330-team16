export function itemsTotal(items) {
    // Work out the total
    const totalArray = items.map((item) => calculateTotal(item));
    let total = 0;
    totalArray.forEach(price => {
    total += price;
    });
    //console.log(total);
    return total;
}

function calculateTotal(item){
  return item.FinalPrice * item.qty;
}