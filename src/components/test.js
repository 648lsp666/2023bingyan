
useEffect(()=>{
    const canvas = checkcanvasRef.current;
    const targetcanvas = canvasRef.current;
    var context = canvas.getContext('2d');
    var contexttarget = targetcanvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    const iframe = document.querySelector('#outputchart');
    iframe.onload = function(){
      context.drawImage(iframe.innerHTML,0,0,'400px','300px');
      const imagedata1 = context.getImageData(0,0,'400px','300px');
      const imagedata2 = context.getImageData(0,0,'400px','300px');
      var count = 0;
      for (let i = 0; i < imagedata1.length; i += 4) {
        // 比较每个像素的 RGB 值
        if (
          imagedata1[i] !== imagedata2[i] ||   // 红色通道
          imagedata1[i + 1] !== imagedata2[i + 1] ||   // 绿色通道
          imagedata1[i + 2] !== imagedata2[i + 2]   // 蓝色通道
        ) {
          count++;
        }
      };
      setscore(count);
      console.log(count);
    }
  },[iframechange]);
