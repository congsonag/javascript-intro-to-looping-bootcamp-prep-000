var gifts = ['teddy bear', 'drone', 'doll']

function wrapGift(gift) {
  console.log(`Wrapped ${gift} and andded a bow!`)
}

for (i = 0; i < gifts.length; i++) {
  wrapGift(gifts[i])
}

for (var i = 0; i < 100; i +=5) {
  console.log("Hello world the " + i + " time")
}
