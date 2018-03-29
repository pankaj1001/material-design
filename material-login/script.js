

var text=document.querySelectorAll('.text-fill');
console.log(text);
var label = document.querySelectorAll('label');
console.log(label);
[].forEach.call(text,function (div) {
var obj=div;
obj.addEventListener('focus',function flow(abj){
this.nextElementSibling.classList.add('label-flow');
this.classList.add('border');
})
obj.addEventListener('blur',function flow(abj){
if(obj.value==''){
  this.nextElementSibling.classList.remove('label-flow');
  this.classList.remove('border');
  console.log(this.classList);
}
})
});
