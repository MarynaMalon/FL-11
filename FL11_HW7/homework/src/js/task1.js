let mail = prompt('Enter your email', '');
let minLength = 6;
let minLength2 = 5;
let mail1 = 'user@gmail.com';
let mail2 = 'admin@gmail.com';
let word1 = 'UserPass';
let word2 = 'AdminPass';

if (mail===null||mail==='') {
    alert('Canceled');
} else if (mail.length<minLength) {
    alert("I don't know any emails having name length less than 6 symbols");
} else if (mail===mail1||mail===mail2) {
    let word = prompt('Enter your password','');
    switch(word) {
        case null:
        case '': 
        alert('Canceled');
        break;
        case word1:
        case word2:
            {
        let result = confirm('Do you want to change your password?');
        if (result===false) {
            alert('You have failed the change');
        } else if (result===true) {
            let oldword = prompt('Write your old password','');
            switch(oldword) {
                case null:
                case '': 
                alert('Canceled');
                break;
                case word1:
                case word2:
                    {
                    let newword = prompt('Enter your new password','');
                    if (newword.length<minLength2) {
                        alert('It’s too short password. Sorry');
                    } else {
                        let newword2 = prompt('Enter your new password one more time');
                        if (newword !== newword2) {
                            alert('You wrote the wrong password');
                        } else if (newword===newword2) {
                            alert('You have successfully changed your password');
                        }
                    }
                break;
                    }
                default:
                alert('Wrong password');
        }
    }
        break;
}
        default:
            alert('Wrong password');
    }

} else {
    alert('I don’t know you');
}