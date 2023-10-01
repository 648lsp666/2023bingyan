import React, {useState, useRef, useEffect } from 'react';
import { basicSetup, EditorView } from 'codemirror';
import { markdown } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';
import { useCode } from './playpage';

export function onsubmit(){
    var codes = Array.from(document.querySelectorAll('.cm-line'));
    const data = codes.map((codeline) =>{
        return codeline.innerHTML;
    })
    const htmldata = data.join('');
    
}

function CodeEditor() {
  const editorRef = useRef(null);
  const viewRef = useRef(null);
  const [code, setCode] = useState('');


  useEffect(() => {
    if (!viewRef.current) {
      const defaultText = `<div></div>
      <style>
          div {
          width: 100px;
          height: 100px;
          background: #dd6b4d;
          }
      </style>
      
      <!-- OBJECTIVE -->
      <!-- Write HTML/CSS in this editor and replicate the given target image in the least code possible. What you write here, renders as it is -->
      
      <!-- SCORING -->
      <!-- The score is calculated based on the number of characters you use (this comment included :P) and how close you replicate the image. Read the FAQS (https://cssbattle.dev/faqs) for more info. -->
      
      <!-- IMPORTANT: remove the comments before submitting -->`;

      const view = new EditorView({
        doc: defaultText,
        extensions: [basicSetup, markdown({ codeLanguages: languages })],
      });

      viewRef.current = view;
      editorRef.current.appendChild(view.dom);
      setCode(defaultText);

    }
  }, [setCode]);

  return (
    <div className='play-content code'>
        <div className='item-header codeh'><p>Editor</p></div>
            <div className="codespace" ref={editorRef}></div>
            <div className='codefooter'>
                <button className='button'><svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 7H16C20.4183 7 24 10.5817 24 15V42C24 38.6863 21.3137 36 18 36H5V7Z" fill="none" stroke="#fff" stroke-width="4" stroke-linejoin="round"/><path d="M43 7H32C27.5817 7 24 10.5817 24 15V42C24 38.6863 26.6863 36 30 36H43V7Z" fill="none" stroke="#fff" stroke-width="4" stroke-linejoin="round"/></svg> Top Solutions</button>
                <button className='button' onClick={onsubmit}><svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="7" y="22.0476" width="34" height="22" rx="2" fill="none" stroke="#fff" stroke-width="4" stroke-linejoin="round"/><path d="M14 22V14.0047C13.9948 8.87022 17.9227 4.56718 23.0859 4.05117C28.249 3.53516 32.9673 6.97408 34 12.0059" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M24 30V36" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>Submit</button>
        </div>
      </div>
  );
}

export default CodeEditor;
