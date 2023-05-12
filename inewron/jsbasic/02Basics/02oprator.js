//  D = (L - S)/L *100

//  a + b * c / d * e

var sellingPrice =199;
var listingprce = 799;

var discountpercent =  ((listingprce - sellingPrice) / listingprce) * 100
console.log("discount perventage is:" + discountpercent)
var result = listingprce > sellingPrice;
console.log(typeof result);