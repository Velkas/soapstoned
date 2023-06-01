fetch("./messages.json")
  .then((response) => response.json())
  .then((data) => {
    const messageFactory = new MessageFactory(data);

    document.querySelector("html").innerHTML = `${messageFactory.message()}`;
  });
