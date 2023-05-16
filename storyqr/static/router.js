import { topbar } from "./views/topbar.js";
import { loadDB } from "./dbstuff.js";
import { mainStoryView } from "./views/mainStoryView.js";
import { createStoryView } from "./views/createStoryView.js";
import { editStoryView } from "./views/editStoryView.js";
import { background } from "./views/background.js";
import { bgCustomiserView } from "./views/bg_customiser.js";

//router class for navigation
let idFlag;

class Router {
    constructor(){
        this.routes=new Map();
    }

    addPath(path, callback){
        this.routes.set(path, callback);
    }
    
    navigate = function (path, searchParams = null) {

        if (this.routes.has(path)) {
          let newPath = window.location.pathname;
          if (path !== 'home') {
            newPath = newPath.endsWith('/') ? `${newPath}${path}` : `${newPath}/${path}`;
          } else {
            newPath = '/';
          }
    
          if (searchParams) {
            const updatedSearchParams = new URLSearchParams(searchParams);
            history.pushState({ route: path }, "", `${newPath}?${updatedSearchParams.toString()}`);
          } else {
            history.pushState({ route: path }, "", newPath);
          }
          this.routes.get(path)(searchParams);
        } else {
          console.error(`No route found for "${path}"`);
        }
      };
}
const db = await loadDB();

const currentID = new URLSearchParams(window.location.search).get('id');
//check if id is in db and set the id flag
idFlag= db.some((story) => story.id == currentID);
const router = new Router();
const contentContainer = document.getElementById('content');
window.story= db.find((story) => story.id == currentID);
const eventHandlers = {
  "saveStory": saveStory,
  "changeAuthor": changeAuthor,
 "preview": mainStoryView,
 "changeBgColor": refreshPage,
 /* "editName": changeName,*/
};

//set up routes
router.addPath('home',()=>{
 
    if (!window.story) {
        window.story= 
        {
            "id": currentID,
            "date": new Date().toJSON().slice(0, 10),
            "type": "story",
            "story": "",
            "author": "Name Here",
            "avatar": {
                  "top": 1,
                    "facialHair": 1,
                    "hair": 1,
                    "eyes": 1,
                    "skin": 1
            } , "background":{
              "type":0,
              "color":3
            }
        }
    }
    else{
        
    }
   console.log(idFlag)
   contentContainer.innerHTML= background(window.story.background.type);
   contentContainer.innerHTML += topbar(window.story);
    contentContainer.innerHTML += idFlag ? mainStoryView(window.story) :createStoryView();

});
router.addPath("story", () => {
  contentContainer.innerHTML= background(window.story.background.type)
    contentContainer.innerHTML += topbar(window.story);
    contentContainer.innerHTML += editStoryView();
  });

router.addPath("preview", () => {
  contentContainer.innerHTML= background(window.story.background.type);
    contentContainer.innerHTML += topbar(window.story);
  contentContainer.innerHTML += mainStoryView(window.story);
});

router.addPath("publish", () => {
  //add story to db  here by creating the function in dbstuff.js and calling it here
  contentContainer.innerHTML= background(window.story.background.type);
    contentContainer.innerHTML += topbar(window.story);
    contentContainer.innerHTML += mainStoryView(window.story);
  });

  router.addPath("customise", () => {
    contentContainer.innerHTML= background(window.story.background.type);
    contentContainer.innerHTML += topbar(window.story);
    contentContainer.innerHTML += bgCustomiserView();
  });
  
  function refreshPage() {
    contentContainer.innerHTML= background(window.story.background.type);
    contentContainer.innerHTML += topbar(window.story);
    contentContainer.innerHTML += bgCustomiserView();
  }


// Initial navigation
const initialSearchParams = new URLSearchParams(window.location.search);
const initialRoute = initialSearchParams.get('page') || 'home';
router.navigate(initialRoute, initialSearchParams);

// Handle navigation via button clicks
window.navigateOnClick = function (button) {

  const route = button.dataset.route;

  const searchParams = new URLSearchParams(window.location.search);

  console.log(searchParams);

  const baseUrl = "http://192.168.10.3/storyscapes";

  const newUrl = `${baseUrl}/${route}?${searchParams.toString()}`;

  window.location.href = newUrl;

};

function saveStory(){

    window.story.story=document.getElementById("storyArea").value;
    console.log(window.story)
    const route = "home";
    const searchParams = new URLSearchParams(window.location.search);
  
    router.navigate(route, searchParams);
}
  // Add an event listener to the content container
contentContainer.addEventListener("click", (event) => {
  const target = event.target;
  const handlerName = target.getAttribute("data-handler");
  console.log(handlerName);
  const handler = eventHandlers[handlerName];
  if (handler) {
    handler();
  }
});
function changeAuthor() {
  if (!idFlag) {
    const div = document.getElementById("story_top_name");
    const newName = prompt("Please enter the new author name:");
  
    if (newName !== null && newName.trim() !== "") {
        div.innerHTML = newName;
        window.story.author = newName;
    } else {
        alert("Invalid author name. Please try again.");
    }
  }
  }
