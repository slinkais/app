var bot = new cleverbot('rK7vrCOBs9M9gCQQ', 'syVJxPyh61XmeWTMNMMsuwzZQDMlIkdk');

bot.setNick("randomguyfrombootcampLV")

bot.create(function(err, session) {
    // session is your session name, it will either be as you set it previously, or cleverbot.io will generate one for you

    // Woo, you initialized cleverbot.io.  Insert further code here
});

var ask = function(message) {
    bot.ask(message, function(err, response) {
        console.log(response); // Will likely be: "Living in a lonely world"
        document.getElementById("demo").innerHTML += 'Cleverbot: ' + response + '</br>';
        var chat = $('#chatbox');
        chat.scrollTop(chat.prop('scrollHeight'));
    });
}

$("#submitmsg").click(function() {
    var clientmsg = $("#usermsg").val();
    if (clientmsg == 'clear') {
        document.getElementById("usermsg").value = '';
        document.getElementById("demo").innerHTML = '';
        return false;
    }
    document.getElementById("usermsg").value = '';
    document.getElementById("demo").innerHTML += 'You: ' + clientmsg + '</br>';
    ask(clientmsg);
    var chat = $('#chatbox');
    chat.scrollTop(chat.prop('scrollHeight'));
    return false;
});
