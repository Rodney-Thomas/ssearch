function !(selector)
{
  const self =
  {
    element: document.querySelector(selector),
    html: ()=> self.element,
    on:(event, callback)=>{
      document.addEventListener(event, callback)
    }
  }
  
  return self
}
