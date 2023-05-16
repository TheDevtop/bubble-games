export function background(type=0){
    switch (type) {
        case 0:
            return `
            <div class="bg">
            <div id="flower_tl">
                <img style="filter:hue-rotate(${getBgColorClass()})" src="images/bg_flower_tl.png" alt="">
            </div>
            <div id="flower_bl">
                <img style="filter:hue-rotate(${getBgColorClass()})" src="images/bg_flower_bl.png" alt="">
            </div>
            <div id="flower_br">
                <img style="filter:hue-rotate(${getBgColorClass()})" src="images/bg_flower_br.png" alt="">
            </div>
        </div>`
            break;
            case "1":
                return `
                <div class="bg2">
                <div id="flower_tl">
                    <img style="filter:hue-rotate(${getBgColorClass()})" src="images/bg_flower_tl.png" alt="">
                </div>
                <div id="flower_bl">
                    <img style="filter:hue-rotate(${getBgColorClass()})" src="images/bg_flower_bl.png" alt="">
                </div>
                <div id="flower_br">
                    <img style="filter:hue-rotate(${getBgColorClass()})" src="images/bg_flower_br.png" alt="">
                </div>
            </div>`
                break;
        default:
            return `
            <div class="bg">
            <div id="flower_tl">
                <img style="filter:hue-rotate(${getBgColorClass()})" src="images/bg_flower_tl.png" alt="">
            </div>
            <div id="flower_bl">
                <img style="filter:hue-rotate(${getBgColorClass()})" src="images/bg_flower_bl.png" alt="">
            </div>
            <div id="flower_br">
                <img style="filter:hue-rotate(${getBgColorClass()})" src="images/bg_flower_br.png" alt="">
            </div>
        </div>`
            break;
    }
   
}
export function getBgColorClass() {
    //returns the degrees for the css filter hue-rotate and the story setting feom window.story.background.color
    return colorLUT[window.story.background.color];
}
//map color hue shifts -180 - 180 to values of 0 - 9
const colorLUT = {
    0:"-180deg",
    1:"-144deg",
    2:"-108deg",
    3:"-72deg",
    4:"-36deg",
    5:"0deg",
    6:"36deg",
    7:"72deg",
    8:"108deg",
    9:"144deg",
}