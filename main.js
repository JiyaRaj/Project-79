menu_list_array = ["Veg Margherita Pizza",
                        "Chicken Tandoori Pizza",
                        "Veg Supreme Pizza",
                        "Paneer Tikka Pizza",
                        "Deluxe Veggie Pizza",
                        "Veg Extravaganza Pizza"];
    
    function getmenu(){
        var htmldata="<ol class='menu_list'>";
        menu_list_array.sort();
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+'<li>'+ menu_list_array[i] + '</li>'
        }
        document.getElementById("display_menu").innerHTML = htmldata;
        htmldata=htmldata+"</ol>"
    }

    function add_item(){
        var htmldata;
		var imgtags='<img id="im1" src="pizzaImg.png">'
        var item=document.getElementById("add_item").value;
        menu_list_array.push(item);
        menu_list_array.sort();
        htmldata="<section class='cards'>";
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+'<div class="card">'+ '<img src="pizzaImg.png" style="height: 40px; width: 40px;"/>'+ menu_list_array[i]+'</div>';
        }
         
         
         htmldata=htmldata+"</section>"
         document.getElementById("display_addedmenu").innerHTML=htmldata;
         document.getElementById("add_item").value="";
         
    }

    function add_top(){
        var htmldata;
		var imgtags='<img id="im1" src="pizzaImg.png">'
        var item=document.getElementById("add_item").value;
        menu_list_array.push(item);
        menu_list_array.sort();
        htmldata="<section class='cards'>";
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+'<div class="card">'+ '<img src="pizzaImg.png" style="height: 40px; width: 40px;" />'+ menu_list_array[i]+'</div>';
        }
         
         
         htmldata=htmldata+"</section>"
         document.getElementById("display_addedmenu").innerHTML=htmldata;
         document.getElementById("add_item").value="";
         
    }

    

