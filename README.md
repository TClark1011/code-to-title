# Code To Title

This is an extremely small, zero-dependency package for formatting code-style strings to a form more suitable for being displayed.

## Formatting

With all options left on default, the function in this package will:

- Replace dashes and underscores with spaces
- Break up instances of 'camelCase' with spaces
- Capitalize the first letter of every word.

```javascript
codeToTitle("camelCase"); // "Camel Case"
codeToTitle("dash-be-gone"); // "Dash Be Gone"
codeToTitle("underscore_be_gone"); // "Underscore Be Gone"
codeToTitle("camelCase-dash_underscore"); // "Camel Case Dash Underscore"
```

## Usage

Install the package with your preferred package manager:

`yarn add code-to-title`

OR

`npm install code-to-title`

Import/require the 'codeToTitle' function:

```javascript
import codeToTitle from "code-to-title";
```

OR

```javascript
const codeToTitle = require("code-to-title");
```

Then pass a string to the function

```javascript
const label = codeToTitle("codeFormattedName");
```

### Options

Extra options can be specified via an optional object second parameter:

**replaceWithSpace:** If provided a string or list of strings, replaces all occurrences of those strings with spaces. If given boolean `true`, the default value is used. If given boolean `false`, no characters will be replaced with spaces.

- **Expected Type(s):**`string | string[] | boolean`
- **Default Value:** `["-", "_"]`

```javascript
codeToTitle("space@between", { replaceWithSpace: "@" }); // "Space Between"
codeToTitle("one@two-three", { replaceWithSpace: ["@", "-"] }); // "One Two Three"
codeToTitle("hello%world", { replaceWithSpace: false }); // "Hello%world"
```

**breakupCamelCase:** If provided a string, that string will be used to breakup instances of camelCase. If provided boolean `true`, the default value is used. If provided boolean `false` instances of camelCase will be preserved.

- **Expected Type(s):** `string | boolean`
- **Default Value:**`" "`

```javascript
codeToTitle("camelCase", { breakupCamelCase: "_" }); // "Camel_Case"
codeToTitle("varName", { breakupCamelCase: false }); // "VarName"
```

**capitalizeWords:** Whether or not to capitalize the first letter of every word. Words are defined by spaces only.

- **Expected Type(s):**`boolean`
- **Default Value:**`true`

```javascript
codeToTitle("no caps for me", { capitalizeWords: false }); // "no caps for me"
```

## Typescript

This package was written in typescript and type declarations are included.
