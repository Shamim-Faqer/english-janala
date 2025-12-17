const loadLesson = () => {
fetch('https://openapi.programming-hero.com/api/levels/all')
.then(res => res.json())
.then(data => {
displayLesson(data.data);
})
.catch(err => console.error(err));
};



const displayWord = (id) => {
const url = `https://openapi.programming-hero.com/api/level/${id}`; 
fetch(url)
.then(res => res.json())
.then(data => {
displayWords(data.data);
})
.catch(err => console.error(err));
}

const loadDetails = (id) => {
const url = `https://openapi.programming-hero.com/api/word/${id}`; 
fetch(url)
.then(res => res.json())
.then(data => {
displayDetails(data.data);
})
.catch(err => console.error(err));

};

const displayDetails = (details) => {


const detailsContainer = document.getElementById("detailsConatiner"); 
detailsContainer.innerHTML= `<div class=""> 
    <h2 class="text-2xl font-bold"> ${details.word} (<i class="fa-solid fa-microphone-lines"></i> :${ details.pronunciation}) </h2> 
</div> 
<div class=""> 
    <h2 class="font-bold">Meaning</h2> 
    <p>${details.meaning}</p> 
</div> 
<div class=""> 
    <h2 class="font-bold">Example</h2> 
    <p>${details.sentence}</p> 
</div> 
`;
document.getElementById("my_modal_5").showModal();

}

const displayWords = (words) => {
const wordsContainer = document.getElementById("wordsContainer");
wordsContainer.innerHTML = "";

words.forEach((word) => {
const cards = document.createElement("div");
cards.innerHTML = `<div class="card bg-primary-content shadow-xl"> 
    <div class="card-body"> 
        <p class="">ID - ${word.id}</p> 
        <h3 class="card-title ">${word.word}</h3> 
        <p>${word.meaning}</p> 
        <p class="text-sm text-gray-500">Pronunciation: ${word.pronunciation}</p> 
        <div class="flex flex-1 justify-between items-center max-w-full "> 
            <button onclick="loadDetails(${word.id})" class="btn btn-outline btn-primary text-lg border shadow-xl rounded p-1 bg-gray-100"> ⁉️ </button> 
            <button class="btn btn-outline btn-primary text-lg border shadow-xl rounded p-1 bg-gray-100"> 🔊 </button> 
        </div> 
    </div> 
</div>`;
wordsContainer.appendChild(cards);
});
}

const displayLesson = (lessons) => {
const levelContainer = document.getElementById("levelContainer");
levelContainer.innerHTML = "";

for (let lesson of lessons) {
const btnDiv = document.createElement("div");
btnDiv.innerHTML = `<button onclick="displayWord(${lesson.level_no})" class="btn btn-outline btn-primary"> 
    <i class="fa-brands fa-leanpub text-xl md:text-2xl"></i> 
    <span class="text-xs md:text-sm">Level - ${lesson.level_no}</span> 
</button>`; // টেমপ্লেট লিটারেলস ঠিক করা হয়েছে
levelContainer.appendChild(btnDiv);
}
}

loadLesson();
