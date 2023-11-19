import React, { useState } from 'react';
import './App.css';
import useEditor from '../src/hooks/useEditor';

function App() {
  const [html, setHtml] = useState<string>('');
  const [css, setCss] = useState<string>('');
  const [script, setScript] = useState<string>('');
  const resScreen = useEditor({config:{
    js:{
      snippit:script
    },
    css:{
      snippit:css
    },
    html:{
      snippit:html
    }
  }})

  return (<>

  <div style={{display:'flex', overflow:'auto'}}>
    <fieldset><legend>HTML</legend><textarea style={{width:'400px', height:'250px'}} value={html} onChange={(ev)=>{setHtml(ev.target.value)}}></textarea></fieldset>
    <fieldset><legend>CSS</legend><textarea style={{width:'400px', height:'250px'}} value={css} onChange={(ev)=>{setCss(ev.target.value)}}></textarea></fieldset>
    <fieldset><legend>JS</legend> <textarea style={{width:'400px', height:'250px'}} value={script} onChange={(ev)=>{setScript(ev.target.value)}}></textarea></fieldset>
  </div>
  Output
  <div className='output-1'  style={{width:'100%', height:'250px'}} {...resScreen.elementProps}></div>
  </>
  );
}

export default App;
