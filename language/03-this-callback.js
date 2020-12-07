// mot clé class apparu en ES2015
class Contact {
  constructor(prenom) {
    // if (prenom.length > 8) {
      this.prenom = prenom;
    // }
    this.hello = this.hello.bind(this);
  }
  hello() {
    console.log(`Hello ${this.prenom}`);
  }
  render() {
    setTimeout(this.hello, 1000);
  }
}

// historiquement en JS
// fonction constructeur
// function Contact(prenom) {
//   this.prenom = prenom;
//   // this.hello = function() {
//   //   console.log(`Hello (object) ${this.prenom}`);
//   // };
// }

// Contact.prototype.hello = function() {
//   console.log(`Hello (prototype) ${this.prenom}`);
// };

const romain = new Contact('Romain');
// delete romain.prenom; // supprimer la propriété
romain.render();


const jean = new Contact('Jean');
