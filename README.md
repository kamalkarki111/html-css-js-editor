
# HTML-CSS-JS-EDITOR

  

## Description

This npm library provides headless React hooks and self-suffiecient react components for building a powerful front-end editor. Developers can leverage these hooks to create custom editors for CSS, HTML, JavaScript, and even display console output.

  

## Installation

You can install this library using npm:

  

```bash

npm  install  html-css-js-editor

  

or

  

yarn  add  html-css-js-editor

  

Usage

### 1.  useHTMLEditor

This  hook  allows  you  to  manage  HTML  content  within  your  editor.  It  accepts  a  state  variable  containing  HTML  code  and  an  iframe  reference.

  

Example  usage:

  '''

import  {  useHTMLEditor  }  from  'html-css-js-editor';

  

const  MyHtmlEditor  = () => {

  

const  ref  =  useRef();

const [ value,  setValue  ]  =  useState('');

useHTMLEditor(value,  ref);

  

return (

<div>

<textarea  value={value}  onChnage={(ev)=>setValue(ev.taregt.value)}/>

//  Output  will  be  shown  here  in  iframe

<iframe  ref={ref}/>

</div>

);

};
'''
  

### 2.  useCSSEditor

Similar  to  useHTMLEditor,  this  hook  handles  CSS  code.  It  also  takes  a  state  variable  with  CSS  code  and  an  iframe  reference.

  '''

Example  usage:

  

import  {  useCSSEditor  }  from  'html-css-js-editor';

  

const  MyCssEditor  = () => {

  

const  ref  =  useRef();

const [ value,  setValue  ]  =  useState('');

useCSSEditor(value,  ref);

  

return (

<div>

<textarea  value={value}  onChnage={(ev)=>setValue(ev.taregt.value)}/>

//  Output  will  be  shown  here  in  iframe

<iframe  ref={ref}/>

</div>

);

};
'''
  

### 3.  useJSEditor

Similar  to  useHTMLEditor,  this  hook  handles  CSS  code.  It  also  takes  a  state  variable  with  CSS  code  and  an  iframe  reference.

  

Example  usage:

  '''

import  {  useCSSEditor  }  from  'html-css-js-editor';

import  {  useConsole  }  from  'html-css-js-editor';

  

const  MyCssEditor  = () => {

  

const  ref  =  useRef();

const [ value,  setValue  ]  =  useState('');

useJSEditor(value,  ref);

  

//  useConsole  return  the  console  logs  in  logs

const  {logs}  =  useConsole(value,  ref);

  

return (

<div>

<textarea  value={value}  onChnage={(ev)=>setValue(ev.taregt.value)}/>

//  Output  will  be  shown  here  in  iframe

<iframe  ref={ref}/>

</div>

);

};
'''
  

### 4.  Alternativly  all  Hooks  can  be  used  togather

  

Example  usage:

  '''

import  {  useCSSEditor  }  from  'html-css-js-editor';

import  {  useConsole  }  from  'html-css-js-editor';

import  {  useHTMLEditor  }  from  'html-css-js-editor';

import  {  useCSSEditor  }  from  'html-css-js-editor';

  

const  MyCssEditor  = () => {

  

const  ref  =  useRef();

const [ js,  setJs  ]  =  useState('');

const [ css,  setCss  ]  =  useState('');

const [ html,  setJs  ]  =  useState('');

useJSEditor(value,  ref);

  

//  useConsole  return  the  console  logs  in  logs

const  {logs}  =  useConsole(value,  ref);

  

return (

<div>

//  write  js  code  here

<textarea  value={js}  onChnage={(ev)=>setJs(ev.taregt.value)}/>

//  write  html  code  here

<textarea  value={html}  onChnage={(ev)=>setHtml(ev.taregt.value)}/>

//  write  css  code  here

<textarea  value={css}  onChnage={(ev)=>setCss(ev.taregt.value)}/>

//  Output  will  be  shown  here  in  iframe

<iframe  ref={ref}/>

</div>

);

};
'''
  

### 5.  This  Library  also  provide  the  prebuild  component  for  html,  css  and  js  editors  which  comes  with  monaco  editor ( before  using  the  component  install  https://www.npmjs.com/package/monaco-editor  and  https://www.npmjs.com/package/@monaco-editor/react)

  
'''
- <HTMLEditor/>

- <CSSEditor/>

- <JSEditor/>

- <Console>
'''
  

Contributing

Contributions  are  welcome!  Feel  free  to  open  issues  or  submit  pull  requests  on  our  GitHub  repository.

Run 'npm run build or yarn build' command to build and use the build ( bundle.esm.js ) inside dist folder for testing in your local project.

  

License

This  library  is  released  under  the  MIT  License.  See  the  LICENSE  file  for  details.

  
  

Remember  to  customize  the  content  according  to  your  library's specifics. Happy coding! 🚀