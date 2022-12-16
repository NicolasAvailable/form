

let _user = [
    {
        usuario: 'sotico',
        contraseña: 'cabezaeñema' 
    },
    {
        usuario: 'juan',
        contraseña: 'jadjdasdiw'
    }
];

const $user      = document.querySelector('#user');
const $password  = document.querySelector('#password');
const $btn_send  = document.querySelector('#send');
const $alert     = document.querySelector('#alert');

const msjGood = `
<div class="alert alert-success alert-dismissible fade show" role="alert">
  you have log in sucefully! 
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`

const msjBad = `
<div class="alert alert-danger alert-dismissible fade show" role="alert">
  something has gone wrong, try to check your datas.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`
 

class auth {


    constructor( user, password ){
        this.user = user;
        this.password = password;
    }

    getlogin(){

 
        _user.filter((users) => {
            if(  this.user === '' || this.password  === ''){

                return  alert('hay un problema')
                // $alert.innerHTML = ''
                // $alert.innerHTML += msjBad;
                // return;
            } 
                
            
            _user.push({usuario: this.user, contraseña: this.password});
            $user.value = '';
            $password.value = '';
            $alert.innerHTML = '';
            $alert.innerHTML += msjGood;
            console.log(_user);
            return _user;
        })

    }

    
}


$btn_send.addEventListener('click', () => {
    const oldUser = new auth($user.value, $password.value);
    return oldUser.getlogin();
    
})

