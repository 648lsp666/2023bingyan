
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
        // �Ƚ�ÿ�����ص� RGB ֵ
        if (
          imagedata1[i] !== imagedata2[i] ||   // ��ɫͨ��
          imagedata1[i + 1] !== imagedata2[i + 1] ||   // ��ɫͨ��
          imagedata1[i + 2] !== imagedata2[i + 2]   // ��ɫͨ��
        ) {
          count++;
        }
      };
      setscore(count);
      console.log(count);
    }
  },[iframechange]);
