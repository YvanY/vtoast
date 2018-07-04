# vtoast

> A simple toast based on Vue.js

[Demo](https://yvany.github.io/vtoast/example/)

## Install

``` bash
npm install @yvany/vtoast
```

## Example

```javascript
import toast from '@yvany/vtoast'

// default options
toast('Error !')

// custom options
toast({
  message: 'Error !',

  // auto close after 3000ms
  duration: 3000,

  // vue style binding
  style: {
    color: '#F56C6C',
    background: '#FEF0F0',
    border: '1px solid #FDE2E2'
  }

  // ...other html attributes
})
```
