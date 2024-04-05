window.fbAsyncInit = function() {
    FB.init({
        appId      : '3948960068721135',
        cookie     : true,  
        xfbml      : true, 
        version    : 'v19.0'
    });


    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });

};
document.getElementById('_e').addEventListener('click', () => {
    checkLoginState()
})
function statusChangeCallback(response) {
 
    console.log(response);

    if (response.status === 'connected') {
        testAPI();
    } else {
        document.getElementById('status').innerHTML = 'Please log into this app.';
    }
}


function checkLoginState() {
    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });
}

function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
        console.log('Successful login for: ' + response.name);
        document.getElementById('status').innerHTML = 'Thanks for logging in, ' + response.name + '!';
    });
}
