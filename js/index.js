/*
 * @Author: your name
 * @Date: 2021-03-29 17:50:04
 * @LastEditTime: 2021-04-05 09:12:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \链信app\js\index.js
 */
function init() {
       let str = ``;
       let str1 = ``;
       let str2 = ``;
       let str3= ``;
       data.forEach(item => {
              str += `<li><img src=${item.img}><p>${item.title}</p></li>`
       });
       data1.forEach(item => {
              str1 += `<li><img src=${item.img}></li>`;
       })
       data2.forEach(item => {
              str2 += `<img src=${item.img}>`;
       })
       data4.forEach(item=>{
              str3+=`
              <li>
              <div class="hea">
              <div class="headericon">
            <img src="img/5.png" alt="">
              </div>
              <div class="right">
              <div class="title">
            ${item.name}<span>${item.span}</span>
           </div>
           <div class="time">
          ${item.time}
           </div>
           </div>
           <div class="rig">
           关注
          </div>
          </div>  
          <div class="range">
         ${item.content}
          <img src="${item.img}" alt="">
         </div>
         <div class="footer">
         <ul>
             <span class="iconfont icon-dianzan">   ${item.span1}</span>
             <span class="iconfont icon-tubiao-">  ${item.span2}</span>
             <span class="iconfont icon-tubiao-"></span>
         </ul>
     </div>
              </li>
              `
       })
       $('.icon_bar ul').html(str);
       $('.icon_tit ul').html(str1);
       $('.lunbo .swiper-container .swiper-wrapper .swiper-slide .top').html(str2);
       $('.state .content ul').html(str3);
}
init();
let ul=document.getElementById("cc");
function foot() { 
       for (let i = 0; i < 50; i++) {
              let cct = Math.round(Math.random() * 5);
              let item = data3[cct];
              var li = document.createElement('li');
              let left = document.createElement('div');
              left.setAttribute('class', 'left');
              let img = document.createElement('img');
              img.setAttribute('src', item.img1);
              left.appendChild(img);
              //    console.log(left);
              let right = document.createElement('div');
              right.setAttribute('class', 'right');
              right.innerHTML = `<p><img src=${item.img}>${item.span2}</p><span>${item.span}</span>
          <span><del>${item.span2}</del></span>
          <div class="center">
                <span>${item.span3}</span>
                <span>${item.span4}</span>
          </div>
        <div class="bottom">
            <div class="left"></div>
            <div class="right"></div>
        </div>
         </div>`;
              li.appendChild(left);
              li.appendChild(right);
              ul.appendChild(li);
              
       }
 
}
foot();
function range(){
 
}
let li=footer.getElementsByTagName('li');
window.addEventListener('scroll',function(){
   let win=ul.offsetHeight+ul.offsetTop
   console.log(win);
     let wins=document.documentElement.scrollTop+document.documentElement.clientHeight;
     console.log(wins);
   if(wins>win-100){
       foot();
   }
})

function fn(val){
return  val<10?"0"+val:val;
}

timer=setInterval(()=>{
let o= new Date();
let c=o.getHours();
let d=o.getMinutes();
time.innerHTML=fn(c)+":"+fn(d);
},1000)

for(let i=0;i<li.length;i++){
    li[0].onclick=function(){
    homepage.style.display="block";
     state.style.display="none"
     playing.style.display="none";
  }   
  li[1].onclick=function(){
       homepage.style.display="none";
        state.style.display="block"
        playing.style.display="none";
     }   
     li[3].onclick=function(){
       playing.style.display="block";
       homepage.style.display="none";
       state.style.display="none"
     }
   
}


