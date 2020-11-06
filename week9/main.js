let selection = 0

let pancakes = document.querySelector('#pancakes')
let food = document.querySelector('input[name="food"]')
let response = document.querySelector('#reponse')
let guess = document.querySelector('input[name="guess"]')
let result = document.querySelector ('#result')

console.log(pancakes)
console.log(food)
console.log(response)
console.log(guess)
console.log(result)

food.onchange=function(){
	shapeshifter.innerHTML= food.value + ' was the right choice.'
}

shapeshifter.onclick=function(){
	if (shapeshifter.style.backgroundColor==''){shapeshifter.style.backgroundColor='pink'} else {
		shapeshifter.style.backgroundColor='orange'
	}
}

shapeshifter.onmouseover=function()
{
	shapeshifter.innerHTML='I think we should eat them every morning.'
	shapeshifter.style.width='5em'
}

shapeshifter.onmouseout=function(){
	shapeshifter.innerHTML='We can make brunch plans!'
	shapeshifter.style.width='5em'
}

guess.onchange=function() {
	if((guess.value=='7') || guess.value=='seven'){
		result.innerHTML="I can see you pay attention when it comes to food!"
	} else {
		result.innerHTML='Try again!'
	}
}
