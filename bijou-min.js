let isNode=!1;isNode="undefined"==typeof window||"undefined"==typeof document,isNode&&console.warn("There is no document element in Node, some functions of bijou.js will not work. If you need these functions consider using a package like jsDom to recreate the document element.");let _temp={primesTo:e=>{let t=Array.from({length:e-1}).map(((e,t)=>t+2)),r=Math.floor(Math.sqrt(e));return Array.from({length:r-1}).map(((e,t)=>t+2)).forEach((e=>t=t.filter((t=>t%e!=0||t===e)))),t},async:e=>{const t=new Worker(URL.createObjectURL(new Blob([`postMessage((${e})());`]),{type:"application/javascript; charset=utf-8"}));return new Promise(((e,r)=>{t.onmessage=({data:r})=>{e(r),t.terminate()},t.onerror=e=>{r(e),t.terminate()}}))},formatMilliseconds:e=>{e<0&&(e=-e);const t={day:Math.floor(e/864e5),hour:Math.floor(e/36e5)%24,minute:Math.floor(e/6e4)%60,second:Math.floor(e/1e3)%60,millisecond:Math.floor(e)%1e3};return Object.entries(t).filter((e=>0!==e[1])).map((([e,t])=>`${t} ${e}${1!==t?"s":""}`)).join(", ")},addStyles:(e,t)=>Object.assign(e.style,t),onOutsideClick:(e,t)=>{document.addEventListener("click",(r=>{e.contains(r.target)||t()}))},onScrollStop:e=>{let t;if(isNode)throw new Error("No document element! (You are probably using Node.js)");window.addEventListener("scroll",(r=>{clearTimeout(t),t=setTimeout((()=>{e()}),150)}),!1)},copy:e=>{if(isNode)throw new Error("No document element! (You are probably using Node.js)");const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t);const r=document.getSelection().rangeCount>0&&document.getSelection().getRangeAt(0);t.select(),document.execCommand("copy"),document.body.removeChild(t),r&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(r))},throttle:(e,t)=>{let r,n,o;return function(){const s=this,a=arguments;r?(clearTimeout(n),n=setTimeout((function(){Date.now()-o>=t&&(e.apply(s,a),o=Date.now())}),Math.max(t-(Date.now()-o),0))):(e.apply(s,a),o=Date.now(),r=!0)}},createElement:e=>{if(isNode)throw new Error("No document element! (You are probably using Node.js)");const t=document.createElement("div");return t.innerHTML=e,t.firstElementChild},browser:()=>{if(isNode)throw new Error("No document element! (You are probably using Node.js)");var e=!!window.opr&&!!opr.addons||!!window.opera||navigator.userAgent.indexOf(" OPR/")>=0,t="undefined"!=typeof InstallTrigger,r=/constructor/i.test(window.HTMLElement)||"[object SafariRemoteNotification]"===(!window.safari||"undefined"!=typeof safari&&window.safari.pushNotification).toString(),n=!!document.documentMode,o=!n&&!!window.StyleMedia,s=!(!window.chrome||!window.chrome.webstore&&!window.chrome.runtime),a=s&&-1!=navigator.userAgent.indexOf("Edg"),i=(s||e)&&!!window.CSS;return e?"Opera":t?"Firefox":r?"Safari":o?"Edge":n?"Internet Explorer":s?"Chrome":a?"Edge Chromium":i?"Blink":void 0},notify:(e,t,r)=>{if(isNode)throw new Error("No document element! (You are probably using Node.js)");if(window.Notification)if("granted"===Notification.permission)new Notification(e,{body:t,icon:r});else Notification.requestPermission().then((function(n){if("granted"===n)new Notification(e,{body:t,icon:r});else console.log("User blocked notifications.")})).catch((function(e){console.error(e)}));else console.log("Browser does not support notifications.")},dayName:(e,t)=>e.toLocaleDateString(t,{weekday:"long"}),jsonToCsv:(e,t,r=",")=>[t.join(r),...e.map((e=>t.reduce(((t,n)=>`${t}${t.length?r:""}"${e[n]?e[n]:""}"`),"")))].join("\n"),unionArrays:(e,t)=>{for(var r={},n=e.length-1;n>=0;--n)r[e[n]]=e[n];for(n=t.length-1;n>=0;--n)r[t[n]]=t[n];var o=[];for(var s in r)r.hasOwnProperty(s)&&o.push(r[s]);return o},each:(e,t)=>{for(let r=0;r<e.length;r++)t(e[r],r,e)},mapObjectKeys:(e,t)=>Array.isArray(e)?e.map((e=>_$.mapObjectKeys(e,t))):"object"==typeof e?Object.keys(e).reduce(((r,n)=>{const o=t(n),s=e[n];return r[o]=null!==s&&"object"==typeof s?_$.mapObjectKeys(s,t):s,r}),{}):e,arrayToCSV:(e,t=",")=>e.map((e=>e.map((e=>isNaN(e)?`"${e.replace(/"/g,'""')}"`:e)).join(t))).join("\n"),averageBy:(e,t)=>e.map("function"==typeof t?t:e=>e[t]).reduce(((e,t)=>e+t),0)/e.length,inView:e=>{if(isNode)throw new Error("No document element! (You are probably using Node.js)");for(var t=e.offsetTop,r=e.offsetLeft,n=e.offsetWidth,o=e.offsetHeight;e.offsetParent;)t+=(e=e.offsetParent).offsetTop,r+=e.offsetLeft;return t>=window.pageYOffset&&r>=window.pageXOffset&&t+o<=window.pageYOffset+window.innerHeight&&r+n<=window.pageXOffset+window.innerWidth},inPartialView:e=>{if(isNode)throw new Error("No document element! (You are probably using Node.js)");for(var t=e.offsetTop,r=e.offsetLeft,n=e.offsetWidth,o=e.offsetHeight;e.offsetParent;)t+=(e=e.offsetParent).offsetTop,r+=e.offsetLeft;return t<window.pageYOffset+window.innerHeight&&r<window.pageXOffset+window.innerWidth&&t+o>window.pageYOffset&&r+n>window.pageXOffset},serializeForm:e=>Array.from(new FormData(e),(e=>e.map(encodeURIComponent).join("="))).join("&"),formToObject:e=>Array.from(new FormData(e)).reduce(((e,[t,r])=>({...e,[t]:r})),{}),uuid:()=>([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16))),escapeHTML:e=>e.replace(/[&<>'"]/g,(e=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[e]||e))),unescapeHTML:e=>e.replace(/&amp;|&lt;|&gt;|&#39;|&quot;/g,(e=>({"&amp;":"&","&lt;":"<","&gt;":">","&#39;":"'","&quot;":'"'}[e]||e))),previousPage:()=>{if(isNode)throw new Error("No document element! (You are probably using Node.js)");return document.referrer||window.location.href},replaceText:(e,t)=>{for(var r,n=function(){for(var t,r=e,n=[],o=0;o<r.length;o++)t=r[o].childNodes[0],r[o].hasChildNodes()&&3==t.nodeType&&n.push(t);return n}(),o=0,s=n.length;o<s;o++)r=n[o].nodeValue,n[o].nodeValue=t(r)},timeFunction:(e,t="_ function timer")=>{console.time(t),e(),console.timeEnd(t)},sortObj:e=>Object.keys(e).sort().reduce((function(t,r){return t[r]=e[r],t}),{}),widows:e=>{for(var t=e.split(" "),r="",n=0;n<=t.length-1;n++)r+=t[n],n==t.length-2?r+="&nbsp;":r+=" ";return r},randomColor:()=>"#"+Math.floor(16777215*Math.random()).toString(16),lightenColor:(e,t)=>{var r=!1;"#"==e[0]&&(e=e.slice(1),r=!0);var n=parseInt(e,16),o=(n>>16)+t;o>255?o=255:o<0&&(o=0);var s=(n>>8&255)+t;s>255?s=255:s<0&&(s=0);var a=(255&n)+t;return a>255?a=255:a<0&&(a=0),(r?"#":"")+(a|s<<8|o<<16).toString(16)},lightOrDark:e=>{var t,r,n,o;return e.match(/^rgb/)?(t=(e=e.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/))[1],r=e[2],n=e[3]):(t=(e=+("0x"+e.slice(1).replace(e.length<5&&/./g,"$&$&")))>>16,r=e>>8&255,n=255&e),(o=Math.sqrt(t*t*.299+r*r*.587+n*n*.114))>127.5?{lightordark:"light",hsp:o}:{lightordark:"dark",hsp:o}},compStyle:(e,t)=>window.getComputedStyle(e).getPropertyValue(t),rgbToHex:e=>{let t=e.indexOf(",")>-1?",":" ",r=(+(e=e.substr(4).split(")")[0].split(t))[0]).toString(16),n=(+e[1]).toString(16),o=(+e[2]).toString(16);return 1==r.length&&(r="0"+r),1==n.length&&(n="0"+n),1==o.length&&(o="0"+o),"#"+r+n+o},hexToRGB:e=>{let t=!1,r=e.slice(e.startsWith("#")?1:0);return 3===r.length?r=[...r].map((e=>e+e)).join(""):8===r.length&&(t=!0),r=parseInt(r,16),"rgb"+(t?"a":"")+"("+(r>>>(t?24:16))+", "+((r&(t?16711680:65280))>>>(t?16:8))+", "+((r&(t?65280:255))>>>(t?8:0))+(t?", "+(255&r):"")+")"},querySelector:e=>{if(isNode)throw new Error("No document element! (You are probably using Node.js)");var t="";return function e(r){if(r.getAttribute("id")&&1===document.querySelectorAll(`#${r.getAttribute("id")}`).length)return t=(t=(t=t.replace(/^/," #"+r.getAttribute("id"))).replace(/\s/,"")).replace(/\s/g," > ");if(document.body===r)return t=(t=(t=t.replace(/^/," body")).replace(/\s/,"")).replace(/\s/g," > ");if(r.getAttribute("class")){var n=".";n=(n=(n+=r.getAttribute("class")).replace(/\s/g,".")).replace(/^/g," ");var o="";if((u=r.parentNode.children).length<2)return;for(var s=[],a=0;a<u.length;a++)r.getAttribute("class")==u[a].getAttribute("class")&&s.push(u[a]);if(s.length>1)for(var i=0;i<s.length;i++)if(r===s[i]){o=":nth-of-type("+ ++i+")";break}t=t.replace(/^/,n+o)}else{var l=r.nodeName;l=l.toLowerCase();var u,c="";if((u=r.parentNode.children).length>2){var d=[];for(a=0;a<u.length;a++)r.nodeName==u[a].nodeName&&d.push(u[a]);if(d.length>1)for(i=0;i<d.length;i++)if(r===d[i]){c=":nth-of-type("+ ++i+")";break}}t=t.replace(/^/," "+l+c)}if(!r.parentNode)return t=(t=t.replace(/\s/g," > ")).replace(/\s/,"");e(r.parentNode)}(e),t},removeComments:e=>{e.innerHTML=e.innerHTML.replace(/<!--[\s\S]*?(?:-->)?<!---+>?|<!(?![dD][oO][cC][tT][yY][pP][eE]|\[CDATA\[)[^>]*>?|<[?][^>]*>?/g,"")},random:(e,t,r=!0)=>r?Math.floor(Math.random()*(t-e+1)+e):Math.random()*(t-e+1)+e,seedRandom:e=>{var t=e+=1831565813;return t=Math.imul(t^t>>>15,1|t),(((t^=t+Math.imul(t^t>>>7,61|t))^t>>>14)>>>0)/4294967296},uniqueArray:e=>[...new Set(e)],formatNumber:e=>e.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1,"),spliceArrayBuffer:(e,t,r,n)=>{var o=(n=n||!1)?-1:1;n&&([t,r]=[r,t]),t=Math.floor(t),r=Math.floor(r)+o;for(var s=t,a=0;s!=r;s+=o)a=256*a+e[s];return a},unCamelCase:function(e){return e.replace(/([a-z])([A-Z])/g,"$1 $2").replace(/\b([A-Z]+)([A-Z])([a-z])/,"$1 $2$3").replace(/^./,(function(e){return e.toUpperCase()}))},parseHTML:(e,t="text/html")=>(new DOMParser).parseFromString(e,t),syntaxHighlight:(e,t="html",r={})=>{let n=document.createElement("DIV");n.innerText=e;return((e,t,r={})=>{if(isNode)throw new Error("No document element! (You are probably using Node.js)");var n=t||"html",o=document.getElementById(e)||e,s=o.innerHTML,a=r.tagColor||"mediumblue",i=r.tagNameColor||"brown",l=r.attributeColor||"red",u=r.attributeValueColor||"mediumblue",c=r.commentColor||"green",d=r.cssSelectorColor||"brown",h=r.cssPropertyColor||"red",f=r.cssPropertyValueColor||"mediumblue",p=r.cssLimiterColor||"black",m=r.cssImportantColor||"red",g=r.jsColor||"black",b=r.jsKeywordColor||"mediumblue",y=r.jsStringColor||"brown",w=r.jsNumberColor||"red",v=r.jsPropertyColor||"black";function O(e,t,r,n,o){for(var s,a,i="",l=[];e.search(t)>-1;)s=e.search(t),-1==(a=e.indexOf(r,s))&&(a=e.length),o?(l.push(n(e.substring(s,a+r.length))),e=e.substring(0,s)+o+e.substr(a+r.length)):(i+=e.substring(0,s),i+=n(e.substring(s,a+r.length)),e=e.substr(a+r.length));this.rest=i+e,this.arr=l}function C(e){for(var t,r,n,o=e,s="";o.search(/(\s|<br>)/)>-1;)t=o.search(/(\s|<br>)/),-1==(r=o.indexOf("&gt;"))&&(r=o.length),s+=o.substring(0,t),s+=T(o.substring(t,r)),o=o.substr(r);return"&gt;"==(n="<span style=color:"+a+">&lt;</span>"+(n=s+o).substring(4)).substr(n.length-4,4)&&(n=n.substring(0,n.length-4)+"<span style=color:"+a+">&gt;</span>"),"<span style=color:"+i+">"+n+"</span>"}function T(e){for(var t,r,n,o,s,a=e,i="";a.indexOf("=")>-1;)r=-1,t=a.indexOf("="),n=a.indexOf("'",t),o=a.indexOf('"',t),(s=a.indexOf(" ",t+2))>-1&&(s<n||-1==n)&&(s<o||-1==o)?r=a.indexOf(" ",t):o>-1&&(o<n||-1==n)&&(o<s||-1==s)?r=a.indexOf('"',a.indexOf('"',t)+1):n>-1&&(n<o||-1==o)&&(n<s||-1==s)&&(r=a.indexOf("'",a.indexOf("'",t)+1)),(!r||-1==r||r<t)&&(r=a.length),i+=a.substring(0,t),i+=N(a.substring(t,r+1)),a=a.substr(r+1);return"<span style=color:"+l+">"+i+a+"</span>"}function N(e){return"<span style=color:"+u+">"+e+"</span>"}function j(e){return"<span style=color:"+c+">"+e+"</span>"}function x(e){var t,r,n,o,s,a,i,l=e,u="";for(l=(n=new O(l,/\/\*/,"*/",j,"W3CSSCOMMENTPOS")).rest;l.search("{")>-1;){for(t=l.search("{"),s=l.substr(t+1),i=1,a=0,o=0;o<s.length&&("{"==s.substr(o,1)&&(i++,a++),"}"==s.substr(o,1)&&i--,0!=i);o++);for(0!=i&&(a=0),r=t,o=0;o<=a;o++)r=l.indexOf("}",r+1);-1==r&&(r=l.length),u+=l.substring(0,t+1),u+=k(l.substring(t+1,r)),l=l.substr(r)}for(l=(l=(l=u+l).replace(/{/g,"<span style=color:"+p+">{</span>")).replace(/}/g,"<span style=color:"+p+">}</span>"),o=0;o<n.arr.length;o++)l=l.replace("W3CSSCOMMENTPOS",n.arr[o]);return"<span style=color:"+d+">"+l+"</span>"}function k(e){var t,r,n,o,s=e,a="";if(s.indexOf("{")>-1)return x(s);for(;s.search(":")>-1;){for(o=!0,n=t=s.search(":");1==o;)o=!1,r=s.indexOf(";",n),"&nbsp;"==s.substring(r-5,r+1)&&(o=!0,n=r+1);-1==r&&(r=s.length),a+=s.substring(0,t),a+=M(s.substring(t,r+1)),s=s.substr(r+1)}return"<span style=color:"+h+">"+a+s+"</span>"}function M(e){var t,r=e,n="";for(r="<span style=color:"+p+">:</span>"+r.substring(1);r.search(/!important/i)>-1;)t=r.search(/!important/i),n+=r.substring(0,t),n+=S(r.substring(t,t+10)),r=r.substr(t+10);return result=n+r,";"==result.substr(result.length-1,1)&&"&nbsp;"!=result.substr(result.length-6,6)&&"&lt;"!=result.substr(result.length-4,4)&&"&gt;"!=result.substr(result.length-4,4)&&"&amp;"!=result.substr(result.length-5,5)&&(result=result.substring(0,result.length-1)+"<span style=color:"+p+">;</span>"),"<span style=color:"+f+">"+result+"</span>"}function S(e){return"<span style=color:"+m+";font-weight:bold;>"+e+"</span>"}function R(e){var t,r,n,o,s,a,i,l,u,c,d=e,h="",f=[],p="";for(t=0;t<d.length;t++)"\\"==(r=d.substr(t,1))&&(f.push(d.substr(t,2)),r="W3JSESCAPE",t++),p+=r;for(d=p,1;n=I(d,"'","'",L),o=I(d,'"','"',L),s=I(d,/\/\*/,"*/",j),a=I(d,/\/\//,"<br>",j),l=D(d,E),i=P("js",d,A),c=H(d,$),-1!=Math.max(l[0],n[0],o[0],s[0],a[0],i[0],c[0])&&-1!=(u=_(l,n,o,s,a,i,c))[0];)u[0]>-1&&(h+=d.substring(0,u[0]),h+=u[2](d.substring(u[0],u[1])),d=d.substr(u[1]));for(d=h+d,t=0;t<f.length;t++)d=d.replace("W3JSESCAPE",f[t]);return"<span style=color:"+g+">"+d+"</span>"}function L(e){return"<span style=color:"+y+">"+e+"</span>"}function A(e){return"<span style=color:"+b+">"+e+"</span>"}function E(e){return"<span style=color:"+w+">"+e+"</span>"}function $(e){return"<span style=color:"+v+">"+e+"</span>"}function H(e,t){var r,n,o,s,a=[".","<"," ",";","(","+",")","[","]",",","&",":","{","}","/","-","*","|","%"];if((s=e.indexOf("."))>-1)for(r=e.substr(s+1),o=0;o<r.length;o++)for(cc=r[o],n=0;n<a.length;n++)if(cc.indexOf(a[n])>-1)return[s+1,o+s+1,t];return[-1,-1,t]}function _(){var e,t=[];for(e=0;e<arguments.length;e++)arguments[e][0]>-1&&(0==t.length||arguments[e][0]<t[0])&&(t=arguments[e]);return 0==t.length&&(t=arguments[e]),t}function P(e,t,r){var n,o,s,a,i=-1,l=-1;for("js"==e&&(n=["abstract","arguments","boolean","break","byte","case","catch","char","class","const","continue","debugger","default","delete","do","double","else","enum","eval","export","extends","false","final","finally","float","for","function","goto","if","implements","import","in","instanceof","int","interface","let","long","NaN","native","new","null","package","private","protected","public","return","short","static","super","switch","synchronized","this","throw","throws","transient","true","try","typeof","var","void","volatile","while","with","yield"]),o=0;o<n.length;o++)(s=t.indexOf(n[o]))>-1&&(a=/\W/g,t.substr(s+n[o].length,1).match(a)&&t.substr(s-1,1).match(a)&&s>-1&&(-1==i||s<i)&&(l=(i=s)+n[o].length));return[i,l,r]}function I(e,t,r,n){var o,s;return o=e.search(t),-1==(s=e.indexOf(r,o+r.length))&&(s=e.length),[o,s+r.length,n]}function D(e,t){var r,n,o,s,a,i=["<br>"," ",";","(","+",")","[","]",",","&",":","{","}","/","-","*","|","%","="],l=0;for(r=0;r<e.length;r++)for(n=0;n<i.length;n++)if((o=e.substr(r,i[n].length))==i[n]){if("-"==o&&("e"==e.substr(r-1,1)||"E"==e.substr(r-1,1)))continue;if(l<(s=r)&&(a=e.substring(l,s),!isNaN(a)))return[l,s,t];l=r+=i[n].length,r-=1;break}return[-1,-1,t]}o.style.fontFamily=r.fontFamily||"Consolas,'Courier New', monospace",n||(n="html"),"html"==n&&(s=function(e){var t,r,n,o,s,a=e,i="";t=new O(a,"&lt;!--","--&gt;",j,"W3HTMLCOMMENTPOS"),a=t.rest;for(;a.indexOf("&lt;")>-1;)o="",r=a.indexOf("&lt;"),"&LT;STYLE"==a.substr(r,9).toUpperCase()&&(o="css"),"&LT;SCRIPT"==a.substr(r,10).toUpperCase()&&(o="javascript"),-1==(n=a.indexOf("&gt;",r))&&(n=a.length),i+=a.substring(0,r),i+=C(a.substring(r,n+4)),a=a.substr(n+4),"css"==o&&(n=a.indexOf("&lt;/style&gt;"))>-1&&(i+=x(a.substring(0,n)),a=a.substr(n)),"javascript"==o&&(n=a.indexOf("&lt;/script&gt;"))>-1&&(i+=R(a.substring(0,n)),a=a.substr(n));for(a=i+a,s=0;s<t.arr.length;s++)a=a.replace("W3HTMLCOMMENTPOS",t.arr[s]);return a}(s)),"css"==n&&(s=x(s)),"js"==n&&(s=R(s)),o.innerHTML=s})(n,t,r),n.innerHTML},composeFunction:(...e)=>t=>e.reduceRight(((e,t)=>t(e)),t),curryFunction:(e,t=e.length,...r)=>t<=r.length?e(...r):curry.bind(null,e,t,...r),mobileOrDesktop:()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?"mobile":"desktop",removeTags:e=>e.replace(/<[^>]*>/g,""),camelCase:e=>e.replace(/(?:^\w|[A-Z]|\b\w)/g,(function(e,t){return 0===t?e.toLowerCase():e.toUpperCase()})).replace(/\s+/g,""),scrambleString:e=>{for(var t=e.split(""),r=t.length-1;r>0;r--){var n=Math.floor(Math.random()*(r+1)),o=t[r];t[r]=t[n],t[n]=o}return t.join("")},drag:e=>{var t,r,n,o;function s(e){this.style.left=t+e.clientX-n+"px",this.style.top=r+e.clientY-o+"px"}e.addEventListener("mousedown",(function(a){var i=window.getComputedStyle(e);e.style.top=i.getPropertyValue("top"),e.style.left=i.getPropertyValue("left"),e.style.right=i.getPropertyValue("right"),e.style.bottom=i.getPropertyValue("bottom"),this.style.position="absolute",t=this.offsetLeft,r=this.offsetTop,n=a.clientX,o=a.clientY,this.addEventListener("mousemove",s,!1),window.addEventListener("mouseup",(function(){e.removeEventListener("mousemove",s,!1)}),!1)}),!1)},ease:{linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>e*(2-e),easeInOutQuad:e=>e<.5?2*e*e:(4-2*e)*e-1,easeInCubic:e=>e*e*e,easeOutCubic:e=>--e*e*e+1,easeInOutCubic:e=>e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1- --e*e*e*e,easeInOutQuart:e=>e<.5?8*e*e*e*e:1-8*--e*e*e*e,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1+--e*e*e*e*e,easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e},getJSON:(e,t)=>{fetch(e).then((e=>e.json())).then((e=>t(e)))},getHTML:(e,t)=>{fetch(e).then((e=>e.text())).then((e=>t(_$.parseHTML(e))))},shuffleArray:e=>e.sort((()=>Math.random()-.5))};_temp=_temp.sortObj(_temp);let desc={addStyles:"Add the styles in an object to a specified element:\n\n \t_$.addStyles(element, {background: 'red'});\n\n(Changes the background color of the element to red!)",arrayToCSV:"Returns a comma separated list from the specified array. \n\n\t_$.arrayToCSV([['a', 'b'], ['c', 'd']]);//'\"a\",\"b\"\n\"c\",\"d\"'\n\nNote that this also escapes characters such as quotes.",averageBy:"This returns the average of an array based on the given function, for example:\n\n\t_$.averageBy([1,2,3,4], (val) => val / 2);//Returns the average of each element after each element has been divided by 2.",async:"Runs the given function in a web worker, returning a promise with the return value. This is useful to prevent the main thread from becoming clogged while trying to compute something.",browser:"Returns the current browser without sniffing the user-agent string. e.g. 'Chrome'",compStyle:"Returns an element of the computed style, e.g. \n\n\t_$.compStyle(document.querySelector('h1'), 'background-color'); //Returns the background-color of the first <h1>",copy:"Copies the text specified to the clipboard, e.g. \n\n\t_$.copy('Hello world');",createElement:"Returns a DOM element who's outerHTML is the string provided: \n\n\t_$.createElement('<div id=`fun`>Hello</div>);//Returns a DOM element whose id is 'fun' and whose innerText is 'Hello'",dayName:"Returns the day of the week from a Date object.",each:"Runs a function with each element of an array: \n\n\t_$.each([1,2,3], (num) => alert(num * 3));//Alerts each number in the array times 3",escapeHTML:"Returns an escaped version of the HTML string provided: \n\n\t_$.escapeHTML('<script>');//'&lt;script&gt;'",formToObject:"Converts a form to a javascript object using each element's 'name' attribute as the key and the 'value' attribute as the value.",formatMilliseconds:"Formats a number of milliseconds into a human-readable duration of time, e.g. \n\n\t_$.formatMilliseconds(600000);//Returns '10 minutes'",hexToRGB:"Converts a hex value into an RGB color.",inPartialView:"Returns whether the specified element is visible at all in the viewport. Usefull for lazy loading images!",inView:"Returns whether the specified element is completely visible in the viewport.",jsonToCsv:"Converts a JSON object to CSV.",lightOrDark:"Returns an object, the key 'lightordark' returns either 'light' or 'dark' and the key 'hsp' returns the value of the color from 0 (completely dark) to 255 (completely bright).",lightenColor:"Lightens or darkens a hex color by a certain amount, on a scale rom 0 (completely dark) to 255 (completely bright): \n\n\t_$.lightenColor('#ffffff', -20);//Returns '#ebebeb'.",mapObjectKeys:"Maps an object's keys recursively: \n\n\t_$.mapObjectKeys({\r\n    key: 'value',\r\n    another: {\r\n        deep: 'thing',\r\n        map: 'another'\r\n    }\r\n}, (key) => key.toUpperCase()); // Transforms every key of the object to uppercase.",notify:"Notifies the user through a desktop notification. Takes 3 arguments: text, body, icon. Text is the title of the notification, body is the message of it, and icon is the icon displayed next to the notification.",onOutsideClick:'Returns the callback when a click is called outside the specified element:\r\n\r\n    _$.onoutsideclick(document.querySelector("h1"), () => {alert("You clicked outside the header")}); // Alerts when the user clicks anywhere that is NOT the h1 in question.',onScrollStop:"Returns the callback when a user stops scrolling the window. ",previousPage:"Returns the url of the previous page that the user visited.",primesTo:"Returns an array of all the prime numbers up to the number given.",querySelector:"Generates a unique querySelector for the given element.",random:"Returns a random number between two numbers:\n\n\t_$.random(-10,10,false);//Return a random number between -10 and 10 and DO NOT round it. (True as the last value would round it.)",randomColor:"Returns a random hex color.",removeComments:"Removes comments from the HTML element specified.",replaceText:'Replaces the text of the specified element by passing the old value through a function:\r\n\r\n    _$.replaceText(document, (oldtext) => oldtext.replace(" ", "-"));//Replace all spaces in the document with a hyphen.',rgbToHex:"Returns the hex code of a given RGB string.",seedRandom:"Gives a random number based on a whole number seed.",serializeForm:"Convert a form to url queries",sortObj:"Returns an alphabetized copy of the object by keys.",throttle:"Runs the function specified, the second input controls at MAX how much wait there is between the next time it runs:\n\n\t_$.throttle(() => alert('hello'), 10000);\n\nRunning this like any other function will simply just run the function, however if you try to run the throttled function in a setInterval loop or before its timeout ends it will not run.",timeFunction:"Use console.time to how long the function inputted takes to execute.",unescapeHTML:"Unescapes the string of HTML specified.",unionArrays:"Merges two arrays using union, meaning that any duplicates between the two arrays will be removed.",uuid:"Generates a unique id, like the uuid npm package.\n\n\tFor example:\n8dfe52e3-7beb-48eb-8282-209ff1c5250f",widows:"Replaces the last space character between words with '&nbsp;', preventing a single word on a newline.",flatten:"This takes a 2d array (an array of arrays) and flattens in into a 1d array (a list of items).",uniqueArray:"Removes duplicates from an array",formatNumber:"Adds commas to large numbers in the right place.",spliceArrayBuffer:"Splices a number as if it's 8 bits long and converts it to a single number:\n\n\t_$.spliceArrayBuffer([5, 8, 255], 0, 2, true);//16713733",unCamelCase:"Un-camelCases a string. Camel case is when a string's case looks like this: camelCase, where the normal version would be Camel Case.",parseHTML:"Parses HTML and returns a document object representing the parsed HTML.",syntaxHighlight:"Highlight a string of code! \n\n\t_$.syntaxHighlight('alert(\"Hello\")', 'js');//Returns html of the syntax highlighted version. \n\nAlso supports CSS and HTML. Note: This needs <br> tags instead of normal line breaks.",composeFunction:"Composes two functions together. Read more here: https://www.codementor.io/@michelre/use-function-composition-in-javascript-gkmxos5mj",curryFunction:"Returns the curried version of a function. Read more here: https://medium.com/@abitoprakash/implementing-a-curry-function-in-javascript-6a249dbcb1bb",removeTags:"Returns an html string stripped of tags.",desktopOrMobile:"Returns whether the user is using a desktop or mobile device. (Uses user-agent sniffing which can be spoofed)",camelCase:"Takes a string as an input and returns the camelCased version of it.",scrambleString:"Scrambles a string's characters and returns the output.",drag:"Allows the element provided to be dragged. (Drag and drop.)",ease:"The only non-function in Bijou.js. This has a variety of easing functions, all of which take a number between 0 and 1, and return a corresponding value for the easing function. For example this code: \n\n\t_$.ease.easeInOutQuad(.3);\n\nWould return the eased value for a point about a third of the way through the animation.",getJSON:"Runs the callback with the JSON (as an object) from the url spefici"};desc=_temp.sortObj(desc),_temp.info=e=>desc[e];const _$=_temp,_=_temp,explosion=_temp;isNode&&(module.exports=_temp);