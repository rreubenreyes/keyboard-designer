const keyboardLayout = document.querySelector('g#keyboard-layout')
const groups = [...keyboardLayout.querySelectorAll('g[transform]:not([id*="face"])')]
groups.forEach(group => {
    const keys = [...group.querySelectorAll('g[id*="face"]')]
    keys.forEach(key => { 
        const pathRef = key.children[0].getAttribute('xlink:href')
        const path = document.querySelector(pathRef)
        path.addEventListener('click', function() {
            const profileId = document.querySelector(`#${key.id.split('--')[0]}`)
                  .children[0]
                  .getAttribute('xlink:href') 
            const profile = document.querySelector(profileId)

            console.log(key)
            this.setAttribute('fill', '#0892d0')
            profile.setAttribute('fill', '#0079b7')
        }, { once: true })
    })	
})
