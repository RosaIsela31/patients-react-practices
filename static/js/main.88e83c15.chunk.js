(this.webpackJsonppatients=this.webpackJsonppatients||[]).push([[0],{11:function(e,t,a){},23:function(e,t,a){e.exports=a(35)},35:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(16),m=a.n(r),c=(a(11),a(19)),o=a(5),u=a(22),s=a(8),i=a(9),p=a(17),E=a(18),d=a.n(E),h=function(e){var t=e.createAppointment,a=Object(n.useState)({pet:"",owner:"",date:"",time:"",symptoms:""}),r=Object(s.a)(a,2),m=r[0],c=r[1],o=Object(n.useState)(!1),u=Object(s.a)(o,2),E=u[0],h=u[1],b=function(e){c(Object(p.a)({},m,Object(i.a)({},e.target.name,e.target.value)))},f=m.pet,v=m.owner,w=m.date,g=m.time,N=m.symptoms;return l.a.createElement(n.Fragment,null,l.a.createElement("h2",null,"Crear Cita"),E?l.a.createElement("p",{className:"alerta-error"},"Todos los campos son obligatorios"):null,l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),""!==f.trim()&&""!==v.trim()&&""!==w&&""!==g&&""!==N?(h(!1),m.id=d()(),t(m),c({pet:"",owner:"",date:"",time:"",symptoms:""})):h(!0)}},l.a.createElement("label",null,"Nombre mascota "),l.a.createElement("input",{type:"text",name:"pet",className:"u-full-width",placeholder:"Nombre de tu mascota",onChange:b,value:f}),l.a.createElement("label",null,"Nombre due\xf1o "),l.a.createElement("input",{type:"text",name:"owner",className:"u-full-width",placeholder:"Nombre del due\xf1o",onChange:b,value:v}),l.a.createElement("label",null,"Fecha"),l.a.createElement("input",{type:"date",name:"date",className:"u-full-width",onChange:b,value:w}),l.a.createElement("label",null,"Hora"),l.a.createElement("input",{type:"time",name:"time",className:"u-full-width",onChange:b,value:g}),l.a.createElement("label",null,"S\xedntomas"),l.a.createElement("textarea",{className:"u-full-width",name:"symptoms",onChange:b,value:N}),l.a.createElement("button",{type:"submit",className:"u-full-width button-primary"},"Agregar CIta")))},b=function(e){var t=e.appointment;return l.a.createElement("div",{className:"cita"},l.a.createElement("p",null,"Mascota: ",l.a.createElement("span",null,t.pet)," "),l.a.createElement("p",null,"Due\xf1o: ",l.a.createElement("span",null,t.owner)," "),l.a.createElement("p",null,"Fecha: ",l.a.createElement("span",null,t.date)," "),l.a.createElement("p",null,"Hora: ",l.a.createElement("span",null,t.time)," "),l.a.createElement("p",null,"S\xedntomas: ",l.a.createElement("span",null,t.symptoms)," "))},f=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],r=t[1];return l.a.createElement(n.Fragment,null,l.a.createElement("h1",null,"Administrador de Pacientes"),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"one-half column"},l.a.createElement(h,{createAppointment:function(e){r([].concat(Object(u.a)(a),[e]))}})),l.a.createElement("div",{className:"one-half column"},l.a.createElement("h2",null,"Administra tus citas"),a.map((function(e){return l.a.createElement(b,{key:e.id,appointment:e})}))))))};var v=function(){return l.a.createElement(c.a,null,l.a.createElement(o.a,{exact:!0,path:"/",component:f}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));m.a.render(l.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[23,1,2]]]);
//# sourceMappingURL=main.88e83c15.chunk.js.map