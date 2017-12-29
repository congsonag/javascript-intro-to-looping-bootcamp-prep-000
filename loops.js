var gifts = ['teddy bear', 'drone', 'doll']

function wrapGift(gift) {
  console.log(`Wrapped ${gift} and andded a bow!`)
}

for (i = 0; i < gifts.length; i += 2) {
  wrapGift(gifts[i])
}