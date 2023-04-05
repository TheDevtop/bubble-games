const storyAreaID = "storyArea";
const itemID = "story"

function saveStory() {
    const text = document.getElementById(storyAreaID).value;
    localStorage.setItem(itemID, text);
    console.log("Saved story");
}

function loadStory() {
    const content = localStorage.getItem(itemID);
    const element = document.getElementById(storyAreaID);
    element.value = content;
    console.log("Loaded story");
}


function Main() {
    console.log("Called: Main()")
}