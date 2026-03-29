//JS FOR THANK YOU PAGE
if(document.getElementById('progress')){ 
  let progress = document.getElementById('progress');
  let status = document.getElementById('status');
  let bill = document.querySelector('.order-summary');

  let stages = [
    "Preparing your food...",
    "Out for Delivery 🚴",
    "Delivered 🎉"
  ];

  let width = 0;
  let i = 0;

  let interval = setInterval(()=>{
    width += 33;
    progress.style.width = width + "%";

    if(i < stages.length){
      status.innerText = stages[i];
    }

    i++;

    if(width >= 100){
      clearInterval(interval);

      setTimeout(()=>{
        bill.classList.add("show");
        bill.scrollIntoView({behavior:"smooth"});
      },800);
    }

  },2000);
}

// if(document.getElementById('progress')){
//   let progress = document.getElementById('progress');
//   let status = document.getElementById('status');
//   let stages = ["Preparing your food...","Out for Delivery 🚴","Delivered 🎉"];
//   let width = 0;
//   let i = 0;

//   let interval = setInterval(()=>{
//     width += 33;
//     progress.style.width = width + "%";
//     status.innerText = stages[i];
//     i++;
//     if(width >= 100){
//       clearInterval(interval);
//     }
//   },2000);
// }
