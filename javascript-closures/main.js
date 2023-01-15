function graduate(credential) {
  return function (fullName) {
    return fullName + ', ' + credential;
  };
}

const medicalSchool = graduate('M.D.');
const lawSchool = graduate('Esq.');

console.log('medicalSchool function:', medicalSchool('Darren Yang'));
console.log('lawSchool function:', lawSchool('Darren Yang'));
