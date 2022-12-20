import { _user, auth, $user, $password } from './auth.js'


const $btn_send = document.querySelector('#send');

$btn_send.addEventListener('click', () => {
    const oldUser = new auth($user.value, $password.value);
    oldUser.login()
    
})


