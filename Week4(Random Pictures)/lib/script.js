

var resimler = document.getElementsByTagName("img")

for (i = 0; i<10; i++){
  resimler[i].src = "https://source.unsplash.com/random/200x200?random=" + i
}
