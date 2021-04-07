/*
Some JavaScript to cause some updates to the page so that Selenium
can check against updates to the page.
Author: Jacqueline Button.
*/

/*
 Fills the action_target div with some text
 and enables it.
 */
function fillActionTarget() {
    document.getElementById("action_target").style.display = "block";
    document.getElementById("action_target").innerHTML = "You did it! You Clicked The Button!";
}

/*
 Empties the action_target div and disables it.
*/
function emptyActionTarget() {
    document.getElementById("action_target").style.display = "none";
    document.getElementById("action_target").innerHTML = "";
}