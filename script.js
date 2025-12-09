const loadLevel = () => {
  fetch('https://openapi.programming-hero.com/api/levels/all')
    .then(res => res.json())
    .then(json => {
      displayLevel(json.data);
    })
    .catch(err => console.error(err));
};

const displayLevel = (lesson) => {
  // 1. Get the Container
  const levelContainer = document.getElementById("levelContainer");
  
  // 2. Get every level
  lesson.forEach((lesson) => {
      // 2.1. Create an Element
      const btnDiv = document.createElement("div");
      btnDiv.innerHTML = `<button onClick=" displayWord(${lesson.level_no})" class ="btn btn-outline btn-primary flex flex-col gap-2 p-2 md:p-4">${lesson.level_no}, ${lesson.lessonName}</button>`;
   // 2.2. Append Container
   levelContainer.append(btnDiv);
  } );
};

const displayWord = (id) => {
  const url = `https://openapi.programming-hero.com/api/level/${id}`;
  fetch(url)
    .then(res => res.json())
    .then(data => {
      displayWords(data.data);
    })
    .catch(err => console.error(err));
};

const displayWords = (words) => {
  const displayWordContainer = document.getElementById("displayWordContainer");
  displayWordContainer.innerHTML = "";
  words.forEach((words)=>{
    const wordsDiv = document.createElement ("div");
    wordsDiv.innerHTML = `<div class=" flex-col max-w-fit bg-primary-content shadow-lg p-4 text-primary ">
   <p class="">Level - ${words.level}</p>
   <p class="">Word - ${words.word}</p>
   <p class="">Meaning - ${words.meaning}</p>
   <p class="">Pronounciation - ${words.pronunciation}</p>
 </div>`;
    displayWordContainer.append(wordsDiv);
  } )
}

loadLevel();

