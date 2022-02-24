/* ১. একদম প্রাথমিক স্টেপ হিসেবে jsonplaceholder এর ওয়েবসাইট থেকে ডাটা fetch করে সেটাকে কনসোল এ দেখাতে হবে। ধরো তুমি তাদের ওয়েবসাইট এ comments এর API এর লিংক কোনটা সেটা জাভাস্ক্রিপ্ট দিয়ে কোড করে সেই ডাটা কনসোল এ দেখতে পারতেছো কিনা। */
const commentSet = () =>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => loadData(data))
}
// 1st challenge is complate

// ২. যে কমেন্ট এর ডাটাগুলো কনসোল এ দেখাতে পারছো। সেগুলা আবার তুমি html এ দেখাতে পারতেছো কিনা। একটা সিস্টেম হবে তোমার একটা বাটন। থাকবে সেটাতে ক্লিক করলে ডাটা লোড হবে। তারপর সেই ডাটা তুমি ওয়েবসাইট এ দেখাবে। 

// const loadData = comment =>{
//     const dataLoad = document.getElementById('data-load');
//     for(const data of comment){
//     const div = document.createElement('div');
//     div.classList.add('styles')
//     div.innerHTML = `
//     <h3>Name: ${data.name}</h3>
//     <h4>Email: ${data.email}</h4>
//     `
//     dataLoad.appendChild(div)
// }
// }

// 2nd challlenge is end 

// ৩. আরেকটা সিস্টেম হবে। তুমি যে ডাটা লোড করেছো। সেটা কোন বাটনে ক্লিক করা লাগবে না। ওয়েবসাইট লোড হলেই সরাসরি ডাটা লোড হয়ে তারপর সেই ডাটা ওয়েবসাইট এ দেখাবে। চেষ্টা করবে লোড করা ডাটা এর দুইটা প্রপার্টি অবশ্যই দেখাবে। 
commentSet()
// 3rd challlenge is end 

// ৪. তুমি যে ডাটা লোড করেছো। বা ডাটা ওয়েবসাইট এ দেখাচ্ছ। সেই কোড এর মধ্যে arrow ফাংশন ইউজ করতে পারতেছো কিনা। যখন লুপ চালাচ্ছ সেখানে forEach ইউজ করতে পারতেছো কিনা। 
const loadData = comment =>{
    const dataLoad = document.getElementById('data-load');
       comment.forEach(data => {
    const div = document.createElement('div');
    div.classList.add('styles')
    div.innerHTML = `
    
    <h3>Name: ${data.name}</h3>
    <h4>Email: ${data.email}</h4>
    <button onclick="selectId('${data.id}')">Detail</button>
    `
    dataLoad.appendChild(div)
})
}
// 4th challlenge is end 

// ৫. ডাইনামিক ডাটা লোড। কোন একটা কমেন্ট এ ক্লিক করলে (কমেন্ট এর div এ বা কোন একটা বাটন এ )সেই কমেন্ট এর আইডি নিয়ে সেটা api এর url এ বসিয়ে (ডাইনামিকভাবে টেমপ্লেট স্ট্রিং দিয়ে) সেই ডাটা লোড করে। সেই ডাটা ওয়েবসাইট এ দেখাতে পারতেছো কিনা। 
function selectId(useId){
    fetch(`https://jsonplaceholder.typicode.com/comments?id=${useId}`)
    .then(res => res.json())
    .then(data => loadId(data[0]))
}
const loadId = data =>{
// console.log(data)
console.log(data)
const container = document.getElementById('container')
container.textContent = '';
    const div = document.createElement('div');
    div.classList.add('containers')
    div.innerHTML = `
               <h3>Name: ${data.name}</h3>
               <h4>Email: ${data.email}</h4>
               <button onclick="selectId('${data.id}')">Detail</button>
                `;
              
              
    container.appendChild(div);
}
// 5th challlenge is end 

// ৬. randomuser এর ওয়েবসাইট এ গিয়ে (randomuser.me) এ গিয়ে সেখান থেকে ডাটা লোড করবে। তারপর ইউজারের ছবি দেখাবে। শুধু সেটাও না। ইউজারের location এর মধ্যে যত কিছু আছে। সব দেখাবে ওয়েবসাইট এ। অর্থাৎ street, city, coordinates, timezone যেকোন একভাবে দেখলেই হবে। তবে দেখাতে হবে। 

