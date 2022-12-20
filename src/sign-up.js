import properity, { auth } from "./auth.js";

const $btn_send_sign = document.querySelector('#btn-send-sign');

$btn_send_sign.addEventListener('click', () => {
    const newUser = new auth(properity.$user_id.value, properity.$password_create.value);
    newUser.signIn()
})