import { useParams } from 'react-router-dom';
import Header from './Header';
import CodeEditor from './Codeeditor';
import React,{createContext,useContext,useState} from 'react';
import Output from './Output';
import { onsubmit } from './Codeeditor';

const questionMap = {
    '1':<img src='' alt=''></img>,
    '2':<img src='' alt=''></img>,
    '3':<img src='' alt=''></img>,
    '4':<img src='' alt=''></img>,
    '5':<img src='' alt=''></img>,
    '6':<img src='' alt=''></img>,
}

const DataContext = createContext();

export function useCode() {
    return useContext(DataContext);
};

function PlayPage() {
  // 使用 useParams() 获取动态路由参数
  const { id } = useParams();

  // 根据不同的 id 加载不同的内容
  const targetimg = questionMap[id]||<img src='' alt='内容失效'></img>;

  const [code,setcode] = useState('');
  return (
    <div className='playapp'>
        <Header></Header>
    <div className="play-page">
        <DataContext.Provider value={{code,setcode}}>
            <CodeEditor></CodeEditor>
            <Output></Output>
        </DataContext.Provider>
      <div className='play-content targetoutput'>
        <div className='item-header targeth'><p>Editor</p></div>
      </div>
    </div>
    </div>
  );
}

export default PlayPage;
