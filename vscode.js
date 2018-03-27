{
  /*** Change Annoying VSCode Things ***/
  "workbench.startupEditor": "newUntitledFile",
  "workbench.editor.tabSizing": "shrink",
  "workbench.activityBar.visible": false,
  "workbench.sideBar.location": "left",
  "workbench.editor.tabCloseButton": "right",
  "workbench.editor.enablePreviewFromQuickOpen": false,
  "explorer.autoReveal": false,
  "editor.minimap.enabled": false,
  /*** Editor Appearance ***/
  "workbench.colorTheme": "New Moon",
  "window.title": "${activeEditorMedium}${separator}${rootName}",
  "workbench.colorCustomizations": {
    "editorWarning.foreground": "#ec0",
    "statusBar.background": "#2D2D2D"
  },
  "editor.renderLineHighlight": "all",
  "editor.lineHeight": 25,
  "editor.colorDecorators": false, // false - can be annoying sometimes
  "editor.minimap.showSlider": "always",
  "editor.snippetSuggestions": "top",
  "extensions.ignoreRecommendations": false,
  "editor.rulers": [
    80,
    100
  ],
  /*** Font ***/
  "editor.fontFamily": "Code New Roman",
  "editor.fontWeight": "400",
  "editor.fontSize": 17,
  "workbench.fontAliasing": "antialiased", // for crisp text on Retina display
  "editor.fontLigatures": true,
  "window.zoomLevel": 0,
  /*** Editor Code Formatting ***/
  "editor.tabSize": 2,
  "editor.trimAutoWhitespace": false,
  "editor.renderWhitespace": "boundary",
  "editor.wordWrap": "on",
  "editor.detectIndentation": false,
  "editor.letterSpacing": 0.5,
  "editor.renderIndentGuides": false,
  "editor.renderControlCharacters": false,
  /*** Files ***/
  "files.trimTrailingWhitespace": true,
  "files.insertFinalNewline": true,
  "files.associations": {
    ".gitignore": "shellscript",
    ".eslintrc.json": "jsonc"
  },
  "files.exclude": {
    "**/.git": true,
    "**/.svn": true,
    "**/.hg": true,
    "**/CVS": true,
    "**/.DS_Store": true,
    "**/.next": true
  },
  /*** HTML ***/
  "html.format.enable": true,
  "html.format.preserveNewLines": true,
  /*** Cursor ***/
  "editor.multiCursorModifier": "ctrlCmd",
  "editor.cursorStyle": "line",
  "editor.cursorBlinking": "solid",
  /*** Javascript Formatting ***/
  // auto-save configs
  // "editor.formatOnSave": true,
  // turn it off for JS
  "javascript.format.enable": false,
  "[javascript]": {
    "editor.formatOnSave": false
  },
  // "eslint.autoFixOnSave": true,
  "eslint.alwaysShowStatus": true,
  "prettier.eslintIntegration": true,
  /*** Sublime Keymapping ***/
  "sublimeTextKeymap.promptV3Features": true,
  /*** Emmet ***/
  "emmet.syntaxProfiles": {
    "javascript": "jsx"
  },
  /*** Icons ***/
  "workbench.iconTheme": "material-icon-theme",
  "material-icon-theme.activeIconPack": "react_redux"
}
