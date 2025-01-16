const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    src: 'https://www.course-api.com/images/people/person-1.jpeg',
    description: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    src: 'https://www.course-api.com/images/people/person-2.jpeg',
    description: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    src: 'https://www.course-api.com/images/people/person-4.jpeg',
    description: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    src: 'https://www.course-api.com/images/people/person-3.jpeg',
    description: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];

const imgPerson = document.getElementById("img");
const namePerson = document.getElementById("name");
const jobPerson = document.getElementById("job");
const descriptionPerson = document.getElementById("description");

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const suprise = document.querySelector(".suprise");
let currentItem = 1;
window.addEventListener("DOMContentLoaded", ()=>{
  showPerson();
})

function showPerson(){
  const {name, job, src, description} = {...reviews[currentItem]};
  imgPerson.src = src;
  namePerson.textContent = name;
  jobPerson.textContent = job;
  descriptionPerson.textContent = description;
}

nextBtn.addEventListener("click", ()=>{
	currentItem++;
	if (currentItem >= reviews.length)
		currentItem = 0;
	showPerson();
})
prevBtn.addEventListener("click", ()=>{
	currentItem--;
	if (currentItem < 0)
		currentItem = reviews.length -1;
	showPerson();
})

suprise.addEventListener("click", ()=>{
	currentItem =  Math.floor(Math.random()*4);
	showPerson();
})
