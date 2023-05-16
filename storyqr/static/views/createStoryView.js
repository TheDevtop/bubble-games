import { getBgColorClass } from "./background.js";
export function createStoryView(){
    return `
    <div class="story">
           
            <div id="story_middle">
            <div id="story_middle_avatar">
            <div id="story_middle_avatar_pic">
            <img id="story_middle_avatar_img" src="images/woman.png" alt="">
            </div>
            <button data-route="customise" style="filter:hue-rotate(${getBgColorClass()})" id="btn_customize" onclick="navigateOnClick(this)">Customize</button>
        </div>
                <div id="story_middle_story">
                    We give you an option of sharing your story with strangers to make an impact and help us grow empathy in our society!
                    Choose to tell your story by audio or text and publish it so other people can get to know deeper version of you.
                </div>
            </div>
            <div id="story_btn">
                <button style="filter:hue-rotate(${getBgColorClass()})" data-route="story" id="btn_story" onclick="navigateOnClick(this)">Tell your story</button>
                <button style="filter:hue-rotate(${getBgColorClass()})" data-route="preview" id="btn_preview" onclick="navigateOnClick(this)">Preview</button>
                <button style="filter:hue-rotate(${getBgColorClass()})" data-route="publish" id="btn_publish" onclick="navigateOnClick(this)">Publish</button>
            </div>
        </div>
    `;
}