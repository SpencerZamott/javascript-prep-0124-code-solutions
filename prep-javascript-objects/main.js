const person = {firstName:"Spencer" , lastName:"Zamott",hobby:"Art",}
console.log("The person is", person)
const fullName =(person.firstName) + " " + (person.lastName)
console.log("The person's name is ", fullName)

person.job = "Dog groomer"
console.log("The person's current job is:", person.job)

person['previousJob'] = "Medical Concierge"
console.log("The person's previous job:", person['previousJob'])

console.log("The complete person object", person)
