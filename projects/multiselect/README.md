# MAT MULTISELECT DROPDOWN

mat-multiselect is a simple multiselect select with filter,select all and clear all functionalities . 

# Installation

With [npm](http://npmjs.org) do:

    $ npm install mat-multiselect
	
## What is it good for?
The library allows you to:

* Create a multiselect component
* configuraable filer, selectall and clearall options
* output of selected options only as of now

# Dependencies
* Angular CDK 6.2.0
* Angular Material 6.2.0
* @material-extended/mde 2.0.1
* material icons
* css import for material theme

# Examples

1. provide material icon css link in index.html 
   <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
2. provide material theme import in stayle.css
   @import '~@angular/material/prebuilt-themes/deeppurple-amber.css';
3. import 'BrowserAnimationsModule' in your app module
4. Provide data and options as input to this library
5. Recieve selected options via changeSelection output
```html
<mat-multiselect [data]="data" [options]="options" (changeSelection)="changeSelection($event)">
</mat-multiselect>
```
```typescript
  data = {
    placeHolder: 'Locations',
    enableSelectClear: true,
    enableSearch: true
  }
  options = [
    {name: 'ind', value: 'India'}, 
    {name: 'nep', value: 'Nepal', checked: true},
    {name: 'bon', value: 'Bondhar'},
    {name: 'Kat', value: 'Kathmandu', checked: true},
    {name: 'ner', value: 'Nerli'},
    {name: 'bom', value: 'Bombay'},];
  changeSelection(options){
    console.log(options);
  }
```

For more detailed information please check out the [GIT HUB](https://github.com/arsulesandy/multi-select).

