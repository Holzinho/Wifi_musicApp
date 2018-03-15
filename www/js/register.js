var register = function (userN, pw, config) {
    console.log(userN);
    var user = {
        username: userN,
        pw: pw
    }

    var onvalidationerror = function (err) {
        $('#regError').html(err);
    }

    var onvalidationsuccess = function () {
        $.post({
            url: 'register',
            contentType: 'application/json',
            data: JSON.stringify(user),
            error: config.onerror,
            success: config.onsuccess
        });
    }

    var validate = function (username, pw) {

        var error = null;
        if (!pw || pw.length < 4) {
            error = 'Das Passwort ist zu kurz!';
        }
        if (pw && pw.length > 8) {
            error = 'Das Passwort ist zu lang!';
        }
        if (!username || username.length < 3) {
            error = 'Der Username ist zu kurz!';
        }
        if (error) {
            return onvalidationerror(error);
        }
        onvalidationsuccess();
    }

    validate(user.username, user.pw);
}