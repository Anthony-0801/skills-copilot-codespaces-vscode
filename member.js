function skillsMember() {
  let member = {
    name: 'Sara',
    age: 25,
    skills: ['HTML', 'CSS', 'JS'],
    country: 'Finland'
  };
  // check if the person has HTML skill
  console.log(member.skills.includes('HTML')); // true
  // check if the person has PHP skill
  console.log(member.skills.includes('PHP')); // false
}