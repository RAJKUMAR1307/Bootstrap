//Send feedback start
function send(){
     var feedback1234 = document.getElementById("feed1234").value;
     var status;   
      
           if (feedback1234 =="" || feedback1234.length <= 10){ 
             document.getElementById("feed_back1234").innerHTML="Please fill up your feedback";
             status= false;
           }
           else { 
           document.getElementById("feed_back1234").innerHTML="";
           status= false;
           }
 
 
           if(!feedback1234== "" ){
           document.getElementById("feed_back1234").value="";
           status=true;
           alert("Thankyou for your feedback");
           location.reload();
          }
         }
//Send feedback end

//upload files starts
 function sc(){
    alert("file uploaded successfully");
    location.reload();
}
 //upload files end


 //update profile starts
 function we(){
    var collegename1 = document.getElementById("Colname1").value;
    var username1 = document.getElementById("usename1").value;
    var password1 = document.getElementById("pasword1").value;
    var clgphonenumber1 = document.getElementById("cphoneno1").value;
    var clgaddress1 = document.getElementById("adds1").value;
      var status;   
       
        
            if (collegename1 ==""|| collegename1.length <= 10){     
                document.getElementById("College1_name").innerHTML="Please fill up your College name";
                status =false;
            }
            else 
            {
              document.getElementById("College1_name").innerHTML="";
              status= false;
            }
  
            if (username1 =="" || username1.length <= 6){ 
              document.getElementById("u1_name").innerHTML="Please fill up your username";
              status= false;
            }
            else { 
            document.getElementById("u1_name").innerHTML="";
            status= false;
            }
  
            if (password1 =="" || password1.length <= 6){ 
              document.getElementById("pas1_word").innerHTML="Please fill up your password";
              status= false;
            }
            else { 
            document.getElementById("pas1_word").innerHTML="";
            status= false;
            }
  
  
            const phoneno = /^\d{10}$/
            if (clgphonenumber1 ==""  ){ 
              document.getElementById("cp1_num").innerHTML="Please fill up your College Phone Number";
              status= false;
            }
            else if (phoneno.test(clgphonenumber1)){
            document.getElementById("cp1_num").innerHTML="";
              }
              else{
                document.getElementById("cp1_num").innerHTML="Please enter valid College Phone Number";
                status= false;
  
              }
  
            if (clgaddress1 =="" || clgaddress1.length <= 10){ 
              document.getElementById("clg1_address").innerHTML="Please fill up your College Address";
              status= false;
            }
            else { 
            document.getElementById("clg1_address").innerHTML="";
            status= false;
            }
  
  
            if(!collegename1 == "" && !username1 == "" && !password1 == "" && phoneno.test(clgphonenumber1) && !clgaddress1 == "" ){
            document.getElementById("College1_name").value="";
            document.getElementById("u1_name").value="";
            document.getElementById("pas1_word").value="";
            document.getElementById("cp1_num").value="";
            document.getElementById("clg1_address").value="";
            status=true;
            alert("College Profile Updated successfully");
            location.reload();
           }
          }
 //update profile end

 //Add Faculty start
 function fac(){
    var facultyname = document.getElementById("facname").value;
    var qualification = document.getElementById("quali").value;
    var experience = document.getElementById("exper").value;
    var skillset = document.getElementById("skill").value;
      var status;   
       
        
            if (facultyname ==""|| facultyname.length <= 6){     
                document.getElementById("fac_name").innerHTML="Please fill up faculty name";
                status =false;
            }
            else 
            {
              document.getElementById("fac_name").innerHTML="";
              status= false;
            }
  
            if (qualification =="" || qualification.length <= 2){ 
              document.getElementById("quali_name").innerHTML="Please fill up qualification";
              status= false;
            }
            else { 
            document.getElementById("quali_name").innerHTML="";
            status= false;
            }
  

            const exp = /^\d{1}$/
            if (experience ==""  ){ 
              document.getElementById("exper_name").innerHTML="Please fill up experience";
              status= false;
            }
            else if (exp.test(experience)){
            document.getElementById("exper_name").innerHTML="";
              }
              else{
                document.getElementById("exper_name").innerHTML="Please enter valid experience";
                status= false;
  
              }


            if (skillset =="" || skillset.length <= 6){ 
              document.getElementById("skill_set").innerHTML="Please fill up skillset";
              status= false;
            }
            else { 
            document.getElementById("skill_set").innerHTML="";
            status= false;
            }
  
  
            
  
            if(!facultyname == "" && !qualification == "" && exp.test(experience)  && !skillset == ""){
            document.getElementById("fac_name").value="";
            document.getElementById("quali_name").value="";
            document.getElementById("exper_name").value="";
            document.getElementById("skill_set").value=""; 
            status=true;
            alert("Faculty added successfully");
            location.reload();
           }
          }

 //Add Faculty end

 //Update Faculty information start

 function fac1(){
    var facultyname1 = document.getElementById("facname1").value;
    var qualification1 = document.getElementById("quali1").value;
    var experience1 = document.getElementById("exper1").value;
    var skillset1 = document.getElementById("skill1").value;
      var status;   
       
        
            if (facultyname1 ==""|| facultyname1.length <= 6){     
                document.getElementById("fac_name1").innerHTML="Please fill up faculty name";
                status =false;
            }
            else 
            {
              document.getElementById("fac_name1").innerHTML="";
              status= false;
            }
  
            if (qualification1 =="" || qualification1.length <= 2){ 
              document.getElementById("quali_name1").innerHTML="Please fill up qualification";
              status= false;
            }
            else { 
            document.getElementById("quali_name1").innerHTML="";
            status= false;  
            }
  

            const exp1 = /^\d{1}$/
            if (experience1 ==""  ){ 
              document.getElementById("exper_name1").innerHTML="Please fill up experience";
              status= false;
            }
            else if (exp1.test(experience1)){
            document.getElementById("exper_name1").innerHTML="";
              }
              else{
                document.getElementById("exper_name1").innerHTML="Please enter valid experience";
                status= false;
  
              }


            if (skillset1 =="" || skillset1.length <= 6){ 
              document.getElementById("skill_set1").innerHTML="Please fill up skillset";
              status= false;
            }
            else { 
            document.getElementById("skill_set1").innerHTML="";
            status= false;
            }
  
  
            
  
            if(!facultyname1 == "" && !qualification1 == "" && exp1.test(experience1)  && !skillset1 == ""){
            document.getElementById("fac_name1").value="";
            document.getElementById("quali_name1").value="";
            document.getElementById("exper_name1").value="";
            document.getElementById("skill_set1").value=""; 
            status=true;
            alert("Faculty updated successfully");
            location.reload();
           }
          }

 //Update Faculty information end