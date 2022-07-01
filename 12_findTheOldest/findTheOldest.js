const getAge = function(birth, death) {
    if (!death) {
      death = new Date().getFullYear(); // this function is used to get a "death" date for someone who is still living
    }
    return death - birth;
  };

const findTheOldest = function(array) {
    return array.reduce((oldest, currentPerson) => { //these are the two things we wanted to find. oldest person, and their name. Arrow used for function
      const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath); //I don't understand any of this
      const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
      return oldestAge < currentAge ? currentPerson : oldest;
    })
  };

// Do not edit below this line
module.exports = findTheOldest;
