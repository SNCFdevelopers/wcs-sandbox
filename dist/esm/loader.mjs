import { a as patchEsm, b as bootstrapLazy } from './chunk-7c5f10e0.js';

const defineCustomElements = (win, options) => {
  return patchEsm().then(() => {
    bootstrapLazy([["wcs-app_16",[[4,"wcs-select-option",{"disabled":[1540],"selected":[1540],"value":[1544],"multiple":[516]},[[1,"mousedown","onMouseDown"]]],[1,"wcs-app"],[1,"wcs-badge",{"color":[1025]}],[1,"wcs-button",{"type":[1025],"href":[1],"color":[1],"disabled":[516],"ripple":[4],"mode":[513],"clear":[516]},[[0,"click","onClick"]]],[1,"wcs-card"],[1,"wcs-card-body"],[1,"wcs-header"],[0,"wcs-icon",{"icon":[1],"size":[1]}],[1,"wcs-input",{"name":[1],"background":[513],"value":[1537],"autocapitalize":[1],"autocomplete":[1],"autocorrect":[1],"autofocus":[4],"disabled":[4],"accept":[1],"inputmode":[1],"max":[1],"maxlength":[2],"min":[1],"minlength":[2],"multiple":[4],"pattern":[1],"required":[4],"spellcheck":[4],"step":[1],"size":[2],"type":[1],"setFocus":[64],"getInputElement":[64]}],[1,"wcs-progress-bar",{"small":[1028],"showLabel":[1028,"show-label"],"value":[1026]}],[1,"wcs-progress-radial",{"size":[2],"showLabel":[4,"show-label"],"value":[2]}],[1,"wcs-select",{"value":[1544],"placeholder":[1537],"disabled":[1028],"multiple":[516],"name":[1],"expanded":[32],"hasLoaded":[32],"displayText":[32],"focused":[32],"open":[64],"close":[64]},[[1,"mousedown","onMouseDown"],[8,"click","onWindowClickEvent"],[0,"wcsSelectOptionClick","selectedOptionChanged"],[0,"focus","focus"],[0,"blur","blur"]]],[1,"wcs-sidebar"],[1,"wcs-tab",{"header":[1537]}],[1,"wcs-tabs",{"align":[1025],"selectedIndex":[1538,"selected-index"],"headers":[32]},[[0,"wcsTabDidLoad","refreshHeaders"]]],[1,"wcs-checkbox",{"name":[1],"indeterminate":[1540],"checked":[1028]}]]]], options);
  });
};

export { defineCustomElements };
