# Jest Test Language Support

Jest Test Language Support provides syntax highlighting for your Jest global & lifecycle functions, and matchers. 

## Features
-----------

- Syntax highlighting for Jest test files  
- Supports `.spec` & `.test` for JS, JSX, Typescript

## How to Setup Custom Themes 
-----------------------------
 
1. Open VSCode User Settings in JSON  

2. Add custom styles to your theme of choice:
    ```json
    {
        "editor.tokenColorCustomizations": {
            "[ThemeNameGoesHere]": {
                "textMateRules": [
                    {
                        "scope": "your.scope.selector",
                        "foreground": "#8d8feb",
                        "fontStyle": "bold"
                    },
                    ...
                ]
            }
        }
    } 
    ```
 ### Example Theme Config   
 ![Example Theme Config](https://raw.githubusercontent.com/dplain90/jest-test-language-support/master/example-theme-config.png)

## Scope Selectors
------------------

Below is a list of of scope selectors that can be used to set custom syntax color and font style.  

|  Scope                      | Description                                        |
| --------------------------: | ----------------------------------------------     |
|  `scope.jest.test`          | root scope                                         |
|  `jest-global-function`     | global jest functions                              |
|  `jest-lifecycle.[name]`    | Jest lifecycles (`beforeAll`, `afterEach`, etc.)   |
|  `expect-statement`         | Highlights `expect`                                |
|  `describe-block`           | Highlights `describe`                              |
|  `it-block`                 | Highlights `it`                                    |
|  `jest-matcher.[name]`      | Jest matchers (`toEqual`, `toMatchSnapshot`, etc.) |  
|  `jest-matcher-prefix.not`  | Jest matcher prefix for not                        |

Check out this VS's [Syntax Highlighting Guide](https://code.visualstudio.com/api/language-extensions/syntax-highlight-guide)   
if you want to learn more about TextMate scope and selectors 

### Matchers
  - All matchers listed <https://jestjs.io/docs/en/expect>, that start with a `.` are covered in `jest-matcher.[name]` 


## Related Links
----------------
 [Jest Test Language Support - VSMarketplace](https://marketplace.visualstudio.com/items?itemName=dplain.jest-test-language-support)  
 [vscode-jest](https://github.com/jest-community/vscode-jest)  
 [Jest Snapshot Language Support](https://github.com/tlent/jest-snapshot-language-support)  