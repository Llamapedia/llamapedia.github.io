import{n as I,r as g,q as M,H as S,f as B,o as c,c as l,a as e,s as p,G as H,I as W,B as E,J as w,t as r,K as j,v as d,p as z,e as D,_ as P}from"./HWOIP6YO.js";import{p as R}from"./D4h8WKgh.js";const A="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='28'%20height='28'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%23ffffff'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpath%20d='M8%203H5a2%202%200%200%200-2%202v3m18%200V5a2%202%200%200%200-2-2h-3m0%2018h3a2%202%200%200%200%202-2v-3M3%2016v3a2%202%200%200%200%202%202h3'%3e%3c/path%3e%3c/svg%3e",V="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='28'%20height='28'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%23ffffff'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpath%20d='M8%203v3a2%202%200%200%201-2%202H3m18%200h-3a2%202%200%200%201-2-2V3m0%2018v-3a2%202%200%200%201%202-2h3M3%2016h3a2%202%200%200%201%202%202v3'%3e%3c/path%3e%3c/svg%3e",F={class:"reader-image-container"},T=e("img",{src:A,alt:"Maximize"},null,-1),q=[T],L=e("img",{src:V,alt:"Minimize"},null,-1),N=[L],Y=e("span",null,"Click here to read this comic!",-1),J=[Y],O=["src"],U=I({__name:"Reader",setup(v){const s=g(null),t=g(0),f=new Set,a=g(!1),k=o=>{if(!f.has(o)){const i=new Image;i.src=`/nabooru/${a.value?"":"low/"}${o}.jpg`,f.add(o)}},_=()=>{for(let o=-3;o<=3;o++){let i=t.value+o;i<0&&(i=66+i),i>65&&(i=i-66),k(i)}},n=()=>{t.value===65?t.value=0:t.value===19||t.value===61?t.value+=2:t.value++,_()},h=()=>{t.value===0?t.value=65:t.value===21||t.value===63?t.value-=2:t.value--,_()},u=async()=>{var o;document.fullscreenElement?document.exitFullscreen&&await document.exitFullscreen():await((o=s.value)==null?void 0:o.requestFullscreen())},m=()=>{a.value=!!document.fullscreenElement};return M(()=>{document.addEventListener("fullscreenchange",m)}),S(()=>{document.removeEventListener("fullscreenchange",m)}),B(()=>{_()}),(o,i)=>(c(),l("div",{class:H(["reader",p(a)?"reader-fullscreen":""]),ref_key:"pageElement",ref:s},[e("div",F,[p(a)?(c(),l("div",{key:1,class:"reader-minimize",onClick:u},N)):(c(),l("div",{key:0,class:"reader-maximize",onClick:u},q)),e("div",{onClick:h,class:"reader-nav left"}),p(t)===0&&!p(a)?(c(),l("div",{key:2,onClick:n,class:"reader-nav right cover"},J)):(c(),l("div",{key:3,onClick:n,class:"reader-nav right"})),e("img",{src:`/nabooru/${p(a)?"":"low/"}${p(t)}.jpg`,alt:"Manga Page",class:"reader-image"},null,8,O)])],2))}}),y=v=>(z("data-v-214e075e"),v=v(),D(),v),G={key:0,class:"user-profile"},K={class:"user-profile-info"},Q={class:"user-profile-banner"},X=["src"],Z={class:"user-profile-title"},ee=["src"],se={class:"user-profile-title-text"},te={class:"user-profile-title-joined"},ae=["innerHTML"],ne={class:"user-profile-statistics"},oe=y(()=>e("p",{class:"user-profile-statistics-title"},"Statistics",-1)),ie={class:"user-profile-statistics-element"},re=y(()=>e("p",{class:"user-profile-statistics-element-title"},"Anime",-1)),ce={class:"user-profile-statistics-time"},le={key:0},ue={key:1},de={key:2},me={key:3},pe={key:4},ve={class:"user-profile-statistics-element"},_e=y(()=>e("p",{class:"user-profile-statistics-element-title"},"Manga",-1)),he=I({__name:"profile",setup(v){const s=g();W(()=>{t()});const t=async()=>{const n=E.get("access_token"),h=`
            query {
                Viewer {
                    id
                    name
                    about(asHtml: true)
                    bannerImage
                    avatar {
                        large
                    }
                    statistics {
                        anime {
                            count
                            minutesWatched
                            episodesWatched
                        }
                        manga {
                            count
                            chaptersRead
                            volumesRead
                        }
                    }
                    createdAt
                }
            }
        `,u={},m=await fetch("https://graphql.anilist.co",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:`Bearer ${n}`},body:JSON.stringify({query:h,variables:u})});if(m.status===200){const o=await m.json();console.log(o),s.value=o.data.Viewer}},f=n=>{const i=Math.floor(n/525600);n%=525600;const x=Math.floor(n/10080);n%=10080;const $=Math.floor(n/1440);n%=1440;const C=Math.floor(n/60),b=n%60;return{years:i,weeks:x,days:$,hours:C,minutes:b}},a=w(()=>s.value?f(s.value.statistics.anime.minutesWatched):{years:0,weeks:0,days:0,hours:0,minutes:0}),k=w(()=>s.value?new Date(s.value.createdAt*1e3).toLocaleDateString({year:"numeric",month:"long",day:"numeric"}):""),_=n=>R.sanitize(n);return(n,h)=>{const u=U;return s.value?(c(),l("div",G,[e("div",K,[e("div",Q,[e("img",{src:s.value.bannerImage,alt:"",class:"user-profile-banner-image"},null,8,X)]),e("div",Z,[e("img",{src:s.value.avatar.large,alt:"Avatar",class:"user-profile-title-avatar"},null,8,ee),e("p",se,r(s.value.name),1),e("p",te,"Joined "+r(k.value),1)]),e("div",{class:"user-about",innerHTML:_(s.value.about)},null,8,ae),s.value.name==="BotiusPrime"?(c(),j(u,{key:0})):d("",!0),e("div",ne,[oe,e("div",ie,[re,e("p",null,r(s.value.statistics.anime.count)+" Titles",1),e("p",ce,[a.value.years>0?(c(),l("span",le,r(a.value.years)+" Years ",1)):d("",!0),a.value.weeks>0?(c(),l("span",ue,r(a.value.weeks)+" Weeks ",1)):d("",!0),a.value.days>0?(c(),l("span",de,r(a.value.days)+" Days ",1)):d("",!0),a.value.hours>0?(c(),l("span",me,r(a.value.hours)+" Hours ",1)):d("",!0),a.value.minutes>0?(c(),l("span",pe,r(a.value.minutes)+" Minutes ",1)):d("",!0)]),e("p",null,r(s.value.statistics.anime.episodesWatched)+" Episodes Watched",1)]),e("div",ve,[_e,e("p",null,r(s.value.statistics.manga.count)+" Titles",1),e("p",null,r(s.value.statistics.manga.chaptersRead)+" Chapters Read",1),e("p",null,r(s.value.statistics.manga.volumesRead)+" Volumes Read",1)])])])])):d("",!0)}}}),ke=P(he,[["__scopeId","data-v-214e075e"]]);export{ke as default};
