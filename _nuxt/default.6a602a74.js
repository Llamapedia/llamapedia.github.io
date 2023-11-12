import{_ as P}from"./nuxt-link.f85f6a61.js";import{f as v,r as n,n as V,s as w,g as L,o as r,c as _,a as t,b as p,w as U,k as $,l as C,i as f,q as N,x as R,j,y as x,v as q,z as y,h as A,A as B,F as I}from"./entry.27dd4a2e.js";import{u as T}from"./vue.f36acd1f.2552569a.js";const M=""+new URL("user-circle.b7d7e5ba.svg",import.meta.url).href,K=""+new URL("user.00a75a3c.svg",import.meta.url).href,z=""+new URL("settings.8351913c.svg",import.meta.url).href,D=""+new URL("arrow-out.0451ae6b.svg",import.meta.url).href,O={class:"navbar"},E={class:"navbar-elements"},H=t("img",{alt:"Logo",class:"logo"},null,-1),J={class:"right-side"},W=["onKeyup"],G={class:"account-icon"},Q={key:0,class:"dropdown"},X=x('<a href="#" class="dropdown-content"><img src="'+K+'" alt=""> Profile </a><a href="#" class="dropdown-content"><img src="'+z+'" alt=""> Settings </a><a href="#" class="dropdown-content"><img src="'+D+'" alt=""> Logout </a>',3),Y=[X],Z=v({__name:"PageNav",setup(g){const s=n(),o=n({}),c=n(!1),e=n(""),a=V(),u=w("themeFileName");T(()=>({link:[{rel:"stylesheet",href:`/themes/${u}.css`}]})),L(()=>{b()});function h(){a.push(`/search/${e.value}`)}async function b(){const i=document.cookie.split("; ").find(l=>l.startsWith("access_token")),d=i?i.split("=")[1]:"",m=`
            query {
                Viewer {
                    name
                    avatar {
                        large
                    }
                }
            }
        `,S={},k=await fetch("https://graphql.anilist.co",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:`Bearer ${d}`},body:JSON.stringify({query:m,variables:S})});if(k.status===200){const l=await k.json();console.log(l),o.value=l.data.Viewer,s.value.src=l.data.Viewer.avatar.large,c.value=!0}}return(F,i)=>{const d=P;return r(),_("nav",O,[t("div",E,[p(d,{to:"/",class:"logo"},{default:U(()=>[H]),_:1}),t("div",J,[$(t("input",{type:"search",placeholder:"Search",class:"search-bar","onUpdate:modelValue":i[0]||(i[0]=m=>N(e)?e.value=m:null),onKeyup:R(h,["enter"])},null,40,W),[[C,f(e)]]),t("div",G,[t("img",{ref_key:"usericon",ref:s,src:M,alt:"Account",class:"account-icon",width:"32",height:"32"},null,512),f(c)?(r(),_("div",Q,Y)):j("",!0)])])])])}}});const ee={class:"footer"},te=x('<ul><li><a href="#">Link 1</a></li><li><a href="#">Link 2</a></li><li><a href="#">Link 3</a></li><li><a href="#">Link 4</a></li></ul><ul><li><a href="#">Link 5</a></li><li><a href="#">Link 6</a></li><li><a href="#">Link 7</a></li><li><a href="#">Link 8</a></li></ul>',2),se={class:"theme-selector"},oe=t("option",{value:"0"},"Theme 1",-1),ae=t("option",{value:"1"},"Theme 2",-1),ne=t("option",{value:"2"},"Theme 3",-1),ce=[oe,ae,ne],ie=t("button",null,"Manage Themes",-1),le=v({__name:"PageFooter",setup(g){const s=w("selectedTheme"),o=()=>{localStorage.setItem("theme",s.value)};return(c,e)=>(r(),_("footer",ee,[te,t("div",se,[$(t("select",{"onUpdate:modelValue":e[0]||(e[0]=a=>N(s)?s.value=a:null),onChange:o},ce,544),[[q,f(s)]]),ie])]))}});const he=v({__name:"default",setup(g){const s=n("0");y("selectedTheme",s);const o=n("default");y("themeFileName",o),A(s,(e,a)=>{e!==a&&(o.value=c[parseInt(e)])});const c=["uraraka","asui","ashido"];return T(()=>({link:[{rel:"stylesheet",href:`/themes/${o.value}.css`}]})),L(()=>{s.value=localStorage.getItem("theme")||"0"}),(e,a)=>{const u=Z,h=le;return r(),_(I,null,[p(u),B(e.$slots,"default"),p(h)],64)}}});export{he as default};