import {getBgColorClass} from "./background.js";
//function to make the html for the story, takes in a db object given by app.js
export function mainStoryView(dbpost,readonly="readonly"){

    localStorage.setItem("story", JSON.stringify(story));
    
    return `
    <div class="story">
                
                <div id="story_middle">

                <div id="story_middle_avatar">
                <div id="story_middle_avatar_pic">
                <img id="story_middle_avatar_img" src="images/woman.png" alt="">
                </div>
            </div> 
                    <div id="my_story">
                        <textarea ${readonly} id="storyArea">${story.story}</textarea>
                    </div>
                </div>
                <div id="outer_audio">
                    <div style="filter:hue-rotate(${getBgColorClass()})" id="story_btm">
                        <img id="icon_play" src="images/icons8-play-100.png">
                        <div id="story_btm_button1">
                        </div>
                    </div>
                </div>
            </div>
    `
                
    
    }