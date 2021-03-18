function !(selector)
{
  const self =
  {
    element: document.querySelector(selector),
    html: ()=> self.element,
    on:(event, callback)=>{
      document.addEventListener(event, callback)
    },
    hide: ()=>{
      self.element.style.display = "none"
    },
    show: ()=>{
      self.element.style.display = "inline"
    },
    attr:(name, value)=>{
      if(value == null) 
        self.element.getAttribute(name)
      else
        self.element.setAttribute(name,value)
    },
    template:()=>{
      document.getElementById('!content').style.fontFamily = "Arial"
      document.getElementById('!center').style.textAlign = "center"
    }
  }
  
  return self
}
