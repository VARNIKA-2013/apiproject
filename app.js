async function apicall(){
  let res= await fetch('https://meowfacts.herokuapp.com/')
  let final=await res.json()
  document.getElementById('box').innerText=final.data[0];
  speechSynthesis.speak(new SpeechSynthesisUtterance(final.data[0]));
}