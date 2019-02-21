'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();

});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("button").click(projectClick);
}

function projectClick() { 
    // prevent the page from reloading      
    
    // In an event handler, $(this) refers to      
    // the object that triggered the event      
    $(this).ga("send", "event", 'like', 'click');
    
}