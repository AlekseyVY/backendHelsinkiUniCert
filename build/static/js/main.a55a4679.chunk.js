(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){e.exports=n(38)},37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(13),u=n.n(c),o=n(2),l=n(3),m=n.n(l),i="/api/persons",s=function(){return m.a.get(i)},b=function(e){return m.a.post(i,e)},d=function(e){console.log(e),m.a.delete("".concat(i,"/").concat(e))},f=function(e,t,n){m.a.put("".concat(i,"/").concat(e),{name:n,number:t})},v=function(e){var t=e.value;e.sPer;return r.a.createElement("div",null,r.a.createElement("h2",null,"Numbers"),t.map(function(e){return r.a.createElement("li",{key:e.id},"name: ",e.name," number: ",e.number," ",r.a.createElement("button",{onClick:function(){window.confirm("Delete ".concat(e.name,"?"))&&d(e.id)}},"delete"))}))},E=function(e){var t=e.value,n=e.nameState,a=e.numberState,c=e.sPerson,u=e.sName,o=e.sNumber,l=e.hcName,m=e.hcNumber,i=0;return r.a.createElement("div",null,r.a.createElement("h2",null,"add a new"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var r={id:Math.random(),name:n,number:a};t.map(function(e){e.name.toLowerCase()===n.toLowerCase()&&(i=e.id)}),i>0?window.confirm("".concat(n," is already added to phonebook, replace the old number with new one?"))&&(console.log(i),f(i,a,n)):(b(r).then(function(e){c(t.concat(e.data))}),u(""),o(""))}},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:n,onChange:l})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:a,onChange:m})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add"))))},h=function(e,t,n){return e?t:t.filter(function(e){return e.name.toLowerCase().includes(n.toLowerCase())})},p=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1],u=Object(a.useState)(""),l=Object(o.a)(u,2),m=l[0],i=l[1],b=Object(a.useState)(""),d=Object(o.a)(b,2),f=d[0],p=d[1],w=Object(a.useState)(""),j=Object(o.a)(w,2),O=j[0],S=j[1],g=Object(a.useState)(!1),N=Object(o.a)(g,2),C=N[0],k=(N[1],Object(a.useState)("some error happened...")),P=Object(o.a)(k,2);P[0],P[1];Object(a.useEffect)(function(){s().then(function(e){return c(e.data)})},[]);var y=h(C,n,O);return r.a.createElement("div",null,r.a.createElement("h1",null,"Phonebook"),"filter shown with ",r.a.createElement("input",{value:O,onChange:function(e){S(e.target.value)}}),r.a.createElement(E,{value:n,nameState:m,numberState:f,sPerson:c,sName:i,sNumber:p,hcName:function(e){i(e.target.value)},hcNumber:function(e){p(e.target.value)}}),r.a.createElement("div",null,r.a.createElement(v,{value:y,sPer:c})))};n(37);u.a.render(r.a.createElement(p,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.a55a4679.chunk.js.map