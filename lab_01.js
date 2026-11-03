function addition(a,b){

    return a+b;
}
console.log("task 1");

console.log(addition(2,1));

function bitwiseAnd(a,b){
    return a&b;
}
console.log("task 2");
console.log(bitwiseAnd(1,2));

 function bitwiseOR(a,b){
     return a|b
 }

function bitwiseXOR(a,b){
   return a^b
}
console.log(bitwiseOR(1,2));
console.log(bitwiseXOR(1,2));


function addUP(a){
    let sum=0;
    for(let i=1;i<=a;i++){
        sum+=i;
    }
    return sum;
}
console.log("task 3");
console.log(addUP(4));

function progressBar(a){
    let filled =0;
    let empty=0;
    let result=" ";
    if (a>=10){
        filled=Math.floor(a/10);
    }
    else{
        filled=0;
    }
    empty=10-filled;
    for(let i=1 ;i<=filled;i++){
        result=result + "#";
    }
    for(let i=1;i<=empty;i++){
        result=result + "-";
    }
    return result;


}
console.log("task 4");
console.log(progressBar(10));


function minMax(arr)
{
let min=Math.min(...arr);
let max=Math.max(...arr);
return [min,max];
}
console.log("task 5");
console.log(minMax([1,2,3,4,5,6]))

function calculateRepoStats(repos){

    let stars = repos.map(function(repo)
    {
        return repo.stars;
    });
    let highest = Math.max(...stars);
    let lowest = Math.min(...stars);
    let total = 0;
    for(let i=0; i<stars.length; i++)
    {
        total = total + stars[i];
    }
    let average = Math.floor(total/stars.length);
    let difference = Math.abs(highest-lowest);
  return{maxStars: highest,
        minStars: lowest,
        avgStars: average,
        varianceScore: difference
    };
}
console.log("task 6");
const repos = 
[   {name: 'repo-a', stars: 12},
    {name: 'repo-b', stars: 45},
    {name: 'repo-c', stars: 3}
];

console.log(calculateRepoStats(repos));
function calculateFinalPrice(basePrice, taxRate, discountPercentage){
   let discount=basePrice * (1 - discountPercentage / 100);
   discount=Math.round(discount*100)/100;
   let price= basePrice-discount;
   let tax= price*taxRate/100;
   tax=Math.round(tax*100)/100;
   let finalprice= price+tax;
   finalprice=Math.round(finalprice*100)/100;
   let loyalitypoints=0;
   while(loyalitypoints<finalprice){
    loyalitypoints++;
   }
   
   return{discountedprice:price,
    tax:tax,
    finalprice:finalprice,
    loyalitypoints:loyalitypoints
   }

}
console.log("task 7");
console.log(calculateFinalPrice(1000,10,20));


function paginateData(items, pageNumber, pageSize = 5) {
let start = (pageNumber - 1) * pageSize;
let data = items.slice(start, start + pageSize);
let totalPages = Math.ceil(items.length / pageSize);
return {
    data: data,
    currentPage: pageNumber,
    totalPages: totalPages,
    hasNext: pageNumber < totalPages,
    hasPrev: pageNumber > 1
 };
}
const allProducts =[
    'Laptop', 'Mouse', 'Keyboard', 'Monitor',
    'Desk', 'Chair', 'Webcam', 'Headphones'
];
console.log("task 8");
console.log(paginateData(allProducts, 2, 3));