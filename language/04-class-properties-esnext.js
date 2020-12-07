// class properties
// https://github.com/tc39/proposal-class-fields

class Contact {
  prenom = 'Romain';
  hello = () => {
    console.log(`Hello ${this.prenom}`);
  }
  render() {
    setTimeout(this.hello, 1_000);
  }
}

const romain = new Contact();
romain.render();
