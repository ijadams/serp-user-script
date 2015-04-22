$(document).ready(function(){
   var domain = "";

   var placeholder = localStorage(domain);
   		if (placeholder != "") {
   			 domain = window.prompt('What domain are you looking for?', placeholder);
   			    localStorage['domain'] = domain;

   		} else {
   			 domain = window.prompt('What domain are you looking for?', 'example.com');
   			    localStorage['domain'] = domain;

   		}
   window.alert(get_serp(domain));
})


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
  for (i=0;i<results.length;i++) {
    //convert html dom to string
    text_result=results[i].textContent;
      //search string for hostname
      if (text_result.search(hostname) != -1) {
          return i+start+1;
      } else {
         /* not in the array */
         return "Not found";
      }

  }}
