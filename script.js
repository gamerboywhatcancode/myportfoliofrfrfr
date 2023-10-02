const HomeButton = document.getElementById('HomeButton')



const switchPageSkills = (a) => {
    window.location = 'skills.html'

}

const switchPageProjects = () => {
    window.location = 'projects.html'
}

const SwitchPageStory = () => {
    window.location = 'story.html'
}

const SwitchPageInterests = () => {
    window.location = 'interests.html'
}

HomeButton.addEventListener("click",function() {
    window.location = '/'
})

