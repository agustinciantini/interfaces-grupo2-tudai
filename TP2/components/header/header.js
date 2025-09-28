const userAvatar = document.querySelector('.header-user-avatar');
const profileCard = document.querySelector('.profile-card');

userAvatar.addEventListener('click', (event) => {
    event.stopPropagation();
    profileCard.classList.toggle('active');
});

document.addEventListener('click', (event) => {

    if (!profileCard.contains(event.target) && !userAvatar.contains(event.target)) {
        profileCard.classList.remove('active');
    }
});