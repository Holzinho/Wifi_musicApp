var login = function (username, pw, config) {

    $.post({
        url: 'login',
        contentType: 'application/json',
        data: JSON.stringify({
            username: username,
            pw: pw
        }),
        error: config.onerror,
        success: function (data) {
            localStorage.clear();
            localStorage.setItem('username', username);
            localStorage.setItem('pw', pw);
            config.onsuccess();
        }
    })

}

var logout = function (onlogout) {

    localStorage.clear();
    onlogout();
}