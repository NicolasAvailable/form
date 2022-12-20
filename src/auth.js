let _user = [
    {
        usuario: 'nicolas',
        contraseña: 'coquito300'
    },
    {
        usuario: 'denilson',
        contraseña: 'programer123'
    },
  
];

const $user     = document.querySelector('#user');
const $password = document.querySelector('#password');
const $alert    = document.querySelector('#alert');
const $name      = document.querySelector('#name');
const $last_name = document.querySelector('#last-name');
const $user_id   = document.querySelector('#user-id');
const $email     = document.querySelector('#email');
const $password_create  = document.querySelector('#password-create');
const $alert_sign       = document.querySelector('#alert-sign');



const msjGood = `
<div class="alert alert-success alert-dismissible fade show" role="alert">
you have log in sucefully! 
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`

const msjBad = `
<div class="alert alert-danger alert-dismissible text-center fade show" role="alert">
something has gone wrong, try to check your datas.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`
 
const msjGood_sign = `
<div class="alert alert-success alert-dismissible text-center fade show" role="alert">
you created your account sucefully! 
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`



export class auth {


    constructor( user, password ){
        this.user = user;
        this.password = password;
    }
    
    login(){
       if( !_user.some(users => this.user === users.usuario && 
        this.password === users.contraseña)   || 
        this.user === ''                      || 
        this.password === '' ){
            
            $alert.innerHTML = ''
            $alert.innerHTML += msjBad;
            return
       }

       $user.value     = '';
       $password.value = '';
       $alert.innerHTML = '';
       $alert.innerHTML += msjGood;
       console.log(_user);
       return    
    }

    signIn(){
    
        if( this.user === '' || 
            this.password === '' ||
            $last_name.value === '' ||
            $email.value === '' || 
            $name.value === ''
            ){
                
            $alert_sign.innerHTML = '';    
            $alert_sign.innerHTML += msjBad;
            return

        }

        _user.push({usuario: $user_id.value.toLowerCase(), password: $password_create.value})
        $last_name.value = ''; 
        $email.value     = '';  
        $name.value      = '';
        $user_id.value   = '';
        $password_create.value = '';
        $alert_sign.innerHTML = '';
        $alert_sign.innerHTML += msjGood_sign;
        console.log(_user);
        return

    }
    
    
}

export{
    _user,
    $user,
    $password,
}

export default{
    _user,
    $name,
    $last_name,
    $email,
    $user_id,
    $password_create
}
