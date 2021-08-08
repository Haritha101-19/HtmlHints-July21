var options = {    
    "key": "rzp_test_2lAFc6jwnQ9jgW", // Enter the Key ID generated from the Dashboard   
     
    "amount": "4000000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise    
    
    "currency": "INR",  
    
    "name": "Mistalee Mobiles", 
       
    "description": "Test Transaction",
        
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7yIU4Ngk9X4GaRN_mjOvMdYkXFw9yHLv-OQ&usqp=CAU", 
       
    "order_id": "", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        
    "handler": function (response){        
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id); 
        alert(response.razorpay_signature)    
    },
        
    "prefill": {        
    "name": "Haritha",       
     "email": "mistaleemobiles@example.com",        
    "contact": "9999999999"    
    }, 
       
    "notes": {       
     "address": "Razorpay Corporate Office"    
    },    
    
    "theme": {        
     "color": "#3399cc"    
    }
};
    
    
var rzp1 = new Razorpay(options);
rzp1.on('payment.failed', function (response){
    alert(response.error.code);
    alert(response.error.description);
    alert(response.error.source);
    alert(response.error.step);
    alert(response.error.reason);
    alert(response.error.metadata.order_id);
    alert(response.error.metadata.payment_id);
})
    
function makePay(){   
    rzp1.open();   
    e.preventDefault();
}