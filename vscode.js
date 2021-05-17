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
  "editor.renderLineHighlight": "all",
  "editor.lineHeight": 25,
  "editor.colorDecorators": true, // false - can be annoying sometimes
  "editor.minimap.showSlider": "always",
  "editor.snippetSuggestions": "top",
  "extensions.ignoreRecommendations": false,
  "editor.rulers": [80], // [80, 100]
  /*** Font ***/
  "editor.fontFamily": "Dank Mono",
  "editor.fontWeight": "500", // "400",
  "workbench.fontAliasing": "antialiased", // for crisp text on Retina displays
  "editor.fontLigatures": false, // font ligatures option
  "editor.tokenColorCustomizations": {
    // italics for keywords
    "[Noctis Minimus]": {
      "textMateRules": [
        {
          "scope": "emphasis",
          "settings": {
            "fontStyle": "italic"
          }
        },
        {
          "scope": "strong",
          "settings": {
            "fontStyle": "bold"
          }
        },
        {
          "scope": "entity.other.attribute-name",
          "settings": {
            "fontStyle": "italic"
          }
        },
        {
          "scope": "markup.underline",
          "settings": {
            "fontStyle": "underline"
          }
        },
        {
          "scope": "markup.bold",
          "settings": {
            "fontStyle": "bold"
          }
        },
        {
          "scope": "markup.heading",
          "settings": {
            "fontStyle": "bold"
          }
        },
        {
          "scope": "markup.italic",
          "settings": {
            "fontStyle": "italic"
          }
        },
        {
          "scope": "storage.type",
          "settings": {
            "fontStyle": "italic"
          }
        },
        {
          "scope": "storage.modifier",
          "settings": {
            "fontStyle": "italic"
          }
        },
        {
          "name": "String interpolation",
          "scope": [
            "punctuation.definition.template-expression.begin",
            "punctuation.definition.template-expression.end",
            "punctuation.section.embedded"
          ],
          "settings": {
            "fontStyle": "italic"
          }
        },
        {
          "scope": "keyword.control",
          "settings": {
            "fontStyle": "italic"
          }
        },
        {
          "scope": [
            "keyword.operator.new",
            "keyword.operator.expression",
            "keyword.operator.cast",
            "keyword.operator.sizeof",
            "keyword.operator.logical.python"
          ],
          "settings": {
            "fontStyle": "italic"
          }
        },
        {
          "name": "this.self",
          "scope": "variable.language",
          "settings": {
            "fontStyle": "italic"
          }
        },
        {
          "name": "@Decorator",
          "scope": ["meta.decorator punctuation.decorator"],
          "settings": {
            "fontStyle": "italic"
          }
        },
        {
          "scope": ["punctuation.definition.comment", "comment"],
          "settings": {
            "fontStyle": "italic"
          }
        }
      ]
    }
  },
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
    "**/.next": true,
    "**/.classpath": true,
    "**/.project": true,
    "**/.settings": true,
    "**/.factorypath": true
  },
  /*** Cursor ***/
  "editor.multiCursorModifier": "ctrlCmd",
  "editor.cursorStyle": "line",
  "editor.cursorBlinking": "solid",
  /*** Eslint & Prettier Setup ***/
  "eslint.format.enable": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ],
  // Auto-save configs
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  // turn it off for JS and JSX, we will do this via eslint
  "[javascript]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint",
    "editor.formatOnSave": false
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint",
    "editor.formatOnSave": false
  },
  "[typescript]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint",
    "editor.formatOnSave": false
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint",
    "editor.formatOnSave": false
  },
  "[markdown]": {
    "editor.formatOnSave": false
  },
  // show eslint icon at bottom toolbar
  "eslint.alwaysShowStatus": true,
  // tell the ESLint plugin to run on save
  "editor.codeActionsOnSave": {
    // "source.organizeImports": true,
    "source.fixAll.eslint": true
  },
  /*** Emmet ***/
  "emmet.syntaxProfiles": {
    "javascript": "jsx"
  },
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  },
  /*** Icons ***/
  "workbench.iconTheme": "material-icon-theme",
  "latex-workshop.view.pdf.viewer": "tab",
  "python.formatting.provider": "autopep8",
  "python.pythonPath": "/Users/Anurag/anaconda3/bin/python",
  "material-icon-theme.activeIconPack": "react_redux",
  "material-icon-theme.folders.theme": "specific",
  "python.linting.pylintEnabled": true,
  "python.linting.enabled": true,
  "python.linting.pycodestyleEnabled": false,
  "gruvboxMaterial.italicComments": false,
  "gruvboxMaterial.darkSelection": "blue",
  "editor.suggestSelection": "first",
  "vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue",
  "everforest.italicKeywords": true,
  "gruvboxMaterial.italicKeywords": true,
  /*** Java Configuration ***/
  "java.home": "/Library/Java/JavaVirtualMachines/adoptopenjdk-11.jdk/Contents/Home",
  "java.configuration.maven.globalSettings": "/opt/apache-maven/conf/settings.xml",
  "java.import.gradle.home": "/usr/local/Cellar/gradle/7.0.1",
  "java.import.gradle.java.home": "/Library/Java/JavaVirtualMachines/adoptopenjdk-11.jdk/Contents/Home",
  "java.help.firstView": "gettingStarted",
  "[java]": {
    "editor.defaultFormatter": "redhat.java"
  },
  "java.format.settings.url": "https://raw.githubusercontent.com/google/styleguide/gh-pages/eclipse-java-google-style.xml",
  "java.format.settings.profile": "GoogleStyle",
  "java.project.importOnFirstTimeStartup": "automatic",
  "workbench.colorTheme": "Noctis Minimus",
  "editor.fontSize": 13,
  "java.project.referencedLibraries": ["library/**/*.jar"]
}
