(this.webpackJsonppatients=this.webpackJsonppatients||[]).push([[0],{11:function(e,t,a){},23:function(e,t,a){e.exports=a(35)},35:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(16),c=a.n(r),m=(a(11),a(19)),o=a(5),i=a(22),u=a(8),s=a(9),p=a(17),d=a(18),E=a.n(d),h=function(e){var t=e.createAppointment,a=Object(n.useState)({pet:"",owner:"",date:"",time:"",symptoms:""}),r=Object(u.a)(a,2),c=r[0],m=r[1],o=Object(n.useState)(!1),i=Object(u.a)(o,2),d=i[0],h=i[1],f=function(e){m(Object(p.a)({},c,Object(s.a)({},e.target.name,e.target.value)))},b=c.pet,g=c.owner,v=c.date,N=c.time,w=c.symptoms;return l.a.createElement(n.Fragment,null,l.a.createElement("h2",null,"Crear Cita"),d?l.a.createElement("p",{className:"alerta-error"},"Todos los campos son obligatorios"):null,l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),""!==b.trim()&&""!==g.trim()&&""!==v&&""!==N&&""!==w?(h(!1),c.id=E()(),t(c),m({pet:"",owner:"",date:"",time:"",symptoms:""})):h(!0)}},l.a.createElement("label",null,"Nombre mascota "),l.a.createElement("input",{type:"text",name:"pet",className:"u-full-width",placeholder:"Nombre de tu mascota",onChange:f,value:b}),l.a.createElement("label",null,"Nombre due\xf1o "),l.a.createElement("input",{type:"text",name:"owner",className:"u-full-width",placeholder:"Nombre del due\xf1o",onChange:f,value:g}),l.a.createElement("label",null,"Fecha"),l.a.createElement("input",{type:"date",name:"date",className:"u-full-width",onChange:f,value:v}),l.a.createElement("label",null,"Hora"),l.a.createElement("input",{type:"time",name:"time",className:"u-full-width",onChange:f,value:N}),l.a.createElement("label",null,"S\xedntomas"),l.a.createElement("textarea",{className:"u-full-width",name:"symptoms",onChange:f,value:w}),l.a.createElement("button",{type:"submit",className:"u-full-width button-primary"},"Agregar CIta")))},f=function(e){var t=e.appointment,a=e.deleteAppointment;return l.a.createElement("div",{className:"cita"},l.a.createElement("p",null,"Mascota: ",l.a.createElement("span",null,t.pet)," "),l.a.createElement("p",null,"Due\xf1o: ",l.a.createElement("span",null,t.owner)," "),l.a.createElement("p",null,"Fecha: ",l.a.createElement("span",null,t.date)," "),l.a.createElement("p",null,"Hora: ",l.a.createElement("span",null,t.time)," "),l.a.createElement("p",null,"S\xedntomas: ",l.a.createElement("span",null,t.symptoms)," "),l.a.createElement("button",{className:"button eliminar u-full-width",onClick:function(){return a(t.id)}},"Eliminar \xd7"))},b=function(){var e=JSON.parse(localStorage.getItem("citas"));e||(e=[]);var t=Object(n.useState)(e),a=Object(u.a)(t,2),r=a[0],c=a[1];Object(n.useEffect)((function(){JSON.parse(localStorage.getItem("citas"))?localStorage.setItem("citas",JSON.stringify(r)):localStorage.setItem("citas",JSON.stringify([]))}),[r]);var m=function(e){var t=r.filter((function(t){return t.id!==e}));c(t)},o=0===r.length?"No hay citas":"Administra tus citas";return l.a.createElement(n.Fragment,null,l.a.createElement("h1",null,"Administrador de Pacientes"),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"one-half column"},l.a.createElement(h,{createAppointment:function(e){c([].concat(Object(i.a)(r),[e]))}})),l.a.createElement("div",{className:"one-half column"},l.a.createElement("h2",null,o),r.map((function(e){return l.a.createElement(f,{key:e.id,appointment:e,deleteAppointment:m})}))))))};var g=function(){return l.a.createElement(m.a,null,l.a.createElement(o.a,{path:"/",component:b}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[23,1,2]]]);
//# sourceMappingURL=main.7e5729e3.chunk.js.map