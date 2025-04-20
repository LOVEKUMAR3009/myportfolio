const sections = document.querySelectorAll('.section');
const secbtns= document.querySelectorAll('.controlls');
const secbtn = document.querySelectorAll('.control');
const allsections = document.querySelector('.main-content');

function PageTransitionEvent(){

  for(let i = 0;i<secbtn.length;i++){
    secbtn[i].addEventListener('click',function(){
      let currentbtn = document.querySelectorAll('.active-btn');
      currentbtn[0].className = currentbtn[0].className.replace('active-btn','');
      this.className+='active-btn';
    })
  }

  // sections active class

  allsections.addEventListener('click',(e)=>{
    const id = e.target.dataset.id;
    if(id){
      //remove selected from the other btns
      sections.forEach((btn)=>{
        btn.classList.remove('active');
      })
      e.target.classList.add('active');
      

      // hide other sections
      sections.forEach((section)=>{
        section.classList.remove('active');
      });

      const element = document.getElementById(id);
      element.classList.add('active');
    }
  });
}

PageTransitionEvent();