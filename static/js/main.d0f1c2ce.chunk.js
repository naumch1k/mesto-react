(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{13:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(5),o=a.n(c),i=(a(4),a(2)),r=a.p+"static/media/header-logo.5f3664ca.svg",l=a(0);var m=function(){return Object(l.jsx)("header",{className:"header page__header",children:Object(l.jsx)("img",{className:"header__logo",src:r,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u0441\u0435\u0440\u0432\u0438\u0441\u0430 Mesto Russia"})})},u=a(6),d=a(7),_=new(function(){function e(t){Object(u.a)(this,e),this._baseUrl=t.baseUrl,this._token=t.headers.authorization}return Object(d.a)(e,[{key:"_handleResponse",value:function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}},{key:"getCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:{authorization:this._token}}).then(this._handleResponse)}},{key:"addNewCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,link:e.link})}).then(this._handleResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._token,"Content-Type":"application/json"}}).then(this._handleResponse)}},{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:{authorization:this._token}}).then(this._handleResponse)}},{key:"setUserInfo",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,about:e.about})}).then(this._handleResponse)}},{key:"setUserAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:e.avatar})}).then(this._handleResponse)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e._id),{method:"DELETE",headers:{authorization:this._token,"Content-Type":"application/json"}}).then(this._handleResponse)}},{key:"setLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e._id),{method:"PUT",headers:{authorization:this._token,"Content-Type":"application/json"}}).then(this._handleResponse)}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-24",headers:{authorization:"2a6d7634-25aa-4e7e-bcf3-8309525480f9","Content-Type":"application/json"}});var h=function(e){return Object(l.jsxs)("li",{className:"element",children:[Object(l.jsx)("img",{onClick:function(){e.onClick(e.card)},className:"element__image",src:e.card.link,alt:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 ".concat(e.card.name)}),Object(l.jsxs)("div",{className:"element__desc",children:[Object(l.jsx)("h3",{className:"element__title",children:e.card.name}),Object(l.jsxs)("div",{className:"element__like-container",children:[Object(l.jsx)("button",{className:"element__like-btn",type:"button","aria-label":"\u041f\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043b\u0430\u0439\u043a"}),Object(l.jsx)("span",{className:"element__like-count",children:e.card.likes.lenght})]})]}),Object(l.jsx)("button",{className:"element__delete-btn element__delete-btn_hidden",type:"button","aria-label":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044e"})]})};var p=function(e){var t=s.a.useState(""),a=Object(i.a)(t,2),n=a[0],c=a[1],o=s.a.useState(""),r=Object(i.a)(o,2),m=r[0],u=r[1],d=s.a.useState(""),p=Object(i.a)(d,2),j=p[0],b=p[1],f=s.a.useState([]),O=Object(i.a)(f,2),x=O[0],N=O[1];return s.a.useEffect((function(){_.getUserInfo().then((function(e){c(e.name),u(e.about),b(e.avatar)})).catch((function(e){console.log("Error: ".concat(e))}))})),s.a.useEffect((function(){_.getCards().then((function(e){return N(e)})).catch((function(e){console.log("Error: ".concat(e))}))})),Object(l.jsxs)("main",{className:"content page__content",children:[Object(l.jsxs)("section",{className:"profile content__section",children:[Object(l.jsxs)("div",{className:"profile__avatar-container",children:[Object(l.jsx)("img",{className:"profile__avatar",src:j,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u043f\u0440\u043e\u0444\u0438\u043b\u044f"}),Object(l.jsx)("button",{className:"profile__avatar-btn","aria-label":"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",onClick:e.onEditAvatar})]}),Object(l.jsxs)("div",{className:"profile__info",children:[Object(l.jsx)("h1",{className:"profile__name",children:n}),Object(l.jsx)("p",{className:"profile__bio",children:m}),Object(l.jsx)("button",{className:"profile__edit-btn",type:"button","aria-label":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",onClick:e.onEditProfile})]}),Object(l.jsx)("button",{className:"profile__add-btn",type:"button","aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044e",onClick:e.onAddPlace})]}),Object(l.jsx)("section",{className:"elements content__section",children:Object(l.jsx)("ul",{className:"elements__list",children:x.map((function(t){return Object(l.jsx)(h,{onClick:e.onCardClick,card:t},t._id)}))})})]})};var j=function(){return Object(l.jsx)("footer",{className:"footer page__footer",children:Object(l.jsx)("p",{className:"footer__copyright",children:"\xa9 2021 Mesto Russia"})})};var b=function(e){return Object(l.jsx)("div",{className:"popup popup_type_".concat(e.name,"  ").concat(e.isOpen&&"popup_opened"),children:Object(l.jsxs)("div",{className:"popup__container popup__container_type_form",children:[Object(l.jsx)("button",{onClick:e.onClose,className:"popup__close-btn",type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043e\u043a\u043d\u043e"}),Object(l.jsxs)("form",{className:"form",name:"".concat(e.name,"-form"),noValidate:!0,children:[Object(l.jsx)("h2",{className:"form__heading",children:e.title}),Object(l.jsx)("fieldset",{className:"form__items",children:e.children}),Object(l.jsx)("button",{className:"form__submit-btn",type:"submit",children:e.buttonText})]})]})})};var f=function(e){var t=e.card,a=e.onClose;return Object(l.jsx)("div",{className:"popup popup_type_image ".concat(t&&"popup_opened"),children:Object(l.jsxs)("div",{className:"popup__container popup__container_type_image",children:[Object(l.jsx)("button",{onClick:a,className:"popup__close-btn",type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043e\u043a\u043d\u043e"}),Object(l.jsxs)("figure",{className:"popup__figure",children:[Object(l.jsx)("img",{className:"popup__image",src:"".concat(t.link),alt:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 ".concat(t.name)}),Object(l.jsx)("figcaption",{className:"popup__image-caption",children:t.name})]})]})})};var O=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(!1),o=Object(i.a)(c,2),r=o[0],u=o[1],d=Object(n.useState)(!1),_=Object(i.a)(d,2),h=_[0],O=_[1],x=Object(n.useState)(null),N=Object(i.a)(x,2),v=N[0],k=N[1];function g(){s(!1),u(!1),O(!1),k(null)}return Object(l.jsx)("div",{className:"page",children:Object(l.jsxs)("div",{className:"page__container",children:[Object(l.jsx)(m,{}),Object(l.jsx)(p,{onEditProfile:function(){s(!a)},onAddPlace:function(){u(!r)},onEditAvatar:function(){O(!h)},onCardClick:function(e){k(e)}}),Object(l.jsx)(j,{}),Object(l.jsxs)(b,{name:"edit",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:a,onClose:g,children:[Object(l.jsx)("input",{className:"form__item form__item_el_name",id:"profile-name",type:"text",name:"name",placeholder:"\u0418\u043c\u044f",minLength:"2",maxLength:"40",required:!0}),Object(l.jsx)("p",{className:"form__error",id:"profile-name-error"}),Object(l.jsx)("input",{className:"form__item form__item_el_bio",id:"profile-bio",type:"text",name:"about",placeholder:"\u041e \u0441\u0435\u0431\u0435",minLength:"2",maxLength:"200",required:!0}),Object(l.jsx)("p",{className:"form__error",id:"profile-bio-error"})]}),Object(l.jsxs)(b,{name:"add",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",buttonText:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:r,onClose:g,children:[Object(l.jsx)("input",{className:"form__item form__item_el_name",id:"item-name",type:"text",name:"name",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"2",maxLength:"30",required:!0}),Object(l.jsx)("p",{className:"form__error",id:"item-name-error"}),Object(l.jsx)("input",{className:"form__item form__item_el_link",id:"item-url",type:"url",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),Object(l.jsx)("p",{className:"form__error",id:"item-url-error"})]}),Object(l.jsxs)(b,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:h,onClose:g,children:[Object(l.jsx)("input",{className:"form__item",id:"avatar-url",type:"url",name:"avatar",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),Object(l.jsx)("p",{className:"form__error",id:"avatar-url-error"})]}),Object(l.jsx)(b,{name:"confirm",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",buttonText:"\u0414\u0430"}),v&&Object(l.jsx)(f,{card:v,onClose:g})]})})},x=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,14)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),n(e),s(e),c(e),o(e)}))};o.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(O,{})}),document.getElementById("root")),x()},4:function(e,t,a){}},[[13,1,2]]]);
//# sourceMappingURL=main.d0f1c2ce.chunk.js.map