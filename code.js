const userSubmit = document.getElementsByClassName('submit_button');
userSubmit[0].addEventListener('click', writeInform);

function writeInform(){
    let userName = document.getElementById('username').value;
    let password = document.getElementById('userpassword').value;
    document.getElementById('form_result_text').innerHTML="You entered you username: '" + userName + "' and  your password: '" + password + "'";

    localStorage.setItem( "username", userName);
    localStorage.setItem('pasword', password);
}


