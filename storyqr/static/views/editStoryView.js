import { getBgColorClass } from "./background.js";
export function editStoryView(){
    return`
    <div class="story">
           
            <div id="story_middle">
            <div id="story_middle_avatar">
                    <div id="story_middle_avatar_pic">
                    <img id="story_middle_avatar_img" src="images/woman.png" alt="">
                    </div>
                </div>
                <div id="my_story">
                </div>
                </div>
                <div id="text_container">
                    <textarea id="storyArea" placeholder="Enter your message here">${window.story.story}</textarea>
                    <img id="microphone"src="images/icons8-microphone-100.png">
                </div>
                <button style="filter:hue-rotate(${getBgColorClass()})" id="btn_save_audio"  data-handler="saveStory">SAVE</button>
            </div>
    `;
}