import{numberCharacterMapInfo as e}from"../utils/numberMapInfo.js";const t=(t,r)=>{let l="";for(let r=0,n=t.length;r<n;r++)l+=e[Number(t[r])];for(let t=0,n=r.length;t<n;t++)l.includes(",")||(l+=","),l+=e[Number(r[t])];return l};export{t as default};
