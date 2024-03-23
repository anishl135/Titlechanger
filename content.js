// Get the current title of the tab
var currentTitle = document.title;

// Remove "Major" from the title
var newTitle = currentTitle.replace("Major", "").trim();

// Set the new title
document.title = newTitle;
