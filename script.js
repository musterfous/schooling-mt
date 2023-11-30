const profile = document.querySelector('.profile')
profile.innerHTML = "My Profile"
profile.style.textAlign = "center"
profile.style.color = "gold"

profile.addEventListener('mouseenter', function(){
    profile.innerHTML = "Mio Profilo"
    profile.style.textAlign = "center"
})
profile.addEventListener('mouseleave', function(){
    profile.innerHTML = "My Profile"
    profile.style.textAlign = "center"
})

const skillsList = document.querySelector('.skillsList')
skillsList.innerHTML ="`<ol><li>Modern, Bespoke, Responsive Websites</li><li>Bilingual Websites & Apps</li><li>Customisable Work</li><li>Short delivery times</li><li>Clients assistance<li>Quality Price binome</li><li>Affordable costs</li></ol>`"
skillsList.style.color = "gold"

skillsList.addEventListener('mouseenter', function(){
    skillsList.innerHTML = "`<ol><li>Siti moderni, adattabili e su misura </li><li>App e siti bilingue</li><li>Lavori con scelta del cliente</li><li>Consegne brevi</li><li>Assistenza cliente<li>Il rapporto Qualita/prezzo</li><li>Costi modici</li></ol>`"
})
skillsList.addEventListener('mouseleave', function(){
    skillsList.innerHTML = "`<ol><li>Modern, Bespoke, Responsive Websites</li><li>Bilingual Websites & Apps</li><li>Customisable Work</li><li>Short delivery times</li><li>Clients assistance<li>Quality Price binome</li><li>Affordable costs</li></ol>`"
})

const skills = document.querySelector('.skills')
skills.style.color="gold"

const about = document.querySelector('.about')
about.innerHTML="About Myself"
about.style.textAlign = "center"
about.style.color="gold"

about.addEventListener('mouseenter', function(){
    about.innerHTML = "Chi sono"
    about.style.textAlign = "center"
})
about.addEventListener('mouseleave', function(){
    about.innerHTML = "About Myself"
    about.style.textAlign = "center"
})

const history = document.querySelector('.history')
history.innerHTML="`<ol><li>I took a 'COBOL' course in <b>1981</b></li><li>Then I started teaching (mainly) English French and Italian in <b>1982</b></li><li>Schooling-MT(Mus Terfous) was Registered 1997.</li><li>I re-started developing 1n <b>2015</b></li></ol>`"
history.style.color="gold"

history.addEventListener('mouseenter',function(){
    history.innerHTML="`<ol><li>Completai un corso 'COBOL' nel <b>1981</b></li><li>Poi insegnai (principalmente) inglese oltre al francese e italiano dal<b>1982</b></li><li>Schooling-MT(Mus Terfous) fu avviata nel 1997.</li><li>Ricominciai a fare il programmatore nel <b>2015</b></li></ol>`"
    history.style.color = "gold"
})
history.addEventListener('mouseleave',function(){
    history.innerHTML="`<ol><li>I took a COBOL course in <b>1981</b></li><li>Then I started teaching (mainly) English French and Italian in <b>1982</b></li><li>Schooling-MT(Mus Terfous) was Registered 1997.</li><li>I re-started developing 1n <b>2015</b></li></ol>`"
    history.style.color = "gold"
})
const various = document.querySelector('.various')
various.innerHTML="`<ol><li>I have many websites ready to deploy.</li><li>Educational apps for example:</li><li>Hangman, English quizzes, Italian word games from word puzzles magazines</li><li>Taxi drivers exam test(Provincia di Milano) </li></ol>`"
various.style.width = "300px"

various.style.color="gold"



various.addEventListener('mouseenter',function(){
    various.innerHTML="`<ol><li>Ho molti sitiweb pronti a pubblicare</li><li>App educative come ad esempio: </li><li>L'impiccato, quiz linguistici, quiz basati sulle lingue italiano/inglese</li><li>Test d'inglese per Tassisti Milanesi (Provincia di Milano)</li></ol>`"
    various.style.color = "gold"
})
various.addEventListener('mouseleave',function(){
    various.innerHTML="`<ol><li>I have many websites ready to deploy.</li><li>Educational apps for example:</li><li>Hangman, English quizzes, Italian word games from word puzzles magazines</li><li>Taxi drivers exam test(Provincia di Milano) </li></ol>`"
    various.style.color = "gold"
})
const footer = document.querySelector('.footer')
footer.addEventListener('mouseenter', ()=>{
    footer.innerHTML="Questo sito è stato creato da me  sotto il nome della mia ditta | <b>SchoolingMT</b>"
})
const footer1 = document.querySelector('.footer')
footer1.addEventListener('mouseleave', ()=>{
    footer1.innerHTML="This website was realized by myself under the name of my company | <b>SchoolingMT</b>"
})







