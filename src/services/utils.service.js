export const send_alert = (
    text,
    backgroundColor = "red",
    color = "white",
    time = 3000
  ) => {
    console.log("teste");
    let aviso = document.createElement("div");
    aviso.innerText = text;
  
    let estilo = aviso.style;
    estilo.backgroundColor = backgroundColor;
    estilo.color = color;
    estilo.transition = "bottom 0.8s";
    estilo.bottom = "-60px";
      estilo.left = "0";
      estilo.right = "0";
    estilo.margin = "0 auto";
    estilo.position = "fixed";
    estilo.width = "33vw";
    estilo.padding = "12px";
    estilo.textAlign = "center";
      estilo.borderRadius = "45px";
  
    setTimeout(() => {
      estilo.bottom = "20px";
    }, 100);
  
    setTimeout(() => {
      estilo.bottom = "-60px";
      setTimeout(() => {
              aviso.parentElement.removeChild(aviso);
          }, 800);
    }, time);
  
    document.body.appendChild(aviso);
  };
  