var bot = new cleverbot('rK7vrCOBs9M9gCQQ', 'syVJxPyh61XmeWTMNMMsuwzZQDMlIkdk');

bot.setNick("randomguyfrombootcampLV")

bot.create(function(err, session) {
    // session is your session name, it will either be as you set it previously, or cleverbot.io will generate one for you

    // Woo, you initialized cleverbot.io.  Insert further code here
});

var botName = "Peter";

var ask = function(message) {
    bot.ask(message, function(err, response) {
        displayResponse(response);
        if(botName == "James"){
          botName = "Peter";
          ask(response);
        } else {
          botName = "James";
          ask(response);
          // askOther(response);
        }
    });
}

var askOther = function(message) {
  $.post('http://api.program-o.com/v2/chatbot/',
    {bot_id: '6', say: message, convo_id: '69', format: 'json'},
    function(data) {
      displayResponse(data);
      if(botName == "James"){
        botName = "Peter";
        ask(data);
      } else {
        botName = "James";
        askOther(data);
      }
    });
}



function displayResponse(response){
  console.log(response); // Will likely be: "Living in a lonely world"
  document.getElementById("demo").innerHTML += botName +': ' + response + '</br>';
  var chat = $('#chatbox');
  chat.scrollTop(chat.prop('scrollHeight'));
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
