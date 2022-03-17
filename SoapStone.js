fetch("./messages.json")
  .then((response) => response.json())
  .then((data) => {
    const messageFactory = new MessageFactory(data);

    document.write(messageFactory.message());
    document.body.style.backgroundColor = "dimgrey";
    document.body.style.color = "white";
    document.body.style.textShadow = "2px 2px black";
    document.body.style.fontFamily = "Verdana";
    document.body.style.fontSize = 32;
  });
