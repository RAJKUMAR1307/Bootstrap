//login page start

function fn1(){
var username = document.getElementById("use").value;
var password = document.getElementById("passw").value;
  var status;   
   
    if(document.getElementById("radio1").checked){
        if (username="" || username.length <= 9){     
            document.getElementById("user_error").innerHTML="Please fill up username";
            status =false;
        }
  
       else if (password="" || password.length <= 9){ 
        document.getElementById("user_error").innerHTML="";
          document.getElementById("pass_error").innerHTML="Please fill up password";
          status= false;
       }
       else{
        document.getElementById("user_error").innerHTML="";
        document.getElementById("pass_error").innerHTML="";
        status=true;
        alert("Admin logged in successfully");
        window.open("adminlogin.html");
        location.reload();
       }
    }
   else if(document.getElementById("radio2").checked){
        if (username="" || username.length <= 9){     
            document.getElementById("user_error").innerHTML="Please fill up username";
            status =false;
        }
  
       else if (password="" || password.length <= 9){ 
        document.getElementById("user_error").innerHTML="";
          document.getElementById("pass_error").innerHTML="Please fill up password";
          status= false;
       }
       else{
           
        document.getElementById("user_error").innerHTML="";
        document.getElementById("pass_error").innerHTML="";
        status=true;
        alert("college logged in successfully");
        window.open("college login.html");
        location.reload();

       }
    }
    else if(document.getElementById("radio3").checked){
        if (username="" || username.length <= 9){     
            document.getElementById("user_error").innerHTML="Please fill up username";
            status =false;
        }
  
       else if (password="" || password.length <= 9){ 
          document.getElementById("user_error").innerHTML="";
          document.getElementById("pass_error").innerHTML="Please fill up password";
          status= false;
       }
       else{
        document.getElementById("user_error").innerHTML="";
        document.getElementById("pass_error").innerHTML="";
        status=true;
        alert("Student logged in successfully");
        window.open("Student login.html");
        location.reload();

       }
    }
    }
    //login page end

//college registration page start

function fnc(){
  var collegename = document.getElementById("Colname").value;
  var username = document.getElementById("usename").value;
  var password = document.getElementById("pasword").value;
  var clgphonenumber = document.getElementById("cphoneno").value;
  var clgaddress = document.getElementById("adds").value;
    var status;   
     
      
          if (collegename ==""|| collegename.length <= 10){     
              document.getElementById("College_name").innerHTML="Please fill up your College name";
              status =false;
          }
          else 
          {
            document.getElementById("College_name").innerHTML="";
            status= false;
          }

          if (username =="" || username.length <= 6){ 
            document.getElementById("u_name").innerHTML="Please fill up your username";
            status= false;
          }
          else { 
          document.getElementById("u_name").innerHTML="";
          status= false;
          }

          if (password =="" || password.length <= 6){ 
            document.getElementById("pas_word").innerHTML="Please fill up your password";
            status= false;
          }
          else { 
          document.getElementById("pas_word").innerHTML="";
          status= false;
          }


          const phoneno = /^\d{10}$/
          if (clgphonenumber ==""  ){ 
            document.getElementById("cp_num").innerHTML="Please fill up your College Phone Number";
            status= false;
          }
          else if (phoneno.test(clgphonenumber)){
          document.getElementById("cp_num").innerHTML="";
            }
            else{
              document.getElementById("cp_num").innerHTML="Please enter valid College Phone Number";
              status= false;

            }

          if (clgaddress =="" || clgaddress.length <= 10){ 
            document.getElementById("clg_address").innerHTML="Please fill up your College Address";
            status= false;
          }
          else { 
          document.getElementById("clg_address").innerHTML="";
          status= false;
          }


          if(!collegename == "" && !username == "" && !password == "" && phoneno.test(clgphonenumber) && !clgaddress == "" ){
          document.getElementById("College_name").value="";
          document.getElementById("u_name").value="";
          document.getElementById("pas_word").value="";
          document.getElementById("cp_num").value="";
          document.getElementById("clg_address").value="";
          status=true;
          alert("College registered successfully");
          location.reload();
         }
        }
  
      //college registration page end

     
       //students registration page start

  function fns(){
    var firstname = document.getElementById("fname").value;
    var lastname = document.getElementById("lname").value;
    var username = document.getElementById("usname").value;
    var password = document.getElementById("psword").value;
    var mobilenumber = document.getElementById("phoneno").value;
    var email = document.getElementById("emailid").value;
    var address = document.getElementById("add").value;
      var status;   
       
        
            if (firstname ==""){     
                document.getElementById("first_error").innerHTML="Please fill up your first name";
                status =false;
            }
            else 
            {
              document.getElementById("first_error").innerHTML="";
              status= false;
            }
            
      
            if (lastname ==""){ 
              document.getElementById("last_error").innerHTML="Please fill up your last name";
              status= false;
            }
            else { 
            document.getElementById("last_error").innerHTML="";
            status= false;
            }
  
            if (username =="" || username.length <= 6){ 
              document.getElementById("user_name").innerHTML="Please fill up your username";
              status= false;
            }
            else { 
            document.getElementById("user_name").innerHTML="";
            status= false;
            }
  
            if (password =="" || password.length <= 6){ 
              document.getElementById("pass_word").innerHTML="Please fill up your password";
              status= false;
            }
            else { 
            document.getElementById("pass_word").innerHTML="";
            status= false;
            }
  
  
            const phoneno = /^\d{10}$/
            if (mobilenumber ==""  ){ 
              document.getElementById("mobile_number").innerHTML="Please fill up your Mobile Number";
              status= false;
            }
            else if (phoneno.test(mobilenumber)){
            document.getElementById("mobile_number").innerHTML="";
              }
              else{
                document.getElementById("mobile_number").innerHTML="Please enter valid Mobile Number";
                status= false;
  
              }
  
            const mailo = /^([a-zA-Z0-9-_\.]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,10})(\.[a-zA-Z]{2,8})?$/
            if (email =="" ){ 
              document.getElementById("mail_error").innerHTML="Please fill up your e-mail";
              status= false;
            }
            else if (mailo.test(email)){
              document.getElementById("mail_error").innerHTML="";
                }
            else { 
            document.getElementById("mail_error").innerHTML="Please enter valid e-mail";
            
            }
  
            if (address =="" || address.length <= 10){ 
              document.getElementById("add_error").innerHTML="Please fill up your Address";
              status= false;
            }
            else { 
            document.getElementById("add_error").innerHTML="";
            status= false;
            }
  
  
            if(!firstname == "" && !lastname == "" && !username == "" && !password == "" && phoneno.test(mobilenumber) && mailo.test(email) && !address== "" ){
            document.getElementById("first_error").value="";
            document.getElementById("last_error").value="";
            document.getElementById("user_name").value="";
            document.getElementById("pass_word").value="";
            document.getElementById("mobile_number").value="";
            document.getElementById("mail_error").value="";
            document.getElementById("add_error").value="";
            status=true;
            alert("Student registered successfully");
            location.reload();
           }
          }
    
        //students registration page end