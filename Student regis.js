  //update profile starts
  function we1(){
    var firstname1 = document.getElementById("fname1").value;
    var lastname1 = document.getElementById("lname1").value;
    var username1 = document.getElementById("usname1").value;
    var password1 = document.getElementById("psword1").value;
    var mobilenumber1 = document.getElementById("phoneno1").value;
    var email1 = document.getElementById("emailid1").value;
    var address1 = document.getElementById("add1").value;
      var status;   
       
        
            if (firstname1 ==""){     
                document.getElementById("first_error1").innerHTML="Please fill up your first name";
                status =false;
            }
            else 
            {
              document.getElementById("first_error1").innerHTML="";
              status= false;
            }
            
      
            if (lastname1 ==""){ 
              document.getElementById("last_error1").innerHTML="Please fill up your last name";
              status= false;
            }
            else { 
            document.getElementById("last_error1").innerHTML="";
            status= false;
            }
  
            if (username1 =="" || username1.length <= 6){ 
              document.getElementById("user_name1").innerHTML="Please fill up your username";
              status= false;
            }
            else { 
            document.getElementById("user_name1").innerHTML="";
            status= false;
            }
  
            if (password1 =="" || password1.length <= 6){ 
              document.getElementById("pass_word1").innerHTML="Please fill up your password";
              status= false;
            }
            else { 
            document.getElementById("pass_word1").innerHTML="";
            status= false;
            }
  
  
            const phoneno1 = /^\d{10}$/
            if (mobilenumber1 ==""  ){ 
              document.getElementById("mobile_number1").innerHTML="Please fill up your Mobile Number";
              status= false;
            }
            else if (phoneno1.test(mobilenumber1)){
            document.getElementById("mobile_number1").innerHTML="";
              }
              else{
                document.getElementById("mobile_number1").innerHTML="Please enter valid Mobile Number";
                status= false;
  
              }
  
            const mailo1 = /^([a-zA-Z0-9-_\.]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,10})(\.[a-zA-Z]{2,8})?$/
            if (email1 =="" ){ 
              document.getElementById("mail_error1").innerHTML="Please fill up your e-mail";
              status= false;
            }
            else if (mailo1.test(email1)){
              document.getElementById("mail_error1").innerHTML="";
                }
            else { 
            document.getElementById("mail_error1").innerHTML="Please enter valid e-mail";
            
            }
  
            if (address1 =="" || address1.length <= 10){ 
              document.getElementById("add_error1").innerHTML="Please fill up your Address";
              status= false;
            }
            else { 
            document.getElementById("add_error1").innerHTML="";
            status= false;
            }
  
  
            if(!firstname1 == "" && !lastname1 == "" && !username1 == "" && !password1 == "" && phoneno1.test(mobilenumber1) && mailo1.test(email1) && !address1== "" ){
            document.getElementById("first_error1").value="";
            document.getElementById("last_error1").value="";
            document.getElementById("user_name1").value="";
            document.getElementById("pass_word1").value="";
            document.getElementById("mobile_number1").value="";
            document.getElementById("mail_error1").value="";
            document.getElementById("add_error1").value="";
            status=true;
            alert("Student profile Updated successfully");
            location.reload();
           }
          }
 //update profile end

 //Send Request start

 function ser(){
    var username12 = document.getElementById("usname12").value;
    var address12 = document.getElementById("add12").value;
      var status;   
       
  
            if (username12 =="" || username12.length <= 6){ 
              document.getElementById("user_name12").innerHTML="Please fill up your username";
              status= false;
            }
            else { 
            document.getElementById("user_name12").innerHTML="";
            status= false;
            }
  
            if (address12 =="" || address12.length <= 10){ 
              document.getElementById("add_error12").innerHTML="Please fill up your request";
              status= false;
            }
            else { 
            document.getElementById("add_error12").innerHTML="";
            status= false;
            }
  
  
            if(!username12 == "" && !address12== "" ){
            document.getElementById("user_name12").value="";
            document.getElementById("add_error12").value="";
            status=true;
            alert("Request sent successfully");
            location.reload();
           }
          }

 //Send Request end

 //Send feedback start

 function sef(){
    var feedback123 = document.getElementById("feed123").value;
      var status;   
       
            if (feedback123 =="" || feedback123.length <= 10){ 
              document.getElementById("feed_back123").innerHTML="Please fill up your feedback";
              status= false;
            }
            else { 
            document.getElementById("feed_back123").innerHTML="";
            status= false;
            }
  
  
            if(!feedback123== "" ){
            document.getElementById("feed_back123").value="";
            status=true;
            alert("Thankyou for your feedback");
            location.reload();
           }
          }

 //Send feedback end