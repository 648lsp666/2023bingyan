import { useParams } from 'react-router-dom';
import Header from './Header';
import React,{createContext,useContext,useState,useRef,useEffect} from 'react';
import { onsubmit } from './Codeeditor';
import { basicSetup, EditorView} from 'codemirror';
import {keymap} from "@codemirror/view"
import {indentWithTab} from "@codemirror/commands"
import {javascript} from "@codemirror/lang-javascript"
import { html,languageConf } from '@codemirror/lang-html';
import { languages } from '@codemirror/language-data';
import ReactMarkdown from 'react-markdown';
import { htmlLanguage } from '@codemirror/lang-html';
import CodeMirror from 'codemirror';

const questionMap = {
    '1':<img src='https://firebasestorage.googleapis.com/v0/b/cssbattleapp.appspot.com/o/user%2Fummd3POvEDfFyeFvVdOMG3OOrwE2%2Ftargets%2Ftarget_FqPRWOA.png?alt=media' alt=''></img>,
    '2':<img src='' alt=''></img>,
    '3':<img src='' alt=''></img>,
    '4':<img src='' alt=''></img>,
    '5':<img src='' alt=''></img>,
    '6':<img src='' alt=''></img>,
}

function PlayPage() {
  // 使用 useParams() 获取动态路由参数
  const { id } = useParams();

  // 根据不同的 id 加载不同的内容
  const targetimg = questionMap[id]||<img src='' alt='内容失效'></img>;

  const [code,setcode] = useState('');
  const editorRef = useRef(null);
  const viewRef = useRef(null);

  useEffect(() => {
    if (!viewRef.current) {
      const defaultText = `
      <div></div>
      <style>
          div {
          width: 100px;
          height: 100px;
          background: red;
          }
      </style>
      `;

      const view = new EditorView({
        doc: defaultText,
        extensions: [basicSetup, html(),keymap.of([indentWithTab]),
        javascript()
    ],
      });
      viewRef.current = view;
      editorRef.current.appendChild(view.dom);
      console.log(view.state.doc.toString());
    }
    
  }, []);
  
  function onchange(){
    
  }

  return (
    <div className='playapp'>
        <Header></Header>
    <div className="play-page">
        <div className='play-content code'>
        <div className='item-header codeh'><p>Editor</p></div>
            <div className="codespace" ref={editorRef} onChange={onchange}>
                
            </div>
            <div className='codefooter'>
                <button className='button'><svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 7H16C20.4183 7 24 10.5817 24 15V42C24 38.6863 21.3137 36 18 36H5V7Z" fill="none" stroke="#fff" stroke-width="4" stroke-linejoin="round"/><path d="M43 7H32C27.5817 7 24 10.5817 24 15V42C24 38.6863 26.6863 36 30 36H43V7Z" fill="none" stroke="#fff" stroke-width="4" stroke-linejoin="round"/></svg> Top Solutions</button>
                <button className='button' onClick={onsubmit}><svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="7" y="22.0476" width="34" height="22" rx="2" fill="none" stroke="#fff" stroke-width="4" stroke-linejoin="round"/><path d="M14 22V14.0047C13.9948 8.87022 17.9227 4.56718 23.0859 4.05117C28.249 3.53516 32.9673 6.97408 34 12.0059" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M24 30V36" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>Submit</button>
        </div>
      </div>
            <div className='play-content output'>
        <div className='item-header outputh'><p>Output</p></div>
        <div className='outputchart' id="outputchart">
            <ReactMarkdown></ReactMarkdown>
            {targetimg}
            </div>
      </div>
      <div className='play-content targetoutput'>
        <div className='item-header targeth'><p>Target</p></div>
        <div className='outputchart'>
                {targetimg}
            </div>
      </div>
    </div>
    </div>
  );
}

export default PlayPage;
