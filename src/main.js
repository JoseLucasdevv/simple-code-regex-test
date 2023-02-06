import "./assets/css/style.css";
const regexPerson = ({ totalName: fullName, age, cpf }) => {
  console.log(`your Full Name: ${fullName}, your Age: ${age}`);
  const regex = /[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}/;
  if (regex.test(cpf) !== true) {
    console.log("Error this cpf no formated");
    return false;
  }
  console.log(cpf);
};

const newPerson = (name, surname, age, cpf) => {
  return {
    name,
    surname,
    age,
    cpf,
    get totalName() {
      return `${name} ${surname}`;
    },
  };
};
const person = newPerson("José", "Lucas", 21, "214.547.854-54");

regexPerson(person);
