document.body.innerHTML += `<iframe src="http://localhost:4200/" class="iframe" id="mysearch" style="border-style: none;
height: 60vh;
width : 300px;
position: fixed;  
top: 10vh;
left: 10vh;
z-index: 3000;
background-color: rgb(70, 70, 70);
border-radius: 8px;
"></iframe>`;
var totalArr = document.getElementsByClassName("product_inner_wrap");
var innerArr = [];

for (var i = 0; i < totalArr.length; i++) {
  innerArr.push(totalArr[i].getElementsByTagName("img")[0]);
}

var productImg = innerArr.map((num) => {
  return num.currentSrc;
});

var productArr = document.getElementsByClassName("prod_name");
productArr = [].slice.call(productArr);

var productName = productArr.map((num) => {
  return num.innerHTML;
});

var products = [];
for (var i = 0; i < productName.length; i++) {
  products.push({ name: productName[i], image: productImg[i] });
}

function delay(t, v) {
  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, v), t);
  });
}

delay(3000).then(() => {
  var myframe = document.getElementsByTagName("iframe");
  myframe = [].slice.call(myframe).find((x) => x.id === "mysearch");
  myframe.contentWindow.postMessage(products, "http://localhost:4200/");
  console.log("posted");
});
