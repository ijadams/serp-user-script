// ==UserScript==
// @name         SERP Checker
// @version      1
// @description  To use, press CTRL+R on a page of Google Search Results
// @author       Ian
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @match https://www.google.com/*
// ==/UserScript==



$(document).ready(function() {

//hold buttons down to activate
var down = [];
$(document).keydown(function(e) {
   down[e.keyCode] = true;
}).keyup(function(e) {
   if (down[17] && down[82]) {
       main()
   }
   down[e.keyCode] = false;
   down[17] = false;
});


function get_serp(hostname) {
 //declare hostname to search for
 var hostname = hostname;
 //Get all HTML DOMs for domain names
 results = document.getElementsByClassName('_Rm');
 //See if what page user is searching on
 start_match = document.location.href.match(/start=(\d+)/);
      if(start_match) {
            //Accounting for start page
            start = parseInt(start_match[1]);
           } else {
            start = 0;
           }
 //loop through results
 var answer = 'not found'
 for (i=0;i<results.length;i++) {
   //convert html dom to string
   text_result=results[i].textContent;
     //search string for hostname
     if (text_result.search(hostname) != -1) {
         return answer = i+start+1;
     }
     	//not found
 } return answer;
}


function main(){
         var domain = "";

          var placeholder = window.localStorage.getItem('domain');
             if (placeholder != "") {
                domain = window.prompt('What domain are you looking for?', placeholder);
                   localStorage['domain'] = domain;
                             window.alert(get_serp(domain));


             } else {
                domain = window.prompt('What domain are you looking for?', 'example.com');
                   localStorage['domain'] = domain;
                             window.alert(get_serp(domain));


             }
        }

    
 });



