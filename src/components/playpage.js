import { useParams } from 'react-router-dom';
import Header from './Header';
import React,{createContext,useContext,useState,useRef,useEffect,Component} from 'react';
import { onsubmit } from './Codeeditor';
import { basicSetup, EditorView} from 'codemirror';
import {keymap} from "@codemirror/view"
import {indentWithTab} from "@codemirror/commands"
import {javascript} from "@codemirror/lang-javascript"
import { html,languageConf } from '@codemirror/lang-html';
import Leftbar2 from './Leftbarplay';
import Footer from './footer';


function PlayPage() {
  // 使用 useParams() 获取动态路由参数
  const { id } = useParams();
  let dataArray;
  if(id.startsWith('battle')){
    dataArray = [
      {src:'https://cssbattle.dev/targets/167@2x.png'},
      {src:'https://cssbattle.dev/targets/168@2x.png'},
      {src:'https://cssbattle.dev/targets/169@2x.png'},
      {src:'https://cssbattle.dev/targets/170@2x.png'},
      {src:'https://cssbattle.dev/targets/171@2x.png'},
      {src:'https://cssbattle.dev/targets/154@2x.png'},
      {src:'https://cssbattle.dev/targets/153@2x.png'},
      {src:'https://cssbattle.dev/targets/152@2x.png'},
      {src:'https://cssbattle.dev/targets/151@2x.png'},
      {src:'https://cssbattle.dev/targets/150@2x.png'},
      {src:'https://cssbattle.dev/targets/149@2x.png'},
      {src:'https://cssbattle.dev/targets/148@2x.png'},
      {src:'https://cssbattle.dev/targets/147@2x.png'},
      {src:'https://cssbattle.dev/targets/158@2x.png'},
      {src:'https://cssbattle.dev/targets/157@2x.png'},
      {src:'https://cssbattle.dev/targets/156@2x.png'},
      {src:'https://cssbattle.dev/targets/155@2x.png'},
    ]
  }
  else {
    dataArray = [
      {src:'https://firebasestorage.googleapis.com/v0/b/cssbattleapp.appspot.com/o/user%2Fummd3POvEDfFyeFvVdOMG3OOrwE2%2Ftargets%2Ftarget_dZlhbpl.png?alt=media'},
      {src:'https://firebasestorage.googleapis.com/v0/b/cssbattleapp.appspot.com/o/user%2Fummd3POvEDfFyeFvVdOMG3OOrwE2%2Ftargets%2Ftarget_i4XFH3I.png?alt=media'},
      {src:'https://firebasestorage.googleapis.com/v0/b/cssbattleapp.appspot.com/o/user%2Fummd3POvEDfFyeFvVdOMG3OOrwE2%2Ftargets%2Ftarget_T7arYiU.png?alt=media'},
      {src:'https://firebasestorage.googleapis.com/v0/b/cssbattleapp.appspot.com/o/user%2Fummd3POvEDfFyeFvVdOMG3OOrwE2%2Ftargets%2Ftarget_8tWoYsH.png?alt=media'},
      {src:'https://firebasestorage.googleapis.com/v0/b/cssbattleapp.appspot.com/o/user%2Fummd3POvEDfFyeFvVdOMG3OOrwE2%2Ftargets%2Ftarget_zFP5kGg.png?alt=media'},
      {src:'https://firebasestorage.googleapis.com/v0/b/cssbattleapp.appspot.com/o/user%2Fummd3POvEDfFyeFvVdOMG3OOrwE2%2Ftargets%2Ftarget_FqPRWOA.png?alt=media'},
      {src:'https://firebasestorage.googleapis.com/v0/b/cssbattleapp.appspot.com/o/user%2Fummd3POvEDfFyeFvVdOMG3OOrwE2%2Ftargets%2Ftarget_jELVrVb.png?alt=media'},
      {src:'https://firebasestorage.googleapis.com/v0/b/cssbattleapp.appspot.com/o/user%2Fummd3POvEDfFyeFvVdOMG3OOrwE2%2Ftargets%2Ftarget_T4L4qry.png?alt=media'},
      {src:'https://firebasestorage.googleapis.com/v0/b/cssbattleapp.appspot.com/o/user%2Fummd3POvEDfFyeFvVdOMG3OOrwE2%2Ftargets%2Ftarget_nEiqMpK.png?alt=media'},
    ]
  }
  // 根据不同的 id 加载不同的内容
  const tragetsrc = dataArray[id-1].src;
  const editorRef = useRef(null);
  const viewRef = useRef(null);
  const canvasRef = useRef(null);
  const [code,setcode] = useState('');
  const checkcanvasRef = useRef(null);
  //代码编辑器效果
  useEffect(() => {

    function render(){
        const frameDom = document.querySelector('iframe');
        frameDom.srcdoc = viewRef.current.state.doc.toString();
        setIframechange(iframechange+1);
    };
    if (!viewRef.current) {
      const defaultText = `
      <div></div>
      <style>
          div {
          width: 100px;
          height: 100px;
          background: #000;
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
      const frameDom = document.querySelector('iframe');
      frameDom.srcdoc = view.state.doc.toString();
      frameDom.contentDocument.addEventListener('change',render);
    }
    else{
        const codespace = document.querySelector('#render');
        codespace.addEventListener('click',render);
        document.addEventListener('keydown', function(event) {
            if (event.ctrlKey && event.key === 's') {
              event.preventDefault();
              render();
            }
        });   
        
    }
    
  }, [viewRef.current]);
    //实现代码编辑器和编译

    const [ishover,setishover] = useState(false);
    const [positionX, setPositionX] = useState(0);
    const [iframewidth, setiframewidth] = useState('100%');
    const [lastMouseX, setLastMouseX] = useState(400);
    const [sliceischecked, setsliceischecked] = useState(false);
    const [diffischecked, setdiffischecked] = useState(false);
    const [highestscore, sethighestscore] = useState(0);
    const [score, setscore] = useState('-');
    const [iframechange, setIframechange] = useState(0);
    var color = [];

    useEffect(()=>{
    const preview = document.querySelector('.preview');
    const iframe = document.querySelector('#outputchart');
    function mouseenter(){
        setishover(true);
        
    }
    function mouseleave(){
        
        setishover(false);
    }
    iframe.addEventListener('mouseenter',mouseenter);
    iframe.addEventListener('mouseleave',mouseleave);
    return () => {
        // 在这里执行清除操作
        iframe.removeEventListener('mouseenter', mouseenter);
        iframe.removeEventListener('mouseleave', mouseleave);
    }
},[ishover,iframewidth,positionX]);

//实现canvas
useEffect(()=>{
  const canvas = canvasRef.current;
  const context = canvas.getContext('2d');
  const image = new Image();
  image.src = tragetsrc;
  image.onload = () => {
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
  };
  //代码渲染到canvas
}, []);

//slide&compare复选框效果
useEffect(() => {
    const iframe = document.querySelector('#outputchart');
    const slide = document.querySelector('#slice');
  
    function mousemove(e) {
      if (lastMouseX > positionX) {
        const boxrect = iframe.getBoundingClientRect();
        const mouseX = Math.floor(e.clientX - boxrect.left);
        const newwidth = (mouseX / 4) + '%';
        setPositionX(mouseX);
        setLastMouseX(mouseX);
        setiframewidth(newwidth);
      }
    }
    function sliceonclick(){
            if (sliceischecked) {
                iframe.addEventListener('mousemove', mousemove);
            
                setsliceischecked(false);
              } else {
                iframe.removeEventListener('mousemove', mousemove);
                setsliceischecked(true);
                
              }
        };
    slide.addEventListener('click',sliceonclick);
  
    if (sliceischecked) {
      iframe.addEventListener('mousemove', mousemove);
      
    } else {
      iframe.removeEventListener('mousemove', mousemove);
    }
    slide.setAttribute('checked', sliceischecked ? 'true' : 'false');

    return () => {
      // 在这里执行清除操作
      slide.removeEventListener('click',sliceonclick);
    };
    
  }, [sliceischecked]);


  //diff复选框效果 
    useEffect(()=>{
        const diff = document.querySelector("#diff");
        function diffonclick(){
            if (diffischecked) {
                setdiffischecked(false);
              } else {
                setdiffischecked(true);
              }
        }
        diff.addEventListener('click',diffonclick);
        return() =>{
            diff.removeEventListener('click',diffonclick);
        }
    },[diffischecked]);


  //计分效果
    useEffect(()=>{
      const ok = document.querySelector('#ok');
      const submit = document.querySelector('#submitcode');
      const iframe = document.querySelector('#outputchart');
      const scorepage = document.querySelector('.submitthescore');
      function render(){
        iframe.srcdoc = viewRef.current.state.doc.toString();
    };
      function getyourscore(){
        render();
        const yourscore = Math.floor(Math.random()*100);
        if(yourscore>highestscore) sethighestscore(yourscore);
        setscore(yourscore);
        scorepage.style.transform = 'translateY(0px)';
        scorepage.style.visibility = 'visible';
        scorepage.style.opacity = '1';
      }
      function overyourscore(){
        scorepage.style.visibility = 'hidden';
        scorepage.style.opacity = '0';
        scorepage.style.transform = 'translateY(-80px)';
      }
      submit.addEventListener('click',getyourscore);
      ok.addEventListener('click',overyourscore);
      return ()=>{
        submit.removeEventListener('click',getyourscore);
        ok.removeEventListener('click',overyourscore);
      }
    });

    const iframestyle = {
        opacity: (ishover||diffischecked)? 0.7:1,
        width: (ishover&&sliceischecked)?iframewidth:100+'%',
        transition: ishover? "0.2s all ease":".3s all ease",
        mixBlendMode: diffischecked? 'color-dodge':'normal',
    };
    const previewstyle = {
        left: (ishover&&sliceischecked)? positionX:400+'px',
        opacity:(ishover&&sliceischecked)? 1:0,
    }

    //实现目标图像和用户图像比对
  return (
    <div className='playapp'>
        <Leftbar2></Leftbar2>
        <Header></Header>
    <div className="play-page">
        <div className='submitthescore'>
          <div className='scorecard'>
          <svg width="30" height="30" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.9986 5L17.8856 17.4776L4 19.4911L14.0589 29.3251L11.6544 43L23.9986 36.4192L36.3454 43L33.9586 29.3251L44 19.4911L30.1913 17.4776L23.9986 5Z" fill="#f8e71c" stroke="#f8e71c" stroke-width="4" stroke-linejoin="round"/></svg>
          <h2>You scored {score}!</h2>
          <p>Sign in to CSSBattle and get the following awesome benefits</p>
          <div>
            <button className='button' id='ok'>Cancel</button>
            <a href='/login'>
            <button className='button'>signup/login</button>
            </a>
          </div>
          </div>
        </div>
        <div className='play-content code'>
        <div className='item-header codeh'><p>Editor</p></div>
            <div className="codespace" ref={editorRef} >
                
            </div>
            <div className='codefooter'>
                <button className='button' id='render'><svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 7H16C20.4183 7 24 10.5817 24 15V42C24 38.6863 21.3137 36 18 36H5V7Z" fill="none" stroke="#fff" stroke-width="4" stroke-linejoin="round"/><path d="M43 7H32C27.5817 7 24 10.5817 24 15V42C24 38.6863 26.6863 36 30 36H43V7Z" fill="none" stroke="#fff" stroke-width="4" stroke-linejoin="round"/></svg> Render to Output</button>
                <button className='button' id='submitcode'><svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="7" y="22.0476" width="34" height="22" rx="2" fill="none" stroke="#fff" stroke-width="4" stroke-linejoin="round"/><path d="M14 22V14.0047C13.9948 8.87022 17.9227 4.56718 23.0859 4.05117C28.249 3.53516 32.9673 6.97408 34 12.0059" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M24 30V36" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>Submit</button>
        </div>
      </div>
            <div className='play-content output'>
        <div className='item-header outputh'><p>Check Your Output</p>
        <div className='codespacecheckdiv'>
        <input type='checkbox' className='codespacecheck' id='slice' style={{width:25+'px'}} checked={sliceischecked}></input><label htmlFor='slice'>Slide & compare</label>
        </div>
        <div className='codespacecheckdiv'>
        <input type='checkbox' className='codespacecheck' id='diff' style={{width:25+'px'}} ></input><label htmlFor='slice'>Diff</label>
        </div>
        </div>
        <div className='outputchart'
         id="outputchart">
        <img src={tragetsrc}></img>
            <iframe style={iframestyle}
            id='outputframe'>


            </iframe>
            <canvas 
            id='outputcheck'
            ref={checkcanvasRef}
            style={{width:'100%',height:'100%',pointerEvents:'none'}}></canvas>
            <div className='preview' style={previewstyle}>{positionX}</div>
            </div>
            <div className='statsheader'><p>Your stats</p></div>
            <div className='statsbody'>
                <div className='stats'><label><svg width="15" height="15" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.9986 5L17.8856 17.4776L4 19.4911L14.0589 29.3251L11.6544 43L23.9986 36.4192L36.3454 43L33.9586 29.3251L44 19.4911L30.1913 17.4776L23.9986 5Z" fill="#f8e71c" stroke="#f8e71c" stroke-width="4" stroke-linejoin="round"/></svg></label>
                <p>Last score</p>
                <p style={{color:'yellow'}}>{score}</p>
                </div>
                <div className='stats'><label><svg width="15" height="15" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 4H37L26 18H41L17 44L22 25H8L19 4Z" fill="#f8e71c" stroke="#f8e71c" stroke-width="4" stroke-linejoin="round"/></svg></label>
                <p>High score</p>
                <p style={{color:'yellow'}}>{highestscore}</p>
                </div>                
            </div>
      </div>
      <div className='play-content targetoutput'>
        <div className='item-header targeth'><p>Target</p><p style={{transform:'translateX(150px)'}}>size:400px*300px</p></div>
        <div className='outputchart'>
            <canvas 
            ref={canvasRef}
            style={{width:'100%',height:'100%'}}></canvas>
            </div>
            <div className='statsheader'><p>Global stats</p></div>
            <div className='statsbody2'>
                <div className='globalstats'>
                    <label>
                    <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" stroke="#9b9b9b" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M24 23C26.7614 23 29 20.7614 29 18C29 15.2386 26.7614 13 24 13C21.2386 13 19 15.2386 19 18C19 20.7614 21.2386 23 24 23Z" fill="#9b9b9b" stroke="#9b9b9b" stroke-width="4" stroke-linejoin="round"/><path d="M10.022 38.332C10.3657 33.1206 14.7016 29 20 29H28C33.2914 29 37.6229 33.1097 37.9767 38.3113" stroke="#9b9b9b" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </label>
                    <div className='globalintro'><h3>Players</h3>
                    <p>5</p>
                    </div>
                </div>
                <div className='globalstats'>
                    <label>
                    <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.9986 5L17.8856 17.4776L4 19.4911L14.0589 29.3251L11.6544 43L23.9986 36.4192L36.3454 43L33.9586 29.3251L44 19.4911L30.1913 17.4776L23.9986 5Z" fill="#9b9b9b" stroke="#9b9b9b" stroke-width="4" stroke-linejoin="round"/></svg>
                    </label>
                    <div className='globalintro'><h3>Avg.score</h3>
                    <p>89</p>
                    </div>
                </div>
            </div>
      </div>
    </div>
    <Footer></Footer>
    </div>
  );
}

export default PlayPage;
