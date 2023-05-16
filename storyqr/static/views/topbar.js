
export function topbar(story){

    return `

    <div id="story_top">
    <div id="back_btn" data-route="home" onclick="navigateOnClick(this)">← </div>
    <div id="story_top_name" data-handler="changeAuthor">
    ${story.author}
</div>
                <div id="story_top_title">
                    Story Scapes
                </div>
                <div id="story_top_shared">
                    ${story.date}
                </div>
            </div>
    `
}

