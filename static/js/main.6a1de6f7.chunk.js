(this.webpackJsonpmoney=this.webpackJsonpmoney||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){"use strict";n.r(e);var s=n(0),a=n.n(s),o=n(2),l=n.n(o),i=(n(12),n(3)),r=n(4),u=n(6),c=n(5),C=function(t){return Math.round(100*t)/100},h=function(t){Object(u.a)(n,t);var e=Object(c.a)(n);function n(t){var s;return Object(i.a)(this,n),(s=e.call(this,t)).setHundreds=function(t){s.setState({hundreds:100*parseInt(t.target.value)})},s.setFifties=function(t){s.setState({fifties:50*parseInt(t.target.value)})},s.setTwenties=function(t){s.setState({twenties:20*parseInt(t.target.value)})},s.setTens=function(t){s.setState({tens:10*parseInt(t.target.value)})},s.setTwo=function(t){s.setState({twoEuro:50*parseInt(t.target.value)})},s.setOne=function(t){s.setState({oneEuro:25*parseInt(t.target.value)})},s.setFifty=function(t){s.setState({fiftyCents:25*parseInt(t.target.value)})},s.setTwenty=function(t){s.setState({twentyCents:10*parseInt(t.target.value)})},s.setTen=function(t){s.setState({tenCents:10*parseInt(t.target.value)})},s.setFive=function(t){s.setState({fiveCents:5*parseInt(t.target.value)})},s.setTwoCent=function(t){s.setState({twoCents:2*parseInt(t.target.value)})},s.setOneCent=function(t){s.setState({oneCents:1*parseInt(t.target.value)})},s.looseSetTwo=function(t){s.setState({looseTwoEuro:parseFloat(t.target.value)%50})},s.looseSetOne=function(t){s.setState({looseOneEuro:parseFloat(t.target.value)%25})},s.looseSetFifty=function(t){s.setState({looseFiftyCent:parseFloat(t.target.value)%25})},s.looseSetTwenty=function(t){var e=C(t.target.value%10);s.setState({looseTwentyCent:e})},s.looseSetTen=function(t){var e=C(t.target.value%10);s.setState({looseTenCent:e})},s.looseSetFive=function(t){var e=C(t.target.value%5);s.setState({looseFiveCent:e})},s.looseSetTwoCent=function(t){var e=C(t.target.value%2);s.setState({looseTwoCent:e})},s.looseSetOneCent=function(t){var e=C(t.target.value%1);s.setState({looseOneCent:e})},s.onSubmit=function(t){t.preventDefault(),s.setState({totalNotes:s.state.hundreds+s.state.fifties+s.state.twenties+s.state.tens}),s.setState({totalCoins:s.state.twoEuro+s.state.oneEuro+s.state.fiftyCents+s.state.twentyCents+s.state.tenCents+s.state.fiveCents+s.state.twoCents+s.state.oneCents});var e=C(s.state.looseTwoEuro+s.state.looseOneEuro+s.state.looseFiftyCent+s.state.looseTwentyCent+s.state.looseTenCent+s.state.looseFiveCent+s.state.looseTwoCent+s.state.looseOneCent);s.setState({totalLoose:e})},s.state={hundreds:0,fifties:0,twenties:0,tens:0,totalNotes:0,twoEuro:0,oneEuro:0,fiftyCents:0,twentyCents:0,tenCents:0,fiveCents:0,twoCents:0,oneCents:0,totalCoins:0,looseOneCent:0,looseTwoCent:0,looseFiveCent:0,looseTenCent:0,looseTwentyCent:0,looseFiftyCent:0,looseOneEuro:0,looseTwoEuro:0,totalLoose:0,subtotal:0},s}return Object(r.a)(n,[{key:"render",value:function(){var t=this;return a.a.createElement("div",{style:{textAlign:"center"}},a.a.createElement("form",{action:"",onSubmit:this.onSubmit},a.a.createElement("h3",null,"Notes:"),a.a.createElement("p",null,a.a.createElement("strong",null,"Enter number of notes")),a.a.createElement("p",null,"100 Euro ",a.a.createElement("input",{type:"text",onChange:this.setHundreds})," ",this.state.hundreds>0?this.state.hundreds:0),a.a.createElement("p",null,"50 Euro ",a.a.createElement("input",{type:"text",onChange:this.setFifties})," ",this.state.fifties>0?this.state.fifties:0),a.a.createElement("p",null,"20 Euro ",a.a.createElement("input",{type:"text",onChange:this.setTwenties})," ",this.state.twenties>0?this.state.twenties:0),a.a.createElement("p",null,"10 Euro ",a.a.createElement("input",{type:"text",onChange:this.setTens})," ",this.state.tens>0?this.state.tens:0),a.a.createElement("h3",null,"Coins:"),a.a.createElement("p",null,a.a.createElement("strong",null,"Enter number of bags")),a.a.createElement("p",null,"2 Euro ",a.a.createElement("input",{type:"text",onChange:this.setTwo})," ",this.state.twoEuro>0?this.state.twoEuro:0),a.a.createElement("p",null,"1 Euro ",a.a.createElement("input",{type:"text",onChange:this.setOne})," ",this.state.oneEuro>0?this.state.oneEuro:0),a.a.createElement("p",null,"50 Cents ",a.a.createElement("input",{type:"text",onChange:this.setFifty})," ",this.state.fiftyCents>0?this.state.fiftyCents:0),a.a.createElement("p",null,"20 Cents ",a.a.createElement("input",{type:"text",onChange:this.setTwenty})," ",this.state.twentyCents>0?this.state.twentyCents:0),a.a.createElement("p",null,"10 Cents ",a.a.createElement("input",{type:"text",onChange:this.setTen})," ",this.state.tenCents>0?this.state.tenCents:0),a.a.createElement("p",null,"5 Cents ",a.a.createElement("input",{type:"text",onChange:this.setFive})," ",this.state.fiveCents>0?this.state.fiveCents:0),a.a.createElement("p",null,"2 Cents ",a.a.createElement("input",{type:"text",onChange:this.setTwoCent})," ",this.state.twoCents>0?this.state.twoCents:0),a.a.createElement("p",null,"1 Cent ",a.a.createElement("input",{type:"text",onChange:this.setOneCent})," ",this.state.oneCents>0?this.state.oneCents:0),a.a.createElement("h3",null,"Loose Coins:"),a.a.createElement("p",null,a.a.createElement("strong",null,"Enter amount:")),a.a.createElement("p",null,"2 Euro ",a.a.createElement("input",{type:"text",onChange:this.looseSetTwo})," ",this.state.looseTwoEuro>0?this.state.looseTwoEuro:0),a.a.createElement("p",null,"1 Euro ",a.a.createElement("input",{type:"text",onChange:this.looseSetOne})," ",this.state.looseOneEuro>0?this.state.looseOneEuro:0),a.a.createElement("p",null,"50 Cents ",a.a.createElement("input",{type:"text",onChange:this.looseSetFifty})," ",this.state.looseFiftyCent>0?this.state.looseFiftyCent:0),a.a.createElement("p",null,"20 Cents ",a.a.createElement("input",{type:"text",onChange:this.looseSetTwenty})," ",this.state.looseTwentyCent>0?this.state.looseTwentyCent:0),a.a.createElement("p",null,"10 Cents ",a.a.createElement("input",{type:"text",onChange:this.looseSetTen})," ",this.state.looseTenCent>0?this.state.looseTenCent:0),a.a.createElement("p",null,"5 Cents ",a.a.createElement("input",{type:"text",onChange:this.looseSetFive})," ",this.state.looseFiveCent>0?this.state.looseFiveCent:0),a.a.createElement("p",null,"2 Cents ",a.a.createElement("input",{type:"text",onChange:this.looseSetTwoCent})," ",this.state.looseTwoCent>0?this.state.looseTwoCent:0),a.a.createElement("p",null,"1 Cent ",a.a.createElement("input",{type:"text",onChange:this.looseSetOneCent})," ",this.state.looseOneCent>0?this.state.looseOneCent:0),a.a.createElement("button",{type:"submit"},"Calculate")),a.a.createElement("p",null,"Total Notes = ",this.state.totalNotes>0?this.state.totalNotes:0),a.a.createElement("p",null,"Total Coins = ",this.state.totalCoins>0?this.state.totalCoins:0),a.a.createElement("p",null,"Total Loose Coins ="," ",this.state.totalLoose>0?this.state.totalLoose:0),a.a.createElement("button",{onClick:function(){t.setState({subtotal:t.state.totalNotes+t.state.totalCoins+t.state.totalLoose})}},"Calculate Total"),a.a.createElement("p",null,"Total Counted = ",this.state.subtotal>0?this.state.subtotal:0))}}]),n}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},7:function(t,e,n){t.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.6a1de6f7.chunk.js.map