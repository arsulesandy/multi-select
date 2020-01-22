# MAT MultiSelect Dropdown Library

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

# MAT Multiselect Dropdown

mat-multiselect is a simple multiselect select with filter,select all and clear all functionalities .

# Installation

With [npm](http://npmjs.org) do:

    $ npm install mat-multiselect

## What is it good for?

The library allows you to:

- Create a multiselect component
- configuraable filer, selectall and clearall options
- output of selected options only as of now

# Dependencies

- Angular CDK ^8.2.3,
- Angular Material ^8.2.3
- @material-extended/mde ^2.3.1
- material icons
- css import for material theme

# Examples

1. provide material icon css link in index.html
   <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
2. provide material theme import in stayle.css
   @import '~@angular/material/prebuilt-themes/deeppurple-amber.css';
3. import 'BrowserAnimationsModule' & 'MatMultiselectModule' in your app module
4. Provide data and options as input to this library
5. Recieve selected options via changeSelection output

```html
<mat-multiselect
  [data]="data"
  [options]="options"
  (changeSelection)="changeSelection($event)"
>
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
     console.table(options);
   }
```
