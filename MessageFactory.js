class MessageFactory {
  constructor(messages) {
    this.templates = messages.templates;
    this.conjunctions = messages.conjunctions;

    this.words = [];
    for (let k of Object.keys(messages.words)) {
      for (let v of messages.words[k]) {
        this.words.push(v);
      }
    }
  }

  word() {
    return this.words[Math.floor(Math.random() * this.words.length)];
  }

  template() {
    let templateText = this.templates[Math.floor(Math.random() * this.templates.length)];
    const wordText = this.word();

    while (templateText.includes("****")) {
      templateText = templateText.replace("****", wordText);
    }

    return templateText;
  }

  conjunction() {
    return this.conjunctions[Math.floor(Math.random() * this.conjunctions.length)];
  }

  message() {
    const layouts = ["T", "TCT"];
    const layout = layouts[Math.floor(Math.random() * layouts.length)];

    let messageText = "";

    for (let s in layout) {
      if (layout[s] == "T") {
        messageText += this.template();
      } else if (layout[s] == "C") {
        messageText += this.conjunction() + " ";
      }
    }

    return messageText;
  }
}
