const { nanoid } = require("nanoid");
const itemsPurchased  = require("../data/purchases-points.json")


function create (purchases, purchaseName) {
    const purchase = { id: nanoid(4), 
        
        name: purchaseName,
        priceAmount: itemsPurchased[purchaseName].price,
        donationAmount: itemsPurchased[purchaseName].donation

        
    };
    
    purchases.push(purchase);
    
    return purchases
}

function index (purchases) {
    return purchases.map((purchase) => purchase.id + " " + purchase.name).join("\n")
}

function show (purchases, purchaseId) {
    
    const foundPurchase = purchases.find((purchase) => purchase.id === purchaseId) ;
    
    return foundPurchase.id + " " + foundPurchase.name + " " + foundPurchase.priceAmount + " price "  + foundPurchase.donationAmount
}

function destroy (purchases, purchaseId) {
    
   const index =  purchases.findIndex((purchase) => purchase.id === purchaseId);
    
   if (index > -1) {
    
    purchases.splice(index, 1);
    console.log("we deleted your purchase");
    
    return purchases
   } else {
    console.log("couldnt find a purchase with that id")
   }
}

function update (purchases, purchaseId, updatedPurchase, updatedDonation ) {
  
    const index =  purchases.findIndex((purchase) => purchase.id === purchaseId);
    
    if (index > -1) {
        
       purchases[index].id = purchaseId;
       
       purchases[index].name = updatedPurchase;
       
       purchases[index].priceAmount = itemsPurchased[updatedPurchase];

       purchases[index].donationAmount = itemsPurchased[updatedDonation]
       console.log("your purchase has been updated");
      
       return purchases
   } else {
     console.log("couldnt find a purchase with that id")
    }
   
}

function score (purchases) {
   
    const total = purchases.reduce((a,b) => (a + b.donationAmount), 0)
    
    return total
}

module.exports = {
   create,
   index, 
   show,
   destroy,
   update,
   score
}
