(this["webpackJsonprecipe-app"]=this["webpackJsonprecipe-app"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(7),i=a.n(r),o=a(5),c=(a(14),a(8)),s=a(3),p=a(4);var m=function(e){var t=e.initialFormState,a=e.recipes,n=e.setRecipes,r=e.formData,i=e.setFormData,o={name:r.name,cuisine:r.cuisine,photo:r.photo,ingredients:r.ingredients,preparation:r.preparation},m=function(e){var t=e.target;i(Object(p.a)(Object(p.a)({},r),{},Object(s.a)({},t.name,t.value)))};return l.a.createElement("form",{name:"create",onSubmit:function(e){e.preventDefault(),n([].concat(Object(c.a)(a),[o])),i(t)}},l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("label",{htmlFor:"name"},l.a.createElement("input",{id:"name",type:"text",name:"name",placeholder:"Name",required:!0,onChange:m,value:r.name}))),l.a.createElement("td",null,l.a.createElement("label",{htmlFor:"cuisine"},l.a.createElement("input",{id:"cuisine",type:"text",name:"cuisine",placeholder:"Cuisine",onChange:m,value:r.cuisine}))),l.a.createElement("td",null,l.a.createElement("label",{htmlFor:"photo"},l.a.createElement("input",{id:"photo",type:"url",name:"photo",placeholder:"URL",onChange:m,value:r.photo}))),l.a.createElement("td",null,l.a.createElement("label",{htmlFor:"ingredients"},l.a.createElement("textarea",{id:"ingredients",type:"text",name:"ingredients",placeholder:"Ingredients",onChange:m,value:r.ingredients}))),l.a.createElement("td",null,l.a.createElement("label",{htmlFor:"preparation"},l.a.createElement("textarea",{id:"preparation",type:"text",name:"preparation",placeholder:"Preparation",required:!0,onChange:m,value:r.preparation}))),l.a.createElement("td",null,l.a.createElement("button",{type:"submit"},"Create"))))))};var u=function(e){var t=e.recipes,a=e.setRecipes;return l.a.createElement("tbody",null,t.map((function(e){var n=e.name,r=e.cuisine,i=e.photo,o=e.ingredients,c=e.preparation;return l.a.createElement("tr",null,l.a.createElement("td",null,n),l.a.createElement("td",null,r),l.a.createElement("td",null,l.a.createElement("img",{src:i})),l.a.createElement("td",{className:"content_td"},l.a.createElement("p",null,o)),l.a.createElement("td",{className:"content_td"},l.a.createElement("p",null,c)),l.a.createElement("td",null,l.a.createElement("button",{name:"delete",onClick:function(){return function(e){var n=t.filter((function(t){return t.name!==e}));a(n)}(n)}},"Delete")))})))};var d=function(e){var t=e.recipes,a=e.setRecipes;return l.a.createElement("div",{className:"recipe-list"},l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Cuisine"),l.a.createElement("th",null,"Photo"),l.a.createElement("th",null,"Ingredients"),l.a.createElement("th",null,"Preparation"),l.a.createElement("th",null,"Actions"))),l.a.createElement(u,{recipes:t,setRecipes:a})))},h=[{name:"Tuna Poke with Mango",cuisine:"Hawaiian",photo:"https://www.foodista.com/sites/default/files/styles/recype/public/tunapokebowlwithmango22.jpg",ingredients:"1 package of sushi grade tuna. 1 cup cooked quinoa \xbd avocado, sliced. \xbd mango, cubed. 1 shredded carrot. 1 small sliced cucumber. poke sauce.",preparation:"1. Chop tuna into cubes. 2. Toss with 1 tbsp sesame oil and 1 tbsp tamari. Set aside. 3. Layer your poke bowl starting with quinoa. 4. Whisk all poke sauce ingredients in a bowl and pour over the poke bowl. 5. Garnish with sesame seeds and furikake. 6. Top with chopped scallions."},{name:"Guacamole",cuisine:"Mexican",photo:"https://www.foodista.com/sites/default/files/styles/recype/public/017.jpg",ingredients:"3 ripe avocados. \xbe cup finely chopped Roma tomato. 2 serrano chiles very finely chopped (seeded and deveined). 3 heaping tablespoons of finely chopped onion. 3 tablespoons of minced cilantro. Salt to taste",preparation:"1. Remove the flesh of the avocados. 2. Mash the avocados with the back of a fork. 3. Add the other ingredients and incorporate evenly. 4. Add salt to taste."}];var E=function(){var e={id:"",name:"",cuisine:"",photo:"",ingredients:"",preparation:""},t=Object(n.useState)(h),a=Object(o.a)(t,2),r=a[0],i=a[1],c=Object(n.useState)(e),s=Object(o.a)(c,2),p=s[0],u=s[1];return l.a.createElement("div",{className:"App"},l.a.createElement("header",null,l.a.createElement("h1",null,"Delicious Food Recipes")),l.a.createElement(d,{recipes:r,setRecipes:i}),l.a.createElement(m,{initialFormState:e,recipes:r,setRecipes:i,formData:p,setFormData:u}))};i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(E,null)),document.getElementById("root"))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.fa0e6390.chunk.js.map