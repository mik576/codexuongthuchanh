import { dulich_arr } from './data.js';
const chonao = (kind) => {
    if (typeof kind == 'boolean') {
        if (kind == true)
            return "ngoài nước";
        else
            return "trong nước ";
    }
    else
        return kind;
};
const hiendulichtrongnuoc = (dl) => {
    return `<div>
     <h4>tên: ${dl.ten} </h4>
     <p>kind: ${chonao(dl.kind)}</p>
     <img src="${dl.image}">
     <p>sale ${dl.sale}</p>
    </div>`;
};
const dulichTrongNuoc = dulich_arr.filter(dl => dl.kind === false);
const dulichNgoaiNuoc = dulich_arr.filter(dl => dl.kind === true);
export const showlistkhudulich = () => {
    const trongNuocTours = dulich_arr.filter(dl => !dl.kind);
    const ngoaiNuocTours = dulich_arr.filter(dl => dl.kind);
    document.querySelector('#trongnuoc-list #data').innerHTML = trongNuocTours.map(hiendulichtrongnuoc).join("");
    document.querySelector('#ngoainuoc-list #data').innerHTML = ngoaiNuocTours.map(hiendulichtrongnuoc).join("");
    const html_arr = dulich_arr.map(hiendulichtrongnuoc);
    return html_arr.join("");
};
window.onload = () => {
    showlistkhudulich();
};
