// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)


let audio_controls = document.querySelectorAll('.audio_controls')
audio_controls.forEach((item, index) => {
	item.addEventListener('play', () => {
		audio_controls.forEach((el, currentIndex) => {
			if (index !== currentIndex) {
				el.pause()
				el.currentTime = 0
			}
		})
		item.play()
	})
})

let icon = document.querySelector('.icon')
let bg = document.querySelector('.liquid img')
let title_h1 = document.querySelector('.title_h1')
let title_a = document.querySelector('.title_a')
let introduce = document.querySelector('.introduce')
let liquid = document.querySelector('.liquid')

let opener = false
icon.onclick = () => {
	if (opener == false) {
		bg.classList.add('bgChange')
		title_h1.classList.add('h1_change')
		title_a.classList.add('a_change')
		introduce.classList.add('introduce_change')
		opener = true
		return
	}
	bg.classList.remove('bgChange')
	title_h1.classList.remove('h1_change')
	title_a.classList.remove('a_change')
	introduce.classList.remove('introduce_change')
	opener = false
}

