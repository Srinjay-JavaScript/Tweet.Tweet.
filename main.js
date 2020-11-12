



   function background_change(){
    console.log("please");
    var background_images = ["tm.jpg", "Burj-Khalifa.jpg", "sol.jpg", "paris.jpg"];
    var random_number = Math.floor(Math.random() *4);
    var background_image =  background_images[random_number];
    console.log(background_image);
    if (background_image == "paris.jpg"){
        document.getElementById("overlay").style.left = "-100%";
    }
    else if (background_image == "sol.jpg"){
        document.getElementById("overlay").style.left = "-40%";
    }
    else{
        document.getElementById("overlay").style.left = "-50%"; 
    }
    document.getElementById("overlay").style.backgroundImage = "url(" + background_image +")";
}

function Alertcheck(){
    var user_name = document.getElementById("user_name").value;
    var userPaswordvalue = document.getElementById("user_password").value;
    var userPasswordCharacters = userPaswordvalue.length;
    if (user_name == ""){
        if (userPaswordvalue == ""){
            window.alert("Both fields are required.")
        }
        else{
        window.alert("Username is required.");
        }
    }
    else if (userPaswordvalue == ""){
        if (user_name == ""){
            window.alert("Both fields are required.");
        }
        else{
            window.alert("Password is required."); 
        }  
    }
     else{
        if (userPasswordCharacters < 8){
            window.alert("Password should be a minimum of 8 characters.");
           }
           else{
               localStorage.setItem("user_name", user_name);
               localStorage.setItem("user_password", userPaswordvalue);
               window.location = "TweetTweet.html";
           }
    }
    // if (userPasswordCharacters < 8){
    //  window.alert("Password should be a minimum of 8 characters.");
    // }
    // else{
    //     localStorage.setItem("user_name", user_name);
    //     localStorage.setItem("user_password", userPaswordvalue);
    //     window.location = "TweetTweet.html";
    // }
}
$(document).ready(function(){
                 $('[data-toggle="tooltip"]').tooltip();
               });
