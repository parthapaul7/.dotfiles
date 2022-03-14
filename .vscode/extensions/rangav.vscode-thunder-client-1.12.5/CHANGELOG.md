# Change Log

Thunder Client Changelog

### 1.12.5 - (2022-03-09)

### New Features

- Feature - `AWS v4` Signature Authentication [#489](https://github.com/rangav/thunder-client-support/issues/489)

### Bug Fixes

- Cookies are only sent for the first request [#164](https://github.com/rangav/thunder-client-support/issues/164)
- Local environment needs "delete and re-enable" to work [#486](https://github.com/rangav/thunder-client-support/issues/486)
- Overwritten my custom content-type after new release [#485](https://github.com/rangav/thunder-client-support/issues/485), [#496](https://github.com/rangav/thunder-client-support/issues/496)
- When cookie name contains . then the extension throws error [#483](https://github.com/rangav/thunder-client-support/issues/483)
- When request body is binary, content type should be application/octet-stream [#487](https://github.com/rangav/thunder-client-support/issues/487)

### 1.12.2 - (2022-02-25)

### New Features

- Enum & Bool System variables [#476](https://github.com/rangav/thunder-client-support/issues/476)
- Set json part to Env variable in Tests tab [#477](https://github.com/rangav/thunder-client-support/issues/477)
- Headers of the same name are overridden [#475](https://github.com/rangav/thunder-client-support/issues/475)
- Header names are transformed into lowercase [#458](https://github.com/rangav/thunder-client-support/issues/458)
  - New Vscode setting provided to send Headers in same case as in request
  - Enable the Setting `Headers Case Sensitive`

### Bug Fixes

- Bug Fix for **Reload data** option showing in all views [#478](https://github.com/rangav/thunder-client-support/issues/478)
- Global Envs are not working when Local Env exists [#480](https://github.com/rangav/thunder-client-support/issues/480)

### 1.12.1 - (2022-02-18)

### New Features

- Response Time Column in Run Collection View [#472](https://github.com/rangav/thunder-client-support/issues/472)

### Bug Fixes

- Conversion to Postman collection failing when using variable in request URL [#473](https://github.com/rangav/thunder-client-support/issues/473)

### 1.12.0 - (2022-02-16)

### New Features

- **Export Results** of run collection tests to `CSV & JSON` [#402](https://github.com/rangav/thunder-client-support/issues/402), [#428](https://github.com/rangav/thunder-client-support/issues/428)
- **SaveRequest On Send** vscode setting to disable saving request on `Send` button click, Only save when explicitly saved by using `Ctrl/Cmd+S` [#446](https://github.com/rangav/thunder-client-support/issues/446), [#393](https://github.com/rangav/thunder-client-support/issues/393)
- Export to **Postman format** [#162](https://github.com/rangav/thunder-client-support/issues/162), [#416](https://github.com/rangav/thunder-client-support/issues/416)
  - From Command Palette - `Convert To Postman Format` option available
  - From Sidebar menu at the Top `(...)`
- Quick **Change Environment** from Status Bar [#354](https://github.com/rangav/thunder-client-support/issues/354), [#346](https://github.com/rangav/thunder-client-support/issues/346)
  - Active Environment will be displayed in `StatusBar at the bottom`, clicking on it will display the options to change the Active Env
  - From Keyboard - `Ctrl/Cmd+E` shortcut
  - From Command Palette - Change Environment option available
- **Reordering** of Environment Variables [#414](https://github.com/rangav/thunder-client-support/issues/414)
- Env **Variables highlight** in Request body
- vscode setting for Request Timeouts [#362](https://github.com/rangav/thunder-client-support/issues/362)
- **Open in Code** option for response data [#385](https://github.com/rangav/thunder-client-support/issues/385)
- How to disable automatic line **wrapping** in response? [#392](https://github.com/rangav/thunder-client-support/issues/392)

### Bug Fixes

- JSON Query for property names with non-alphanum chars [#348](https://github.com/rangav/thunder-client-support/issues/348)
- Incorrectly shows response as binary in v1.11.0 [#452](https://github.com/rangav/thunder-client-support/issues/452)
- cURL import of json from chrome not working [#328](https://github.com/rangav/thunder-client-support/issues/328)
- Large numbers are truncated & Float numbers [#88](https://github.com/rangav/thunder-client-support/issues/88), [#370](https://github.com/rangav/thunder-client-support/issues/370)

### 1.11.1 - (2022-01-27)

The new action bar shortcut changed to `ctrl+shift+r`

### Bug Fixes

- Bug fix for vnd.vizrt.payload+xml showing as binary [#452](https://github.com/rangav/thunder-client-support/issues/452)
- Shortcut overrides a basic VS Code key binding [#451](https://github.com/rangav/thunder-client-support/issues/451)

### 1.11.0 - (2022-01-26)

### New Features

- **Ntlm Authentication** feature [#117](https://github.com/rangav/thunder-client-support/issues/117)
- **Save file option** for Binary response [#141](https://github.com/rangav/thunder-client-support/issues/141), [#334](https://github.com/rangav/thunder-client-support/issues/334), [#356](https://github.com/rangav/thunder-client-support/issues/356)
- Sidebar request item **highlight** [#269](https://github.com/rangav/thunder-client-support/issues/269) [#422](https://github.com/rangav/thunder-client-support/issues/422)
- Option to Stop running collection [#364](https://github.com/rangav/thunder-client-support/issues/364)
- Sidebar Enhance filter functionality [#419](https://github.com/rangav/thunder-client-support/issues/419)
- Duplicate request option in Activity tab [#335](https://github.com/rangav/thunder-client-support/issues/335)
- Add popover to Thunder client icon in action bar with shortcut key [#342](https://github.com/rangav/thunder-client-support/issues/342)
- Redirects with same method instead of GET in Thunder Client [#388](https://github.com/rangav/thunder-client-support/issues/388)
- Codegen json data updated for Python and JS [#395](https://github.com/rangav/thunder-client-support/issues/395)
- Set Active Env dont update modified date [#448](https://github.com/rangav/thunder-client-support/issues/448)
- Sidebar navigation improvements for rename, delete & view
- Basic Auth show password button icon added

### Bug Fixes

- Bug fix: Run Collection hanging [#407](https://github.com/rangav/thunder-client-support/issues/407)
- Renamed requests reverts to old name after being sent [#378](https://github.com/rangav/thunder-client-support/issues/378)
- Run Last Request not working for Reqs in Activity

### 1.10.0 - (2022-01-17)

### News

- Thunder Client downloads crossed 500k in 2021
- Website domain changed from .io to thunderclient.com

### New Features

- **Local Environment** feature to exclude secrets [#441](https://github.com/rangav/thunder-client-support/issues/441), [#267](https://github.com/rangav/thunder-client-support/issues/267), [#79](https://github.com/rangav/thunder-client-support/issues/79)
- **Dart lang** codegen support
- Code Snippet **graphql** support [#302](https://github.com/rangav/thunder-client-support/issues/302)
- Settings option to enable **http2** request [#104](https://github.com/rangav/thunder-client-support/issues/104)
- **Copy Response** button in right panel [#426](https://github.com/rangav/thunder-client-support/issues/426)
- Open New Tab should open same request in new tab [#300](https://github.com/rangav/thunder-client-support/issues/300)
- Change request page title length [#301](https://github.com/rangav/thunder-client-support/issues/301)
- Hint text is needed for search shortcuts [#405](https://github.com/rangav/thunder-client-support/issues/405)
- Allow empty passwords in Basic Auth [#380](https://github.com/rangav/thunder-client-support/issues/380)
- Json Syntax error indicator under the text block [#389](https://github.com/rangav/thunder-client-support/issues/389)

### Bug Fixes

- Format JSON body doesn't work when names contain colons [#345](https://github.com/rangav/thunder-client-support/issues/345), [#333](https://github.com/rangav/thunder-client-support/issues/333)
- Auth http calls should ignore ssl errors [#225](https://github.com/rangav/thunder-client-support/issues/225)
- In dark theme Cancel Request option on hover is not visible. [#429](https://github.com/rangav/thunder-client-support/issues/429)
- Auth settings not imported from a previously exported json [#443](https://github.com/rangav/thunder-client-support/issues/443)
- Content-Type is added twice to codegen [#394](https://github.com/rangav/thunder-client-support/issues/394)
- Inherit authentication doesn't work [#381](https://github.com/rangav/thunder-client-support/issues/381)
- Vertical Panes extremely difficult to resize [#305](https://github.com/rangav/thunder-client-support/issues/305)
- Cannot set env variable on JSON when content-type is missing [#331](https://github.com/rangav/thunder-client-support/issues/331)
- Test results failed when graphql return data: null [#368](https://github.com/rangav/thunder-client-support/issues/368)

### 1.9.1 - (2021-08-17)

**Bug Fixes**

- Fixes Path Variable overlap with Env Variable in v1.9.0 [#23](https://github.com/rangav/thunder-client-support/issues/23)

### 1.9.0 - (2021-08-12)

**New Features**

- **Collection level** auth, headers & Tests [#33](https://github.com/rangav/thunder-client-support/issues/33)
- Ability to **attach ENV** to a specific collection [#173](https://github.com/rangav/thunder-client-support/issues/173)
- Set Env Variable with scope option [#33](https://github.com/rangav/thunder-client-support/issues/33)
- Support for **Path Variables** [#23](https://github.com/rangav/thunder-client-support/issues/23)
- **Binary file** upload [#273](https://github.com/rangav/thunder-client-support/issues/273)
- Tests **regex match** option for tests like email, url [#57](https://github.com/rangav/thunder-client-support/issues/57)
- Button to clear cookies [#271](https://github.com/rangav/thunder-client-support/issues/271)
- Live Syntax Checking for JSON body [#263](https://github.com/rangav/thunder-client-support/issues/263)
- Add Convert Javascript Object to JSON [#285](https://github.com/rangav/thunder-client-support/issues/285)
- System variable randomNumber with custom range [#270](https://github.com/rangav/thunder-client-support/issues/270)
- System variable date with custom format [#256](https://github.com/rangav/thunder-client-support/issues/256)
- Codegen C# does not include 'File' form body fields [#288](https://github.com/rangav/thunder-client-support/issues/288)
- Show selected "Environment" on Request Page [#159](https://github.com/rangav/thunder-client-support/issues/159)
- Code Snippet support for **PowerShell**

### 1.8.1 - (2021-07-27)

**Bug Fixes**

- Fixes Requests not adding to Activity in v1.8.0 [#281](https://github.com/rangav/thunder-client-support/issues/281)

### 1.8.0 - (2021-07-26)

**New Features**

- Global environment variables [#70](https://github.com/rangav/thunder-client-support/issues/70)
  - `Enable Global` menu option provided in Env Tab
- Link .env file to Environment option [#74](https://github.com/rangav/thunder-client-support/issues/74)
  - Click on the environment you will see option `Link to .env file` and also you can override any variable with local variables.
- Separate activity requests into thunderActivity.db [#208](https://github.com/rangav/thunder-client-support/issues/208)
- Update request date only when content changes [#208](https://github.com/rangav/thunder-client-support/issues/208)
- Save request using `cmd/ctrl + s`
- Option to open request in a new tab [#246](https://github.com/rangav/thunder-client-support/issues/246), [#203](https://github.com/rangav/thunder-client-support/issues/203)
  - `Open in New Tab` menu option
  - `Ctrl/Cmd + Click` on request will open in new tab
- Remove default url for new request from collections tab [#204](https://github.com/rangav/thunder-client-support/issues/204)
- Bearer token input changed to textarea [#248](https://github.com/rangav/thunder-client-support/issues/248)
- Setting Option to configure whether to `follow redirects` [#239](https://github.com/rangav/thunder-client-support/issues/239)
- Setting option to enable show requests run from Collection in Activity [#236](https://github.com/rangav/thunder-client-support/issues/236)

**Bug Fixes**

- Fixes Thunder client Response file size issue [#262](https://github.com/rangav/thunder-client-support/issues/262)

### 1.7.1 - (2021-07-14)

**Bug Fixes**

- Fixes Text Response not working in v1.7.0 [#265](https://github.com/rangav/thunder-client-support/issues/265)

### 1.7.0 - (2021-07-13)

**New Features**

- Duplicate Folder & Collection option
- Import Environment from .env file [#74](https://github.com/rangav/thunder-client-support/issues/74)
- Show Request View Vertically in Split Mode [#99](https://github.com/rangav/thunder-client-support/issues/99)
- Display of response for images [#97](https://github.com/rangav/thunder-client-support/issues/97)
- Sort Env using Drag & Drop
- Support client certificate auth using mutual TLS [#130](https://github.com/rangav/thunder-client-support/issues/130)
- System variable {{#guid}} added [#253](https://github.com/rangav/thunder-client-support/issues/253)

**Bug Fixes**

- Fixes Response Window is Missing on Zoom out [#205](https://github.com/rangav/thunder-client-support/issues/205)
- Fixes NO-BREAK SPACE Issue [#199](https://github.com/rangav/thunder-client-support/issues/199)
- Hide SetTo action option in Tests Tab [#242](https://github.com/rangav/thunder-client-support/issues/242)

### 1.6.1 - (2021-06-29)

**Bug Fixes**

- Fixes Basic auth not working in v1.6.0 [#241](https://github.com/rangav/thunder-client-support/issues/241)

### 1.6.0 - (2021-06-29)

**New Features**

- Duplicate Environment option [#232](https://github.com/rangav/thunder-client-support/issues/232)
- Codegen is now separate project, open for contribution on [github](https://github.com/rangav/thunder-codegen)

**Bug Fixes**

- Fixes Environment View display error [#240](https://github.com/rangav/thunder-client-support/issues/240)
- Fix codegen curl space after backslash [#228](https://github.com/rangav/thunder-client-support/issues/228)

### 1.5.0 - (2021-06-24)

**New Features**

- Code Snippet Generation support for Curl, C# HttpClient, Javascript, Python. Click on `{ }` icon for Code tab
- Save Disables Inputs for Query & Form
- Postman import disabled fields
- Env Tab `Set Default` option renamed to `Set Active`

**Bug Fixes**

- Fixes Env View special chars display error [#215](https://github.com/rangav/thunder-client-support/issues/215) [#201](https://github.com/rangav/thunder-client-support/issues/201)
- Fixes Html preview should be based on response data [#190](https://github.com/rangav/thunder-client-support/issues/190) [#192](https://github.com/rangav/thunder-client-support/issues/192)

### 1.4.1 - (2021-06-08)

**Bug Fixes**

- Fixes Import Env Bug
- Fixes Tests Env bug

### 1.4.0 - (2021-06-03)

**New Features**

- Clear All Acticity Menu Option
- Sorting of Collections now possible
- Sort Tests using Drag & Drop
- Run Request on Enter key
- Views File Icon added
- Lincese file included

**Bug Fixes**

- Fixes Form-encoded fields encoding issue [#174](https://github.com/rangav/thunder-client-support/issues/174)
- Fixes Query parameter that ends with '=' gets cleared [#166](https://github.com/rangav/thunder-client-support/issues/166)
- Fixes Tests bool true/false and null check tests
- Fixes When no response, set env var error [#180](https://github.com/rangav/thunder-client-support/issues/180)
- Fixes remove plus sign encoding from URL

### 1.3.0 - (2021-05-18)

**Announcement**

- We have crossed **100K downloads** from vscode marketplace, thanks everyone for the support.

**New Features**

- Import Curl Command
- Html Preview option for Html response.
- System/Dynamic Variables for random values of string, number email, date
- Headers bulk/raw edit mode
- OAuth 2.0 password credentials option
- Support relative paths for git folder location, see readme.
- Proxy exclude hosts option in settings
- Environment Variables multi-level expansion

**Bug Fixes**

- Fixes OAuth 2 client authentication option missing
- Fixes Empty thunderclient.db files created for every project
- Fixes New request window not created in active split pane
- Fixes {{envVar}} in test is replaced with actual value after the test runs
- Request Url encoding issues fixes

### 1.2.2 - (2021-05-07)

**Feature Changed**

- The set variable from header and cookie implementation changed
  - The prefix for set var from header is `header.` instead of `h:`
  - The prefix for set var from cookie is `cookie.` instead of `c:`
  - See documentation for updated details
- The set env var fields are green color highlighted now.

### 1.2.1 - (2021-05-06)

**New Features**

- File Upload feature now supports field name
- Set Env Var from text response, Headers and Cookie.
- Run Collection Requests are clickable links.
- Format json text when header is text/plain
- Enable Body in GET request

**Bug Fixes**

- Fixes space not encoded in Url
- Fixes Request error causes spinning without finishing
- Fixes Postman Import failed error for files
- Fixes Basic auth password should not be plain text field

### 1.2.0 - (2021-05-03)

**New Features**

- File Upload feature in Post Body
- Postman Import files support

**Bug Fixes**

- Fixes 'Failed to import' error message after cancelling Collections import
- Fixes + plus sign in query parameter not escaping
- Fixes Expands the variable name nested inside another var value
- Fixes Run Collection folders & requests sort order wrong

### 1.1.0 - (2021-04-29)

This will be major release with team features.

- **Custom Storage Location** for Collections, useful for teams to integrate with git
- **Nested folder support** for Collections
- Improved request creation workflow to save to collections faster
- **Run Last Request** from command palette.
- **Drap & Drop sorting** for requests & folders
- Support Ctrl+S to save env vars
- Create variable in env if doesn't exist when set
- Postman import nested folder support
- Proxy Support
- Lot of Bug fixes

For complete details of the update [visit here](https://github.com/rangav/thunder-client-support/issues/14)

### 1.0.7 - (2021-04-08)

- Fixed Postman Import error when request url is empty

### 1.0.6 - (2021-04-07)

- Fixes Postman import request body issue
- Cmd/Ctrl+Enter to execute request
- Set Environment Variable in Tests tab

### 1.0.5 - (2021-04-01)

- privacy and import/export sections added to readme

### 1.0.3 - (2021-03-31)

- Initial Release - Official Launch

### 1.0.0 - (2021-03-30)

- Testing Live
