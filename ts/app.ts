import {Tkhudulichtrongnuoc,Todau} from './data.js'
import { dulich_arr} from './data.js'

const chonao = (kind:Todau) => {
    if (typeof kind =='boolean') {
        if (kind==true) return "ngoài nước"; 
        else return "trong nước ";
    }
    else return kind as string;
}

const hiendulichtrongnuoc = (dl:Tkhudulichtrongnuoc) =>{
    return `<div>
     <h4>tên: ${dl.ten} </h4>
     <p>kind: ${ chonao(dl.kind) }</p>
     <img src="${dl.image}">
     <p>sale ${dl.sale}</p>
    </div>`;
}  


const dulichTrongNuoc = dulich_arr.filter(dl => dl.kind === false);

// Lọc khu du lịch "ngoài nước" (kind = true)
const dulichNgoaiNuoc = dulich_arr.filter(dl => dl.kind === true);

// Hiển thị danh sách các khu du lịch "trong nước" và "ngoài nước" vào HTML

export const showlistkhudulich = ()=>{
    const trongNuocTours = dulich_arr.filter(dl => !dl.kind);
    const ngoaiNuocTours = dulich_arr.filter(dl => dl.kind);

    // Gắn danh sách vào phần tử #data trong mỗi danh sách
    document.querySelector('#trongnuoc-list #data')!.innerHTML = trongNuocTours.map(hiendulichtrongnuoc).join("");
    document.querySelector('#ngoainuoc-list #data')!.innerHTML = ngoaiNuocTours.map(hiendulichtrongnuoc).join("");

    const html_arr = dulich_arr.map(hiendulichtrongnuoc);
    return html_arr.join("");
}
// Gọi hàm hiển thị khi trang đã tải
window.onload = () => {
    showlistkhudulich();
};
