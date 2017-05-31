/* a simple script to create a redirect for a retired site but allow 
   staff a means to bypass the redirect

   This fits a very specific purpose for use as an external js in Summon 
   but may be adapted for other needs
   
   Simply add this to the .js file that you have Summon pull in externally

   We are expecting a URL like:
   https://stthomas.summon.serialssolutions.com/?legacydata#!/
    OR
   http://yourdomain.com/?legacydata
   
   All other requests will redirect to a new landing page explaining why there was a redirect

   ?yournameisjedi#!/ and ?YourNameisgod#!/ works too when you need a powertrip :)
*/

// customize this
var newLocation = "http://clic.edu/clicsearch"; // if invoked, this is where you want visitor to land

var qs=window.location.search.substring(1).toLowerCase();

console.log("Query String: "+qs);

if(qs === "legacydata" || qs.endsWith("isjedi") || qs.endsWith("isgod") ){
	console.log("Remember... the Force will be with you, always. No Redirect");
} else {
	console.log("These aren't the droids you're looking for. Redirect");
	window.location.replace(newLocation);
}
