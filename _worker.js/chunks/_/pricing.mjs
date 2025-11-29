import{a as t}from"./turtles.mjs";const calculateMinPrice=(o,r=1)=>{const e=t.findIndex(t=>t.id===o);if(-1===e)return 10;let n=10;for(let t=1;t<=e;t++){0===(t-1)%3?n=Math.floor(1.7*n):n+=1}const s=1+.1*(r-1);return Math.floor(n*s)};export{calculateMinPrice as c};
//# sourceMappingURL=pricing.mjs.map
