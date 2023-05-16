import { getBgColorClass } from "./background.js";

export function bgCustomiserView() {
    return `
      <div id="bg_customiser">
        <div id="bg_customiser_colours">
          ${generateColorDivs(10)}
        </div>
        <div id="bg_customiser_types">
        ${generateBgTypeDivs(2)}
      </div>
    `;
  }
  
  function generateColorDivs(numDivs) {
    let divs = "";
  
    for (let i = 0; i < numDivs; i++) {
      divs += `
        <div style="filter:hue-rotate(${(-180 + (36 * i))}deg)" 
        id="bg_customiser_colours_${i}" 
        class="bg_customiser_colours_item" 
        data-handler="changeBgColor" data-color=${i} 
        onclick="
            window.story.background.color = this.dataset.color; 
            console.log(window.story);
        "></div>
      `;
    }
  
    return divs;
  }
  function generateBgTypeDivs(numDivs) {
    let divs = "";
  
    for (let i = 0; i < numDivs; i++) {
      divs += `
        <div id="bg_customiser_types_item" data-handler="changeBgColor" data-bgtype=${i} data-handler="changeBgColor" onclick="window.story.background.type = this.dataset.bgtype; console.log(window.story);">
          <img data-handler="changeBgColor" style="filter:hue-rotate(${getBgColorClass()})" src="images/bg${i}.png" alt="">
        </div>
      `;
    }
  
    return divs;
  }
