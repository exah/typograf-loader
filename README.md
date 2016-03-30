# typograf-loader

Typograf loader module for webpack. Uses https://github.com/typograf/typograf

Issues with the output should be reported on the typograf [issue tracker](https://github.com/typograf/typograf/issues).


## Install

```
$ npm install --save-dev typograf-loader
```


## Usage

[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)

In your webpack.config.js, add the typograf-loader, chained with the other loaders.

This outputs processed html file with file-loader:

```javascript
loaders: [
  {
    test: /ru\.html$/,
    loaders: [
      'file?name=[name].[ext]',
      'typograf?lang=ru&mode=name'
    ]
  }
]
```


Or to process markdown texts:

```javascript
loaders: [
  {
    test: /ru\.md$/,
    loaders: [
      'html',
      'typograf?lang=ru&mode=name',
      'markdown'
    ]
  }
]
```


## Options

Full documentation can be found here: https://github.com/typograf/typograf

[List of rules](https://github.com/typograf/typograf/tree/dev/docs)


### lang

Set text language.

Type: `string` <br>
Default: `en` <br>
Options: `en` | `ru`


### mode

Set output style.

Type: `string` <br>
Default: `default` <br>
Options: `default` | `name` | `digit`

- `default`: utf-8 symbols
- `name`: html special characters with name: `&hellip`
- `digit`: html special characters in numbers form: `&#8230`


### enable

Enables rule.

Type: `string` | `[ string, ... ]` <br>
Default: `[]` <br>
Options: `*` | [Rules](https://github.com/typograf/typograf/tree/dev/docs)

### disable

Disables rule.

Type: `string` | `[ string, ... ]` <br>
Default: `[]` <br>
Options: `*` | [Rules](https://github.com/typograf/typograf/tree/dev/docs)


### Examples

Passing options as query string:

```javascript
...
loaders: [
  {
    test: /ru\.html$/,
    loaders: [
      'typograf?lang=ru&mode=name&enable[]=ru/optalign/*&disable[]=ru/money/ruble',
    ]
  }
]
...
```

Passing options from object as JSON string:

```javascript
...
loaders: [
  {
    test: /ru\.html$/,
    loaders: [
      'typograf?' + JSON.stringify({
        lang: 'ru',
        mode: 'name',
        enable: [ 'ru/optalign/*' ],
        disable: [ 'ru/money/ruble' ]
      }),
    ]
  }
]
...
```
