fetch("./messages.json")
  .then((response) => response.json())
  .then((data) => {
    const messageFactory = new MessageFactory(data);

    document.write(`${messageFactory.message()}`);
  });
