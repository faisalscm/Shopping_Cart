
// UPDATE phn and case number and price

function updateProductNumber(product,price,isIncreasing){
        const productInput = document.getElementById(product +'-number');
        let productNumber = productInput.value;
       if(isIncreasing == true){
         productNumber = parseInt(productNumber)+1;

       }

       else if (productNumber>0)
       {
         productNumber = parseInt(productNumber)-1;

       }
       productInput.value = productNumber;
       // update total
       const previousTotal = document.getElementById(product +'-total');
       previousTotal.innerText = productNumber*price;
      //  total product calculation
       productCalculation();
      }

      // update total price 
      //product number
      function productNumber(product){
       productInput = document.getElementById(product+'-number');
       productValue = parseInt(productInput.value);
       return productValue;
       console.log(productValue);

 }

 // product total calculation

 function productCalculation(){
const phoneTotal =productNumber('phone')*1219;
console.log(phoneTotal);
const caseTotal = productNumber('case')*59;
const subTotal = phoneTotal+caseTotal;
const tax = subTotal/10;
const totalPrice = subTotal+tax;
// update total to html

document.getElementById('sub-total').innerText = subTotal;
document.getElementById('tax-amount').innerText = tax;
document.getElementById('total-price').innerText = totalPrice;

 }

/// for phone handeling increase and decrese
//plus addition 
document.getElementById('phone-plus').addEventListener('click',function(){
updateProductNumber('phone',1219,true);
   
})

//minus sub
document.getElementById('phone-minus').addEventListener('click',function(){
updateProductNumber('phone',1219,false);
  
});

///for case handeling increase or decrease

document.getElementById('case-plus').addEventListener('click',function(){
  updateProductNumber('case',59,true);
     
  })

  document.getElementById('case-minus').addEventListener('click',function(){
    updateProductNumber('case',59,false);
      
    });
