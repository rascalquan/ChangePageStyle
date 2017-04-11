var propertyNames = [
    "align-content", "align-items", "align-self", "all", "animation", "animation-delay", "animation-direction",
    "animation-duration", "animation-fill-mode", "animation-iteration-count", "animation-name",
    "animation-play-state", "animation-timing-function", "backface-visibility", "background",
    "background-attachment", "background-blend-mode", "background-clip", "background-color",
    "background-image", "background-origin", "background-position", "background-repeat",
    "background-size", "border", "border-bottom", "border-bottom-color", "border-bottom-left-radius",
    "border-bottom-right-radius", "border-bottom-style", "border-bottom-width", "border-collapse",
    "border-color", "border-image", "border-image-outset", "border-image-repeat", "border-image-slice",
    "border-image-source", "border-image-width", "border-left", "border-left-color", "border-left-style",
    "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-style",
    "border-right-width", "border-spacing", "border-style", "border-top", "border-top-color",
    "border-top-left-radius", "border-top-right-radius", "border-top-style", "border-top-width",
    "border-width", "bottom", "box-shadow", "box-sizing", "caption-side", "clear", "clip", "color",
    "column-count", "column-fill", "column-gap", "column-rule", "column-rule-color", "column-rule-style",
    "column-rule-width", "column-span", "column-width", "columns", "content", "counter-increment",
    "counter-reset", "cursor", "direction", "display", "empty-cells", "filter", "flex", "flex-basis",
    "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap", "float", "font", "@font-face",
    "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant",
    "font-weight", "hanging-punctuation", "height", "justify-content", "@keyframes", "left", "letter-spacing",
    "line-height", "list-style", "list-style-image", "list-style-position", "list-style-type", "margin",
    "margin-bottom", "margin-left", "margin-right", "margin-top", "max-height", "max-width", "@media",
    "min-height", "min-width", "nav-down", "nav-index", "nav-left", "nav-right", "nav-up", "opacity",
    "order", "outline", "outline-color", "outline-offset", "outline-style", "outline-width", "overflow",
    "overflow-x", "overflow-y", "padding", "padding-bottom", "padding-left", "padding-right", "padding-top",
    "page-break-after", "page-break-before", "page-break-inside", "perspective", "perspective-origin",
    "position", "quotes", "resize", "right", "tab-size", "table-layout", "text-align", "text-align-last",
    "text-decoration", "text-decoration-color", "text-decoration-line", "text-decoration-style", "text-indent",
    "text-justify", "text-overflow", "text-shadow", "text-transform", "top", "transform", "transform-origin",
    "transform-style", "transition", "transition-delay", "transition-duration", "transition-property",
    "transition-timing-function", "unicode-bidi", "vertical-align", "visibility", "white-space", "width",
    "word-break", "word-spacing", "word-wrap", "z-index"
]

var propertyKeyValues = [
    { propertyKey: "align-content", propertyValue: ['center', 'flex-end', 'flex-start', 'inherit', 'space-around', 'space-between', 'stretch'] },
    { propertyKey: "align-items", propertyValue: ['baseline', 'bb', 'cc'] },
    { propertyKey: "align-self", propertyValue: [] },
    { propertyKey: "all", propertyValue: [] },
    { propertyKey: "animation", propertyValue: [] },
    { propertyKey: "animation-delay", propertyValue: [] },
    { propertyKey: "animation-direction", propertyValue: [] },
    { propertyKey: "animation-duration", propertyValue: [] },
    { propertyKey: "animation-fill-mode", propertyValue: [] },
    { propertyKey: "animation-iteration-count", propertyValue: [] },
    { propertyKey: "animation-name", propertyValue: [] },
    { propertyKey: "animation-play-state", propertyValue: [] },
    { propertyKey: "animation-timing-function", propertyValue: [] },
    { propertyKey: "backface-visibility", propertyValue: [] },
    { propertyKey: "background", propertyValue: [] },
    { propertyKey: "background-attachment", propertyValue: [] },
    { propertyKey: "background-blend-mode", propertyValue: [] },
    { propertyKey: "background-clip", propertyValue: [] },
    { propertyKey: "background-color", propertyValue: [] },
    { propertyKey: "background-image", propertyValue: [] },
    { propertyKey: "background-origin", propertyValue: [] },
    { propertyKey: "background-position", propertyValue: [] },
    { propertyKey: "background-repeat", propertyValue: [] },
    { propertyKey: "background-size", propertyValue: [] },
    { propertyKey: "border", propertyValue: [] },
    { propertyKey: "border-bottom", propertyValue: [] },
    { propertyKey: "border-bottom-color", propertyValue: [] },
    { propertyKey: "border-bottom-left-radius", propertyValue: [] },
    { propertyKey: "border-bottom-right-radius", propertyValue: [] },
    { propertyKey: "border-bottom-style", propertyValue: [] },
    { propertyKey: "border-bottom-width", propertyValue: [] },
    { propertyKey: "border-collapse", propertyValue: [] },
    { propertyKey: "border-color", propertyValue: [] },
    { propertyKey: "border-image", propertyValue: [] },
    { propertyKey: "border-image-outset", propertyValue: [] },
    { propertyKey: "border-image-repeat", propertyValue: [] },
    { propertyKey: "border-image-slice", propertyValue: [] },
    { propertyKey: "border-image-source", propertyValue: [] },
    { propertyKey: "border-image-width", propertyValue: [] },
    { propertyKey: "border-left", propertyValue: [] },
    { propertyKey: "border-left-color", propertyValue: [] },
    { propertyKey: "border-left-style", propertyValue: [] },
    { propertyKey: "border-left-width", propertyValue: [] },
    { propertyKey: "border-radius", propertyValue: [] },
    { propertyKey: "border-right", propertyValue: [] },
    { propertyKey: "border-right-color", propertyValue: [] },
    { propertyKey: "border-right-style", propertyValue: [] },
    { propertyKey: "border-right-width", propertyValue: [] },
    { propertyKey: "border-spacing", propertyValue: [] },
    { propertyKey: "border-style", propertyValue: [] },
    { propertyKey: "border-top", propertyValue: [] },
    { propertyKey: "border-top-color", propertyValue: [] },
    { propertyKey: "border-top-left-radius", propertyValue: [] },
    { propertyKey: "border-top-right-radius", propertyValue: [] },
    { propertyKey: "border-top-style", propertyValue: [] },
    { propertyKey: "border-top-width", propertyValue: [] },
    { propertyKey: "border-width", propertyValue: [] },
    { propertyKey: "bottom", propertyValue: [] },
    { propertyKey: "box-shadow", propertyValue: [] },
    { propertyKey: "box-sizing", propertyValue: [] },
    { propertyKey: "caption-side", propertyValue: [] },
    { propertyKey: "clear", propertyValue: [] },
    { propertyKey: "clip", propertyValue: [] },
    { propertyKey: "color", propertyValue: [] },
    { propertyKey: "column-count", propertyValue: [] },
    { propertyKey: "column-fill", propertyValue: [] },
    { propertyKey: "column-gap", propertyValue: [] },
    { propertyKey: "column-rule", propertyValue: [] },
    { propertyKey: "column-rule-color", propertyValue: [] },
    { propertyKey: "column-rule-style", propertyValue: [] },
    { propertyKey: "column-rule-width", propertyValue: [] },
    { propertyKey: "column-span", propertyValue: [] },
    { propertyKey: "column-width", propertyValue: [] },
    { propertyKey: "columns", propertyValue: [] },
    { propertyKey: "content", propertyValue: [] },
    { propertyKey: "counter-increment", propertyValue: [] },
    { propertyKey: "counter-reset", propertyValue: [] },
    { propertyKey: "cursor", propertyValue: [] },
    { propertyKey: "direction", propertyValue: [] },
    { propertyKey: "display", propertyValue: [] },
    { propertyKey: "empty-cells", propertyValue: [] },
    { propertyKey: "filter", propertyValue: [] },
    { propertyKey: "flex", propertyValue: [] },
    { propertyKey: "flex-basis", propertyValue: [] },
    { propertyKey: "flex-direction", propertyValue: [] },
    { propertyKey: "flex-flow", propertyValue: [] },
    { propertyKey: "flex-grow", propertyValue: [] },
    { propertyKey: "flex-shrink", propertyValue: [] },
    { propertyKey: "flex-wrap", propertyValue: [] },
    { propertyKey: "float", propertyValue: [] },
    { propertyKey: "font", propertyValue: [] },
    { propertyKey: "@font-face", propertyValue: [] },
    { propertyKey: "font-family", propertyValue: [] },
    { propertyKey: "font-size", propertyValue: [] },
    { propertyKey: "font-size-adjust", propertyValue: [] },
    { propertyKey: "font-stretch", propertyValue: [] },
    { propertyKey: "font-style", propertyValue: [] },
    { propertyKey: "font-variant", propertyValue: [] },
    { propertyKey: "font-weight", propertyValue: [] },
    { propertyKey: "hanging-punctuation", propertyValue: [] },
    { propertyKey: "height", propertyValue: [] },
    { propertyKey: "justify-content", propertyValue: [] },
    { propertyKey: "@keyframes", propertyValue: [] },
    { propertyKey: "left", propertyValue: [] },
    { propertyKey: "letter-spacing", propertyValue: [] },
    { propertyKey: "line-height", propertyValue: [] },
    { propertyKey: "list-style", propertyValue: [] },
    { propertyKey: "list-style-image", propertyValue: [] },
    { propertyKey: "list-style-position", propertyValue: [] },
    { propertyKey: "list-style-type", propertyValue: [] },
    { propertyKey: "margin", propertyValue: [] },
    { propertyKey: "margin-bottom", propertyValue: [] },
    { propertyKey: "margin-left", propertyValue: [] },
    { propertyKey: "margin-right", propertyValue: [] },
    { propertyKey: "margin-top", propertyValue: [] },
    { propertyKey: "max-height", propertyValue: [] },
    { propertyKey: "max-width", propertyValue: [] },
    { propertyKey: "@media", propertyValue: [] },
    { propertyKey: "min-height", propertyValue: [] },
    { propertyKey: "min-width", propertyValue: [] },
    { propertyKey: "nav-down", propertyValue: [] },
    { propertyKey: "nav-index", propertyValue: [] },
    { propertyKey: "nav-left", propertyValue: [] },
    { propertyKey: "nav-right", propertyValue: [] },
    { propertyKey: "nav-up", propertyValue: [] },
    { propertyKey: "opacity", propertyValue: [] },
    { propertyKey: "order", propertyValue: [] },
    { propertyKey: "outline", propertyValue: [] },
    { propertyKey: "outline-color", propertyValue: [] },
    { propertyKey: "outline-offset", propertyValue: [] },
    { propertyKey: "outline-style", propertyValue: [] },
    { propertyKey: "outline-width", propertyValue: [] },
    { propertyKey: "overflow", propertyValue: [] },
    { propertyKey: "overflow-x", propertyValue: [] },
    { propertyKey: "overflow-y", propertyValue: [] },
    { propertyKey: "padding", propertyValue: [] },
    { propertyKey: "padding-bottom", propertyValue: [] },
    { propertyKey: "padding-left", propertyValue: [] },
    { propertyKey: "padding-right", propertyValue: [] },
    { propertyKey: "padding-top", propertyValue: [] },
    { propertyKey: "page-break-after", propertyValue: [] },
    { propertyKey: "page-break-before", propertyValue: [] },
    { propertyKey: "page-break-inside", propertyValue: [] },
    { propertyKey: "perspective", propertyValue: [] },
    { propertyKey: "perspective-origin", propertyValue: [] },
    { propertyKey: "position", propertyValue: [] },
    { propertyKey: "quotes", propertyValue: [] },
    { propertyKey: "resize", propertyValue: [] },
    { propertyKey: "right", propertyValue: [] },
    { propertyKey: "tab-size", propertyValue: [] },
    { propertyKey: "table-layout", propertyValue: [] },
    { propertyKey: "text-align", propertyValue: [] },
    { propertyKey: "text-align-last", propertyValue: [] },
    { propertyKey: "text-decoration", propertyValue: [] },
    { propertyKey: "text-decoration-color", propertyValue: [] },
    { propertyKey: "text-decoration-line", propertyValue: [] },
    { propertyKey: "text-decoration-style", propertyValue: [] },
    { propertyKey: "text-indent", propertyValue: [] },
    { propertyKey: "text-justify", propertyValue: [] },
    { propertyKey: "text-overflow", propertyValue: [] },
    { propertyKey: "text-shadow", propertyValue: [] },
    { propertyKey: "text-transform", propertyValue: [] },
    { propertyKey: "top", propertyValue: [] },
    { propertyKey: "transform", propertyValue: [] },
    { propertyKey: "transform-origin", propertyValue: [] },
    { propertyKey: "transform-style", propertyValue: [] },
    { propertyKey: "transition", propertyValue: [] },
    { propertyKey: "transition-delay", propertyValue: [] },
    { propertyKey: "transition-duration", propertyValue: [] },
    { propertyKey: "transition-property", propertyValue: [] },
    { propertyKey: "transition-timing-function", propertyValue: [] },
    { propertyKey: "unicode-bidi", propertyValue: [] },
    { propertyKey: "vertical-align", propertyValue: [] },
    { propertyKey: "visibility", propertyValue: [] },
    { propertyKey: "white-space", propertyValue: [] },
    { propertyKey: "width", propertyValue: [] },
    { propertyKey: "word-break", propertyValue: [] },
    { propertyKey: "word-spacing", propertyValue: [] },
    { propertyKey: "word-wrap", propertyValue: [] },
    { propertyKey: "z-index", propertyValue: [] }
]

var propertys = {
    "align-content": [1, 2, 3, 4],
    "align-items": ['a', 'b', 'c', 'd'],
    "align-self": [],
    "all": [],
    "animation": [],
    "animation-delay": [],
    "animation-direction": [],
    "animation-duration": [],
    "animation-fill-mode": [],
    "animation-iteration-count": [],
    "animation-name": [],
    "animation-play-state": [],
    "animation-timing-function": [],
    "backface-visibility": [],
    "background": [],
    "background-attachment": [],
    "background-blend-mode": [],
    "background-clip": [],
    "background-color": [],
    "background-image": [],
    "background-origin": [],
    "background-position": [],
    "background-repeat": [],
    "background-size": [],
    "border": [],
    "border-bottom": [],
    "border-bottom-color": [],
    "border-bottom-left-radius": [],
    "border-bottom-right-radius": [],
    "border-bottom-style": [],
    "border-bottom-width": [],
    "border-collapse": [],
    "border-color": [],
    "border-image": [],
    "border-image-outset": [],
    "border-image-repeat": [],
    "border-image-slice": [],
    "border-image-source": [],
    "border-image-width": [],
    "border-left": [],
    "border-left-color": [],
    "border-left-style": [],
    "border-left-width": [],
    "border-radius": [],
    "border-right": [],
    "border-right-color": [],
    "border-right-style": [],
    "border-right-width": [],
    "border-spacing": [],
    "border-style": [],
    "border-top": [],
    "border-top-color": [],
    "border-top-left-radius": [],
    "border-top-right-radius": [],
    "border-top-style": [],
    "border-top-width": [],
    "border-width": [],
    "bottom": [],
    "box-shadow": [],
    "box-sizing": [],
    "caption-side": [],
    "clear": [],
    "clip": [],
    "color": [],
    "column-count": [],
    "column-fill": [],
    "column-gap": [],
    "column-rule": [],
    "column-rule-color": [],
    "column-rule-style": [],
    "column-rule-width": [],
    "column-span": [],
    "column-width": [],
    "columns": [],
    "content": [],
    "counter-increment": [],
    "counter-reset": [],
    "cursor": [],
    "direction": [],
    "display": [],
    "empty-cells": [],
    "filter": [],
    "flex": [],
    "flex-basis": [],
    "flex-direction": [],
    "flex-flow": [],
    "flex-grow": [],
    "flex-shrink": [],
    "flex-wrap": [],
    "float": [],
    "font": [],
    "@font-face": [],
    "font-family": [],
    "font-size": [],
    "font-size-adjust": [],
    "font-stretch": [],
    "font-style": [],
    "font-variant": [],
    "font-weight": [],
    "hanging-punctuation": [],
    "height": [],
    "justify-content": [],
    "@keyframes": [],
    "left": [],
    "letter-spacing": [],
    "line-height": [],
    "list-style": [],
    "list-style-image": [],
    "list-style-position": [],
    "list-style-type": [],
    "margin": [],
    "margin-bottom": [],
    "margin-left": [],
    "margin-right": [],
    "margin-top": [],
    "max-height": [],
    "max-width": [],
    "@media": [],
    "min-height": [],
    "min-width": [],
    "nav-down": [],
    "nav-index": [],
    "nav-left": [],
    "nav-right": [],
    "nav-up": [],
    "opacity": [],
    "order": [],
    "outline": [],
    "outline-color": [],
    "outline-offset": [],
    "outline-style": [],
    "outline-width": [],
    "overflow": [],
    "overflow-x": [],
    "overflow-y": [],
    "padding": [],
    "padding-bottom": [],
    "padding-left": [],
    "padding-right": [],
    "padding-top": [],
    "page-break-after": [],
    "page-break-before": [],
    "page-break-inside": [],
    "perspective": [],
    "perspective-origin": [],
    "position": [],
    "quotes": [],
    "resize": [],
    "right": [],
    "tab-size": [],
    "table-layout": [],
    "text-align": [],
    "text-align-last": [],
    "text-decoration": [],
    "text-decoration-color": [],
    "text-decoration-line": [],
    "text-decoration-style": [],
    "text-indent": [],
    "text-justify": [],
    "text-overflow": [],
    "text-shadow": [],
    "text-transform": [],
    "top": [],
    "transform": [],
    "transform-origin": [],
    "transform-style": [],
    "transition": [],
    "transition-delay": [],
    "transition-duration": [],
    "transition-property": [],
    "transition-timing-function": [],
    "unicode-bidi": [],
    "vertical-align": [],
    "visibility": [],
    "white-space": [],
    "width": [],
    "word-break": [],
    "word-spacing": [],
    "word-wrap": [],
    "z-index": []
}