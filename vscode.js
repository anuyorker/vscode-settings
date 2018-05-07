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
  "window.title": "${activeEditorMedium}${separator}${rootName}",
  "workbench.colorCustomizations": {
    "editorWarning.foreground": "#ec0"
  },
  "editor.renderLineHighlight": "all",
  "editor.lineHeight": 25,
  "editor.colorDecorators": true, // false - can be annoying sometimes
  "editor.minimap.showSlider": "always",
  "editor.snippetSuggestions": "top",
  "extensions.ignoreRecommendations": false,
  "editor.rulers": [
    80,
    100
  ],
  /*** Font ***/
  "editor.fontFamily": "Menlo",
  "editor.fontWeight": "400",
  "editor.fontSize": 14,
  "workbench.fontAliasing": "antialiased", // for crisp text on Retina displays
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
  "editor.formatOnSave": true,
  "[css]": {
    "editor.formatOnSave": false
  },
  "[scss]": {
    "editor.formatOnSave": false
  },
  // turn it off for JS
  "javascript.format.enable": false,
  "eslint.autoFixOnSave": true,
  "eslint.alwaysShowStatus": true,
  "prettier.eslintIntegration": true,
  "prettier.singleQuote": true,
  /*** Emmet ***/
  "emmet.syntaxProfiles": {
    "javascript": "jsx"
  },
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  },
  /*** Icons ***/
  "workbench.iconTheme": "material-icon-theme",
  "material-icon-theme.activeIconPack": "react_redux",
  "latex-workshop.view.pdf.viewer": "tab",
  "workbench.colorTheme": "crayon-vscode"
}
