document.addEventListener("DOMContentLoaded", () => {
  printSong();
});
function printSong(){
	let songTag = document.getElementById("song");
	for(var i=99; i>0; i--){
		let songScript = "<p>"+i+" bottles of beer on the wall, "+i+" bottles of beer.<br />Take one down and pass it around, ";
		if(i>1){
			songScript += (i-1)+" bottles of beer on the wall.</p>";
		}
		else{
			songScript += "no more bottles of beer on the wall.<p>";
		}
		
		songTag.innerHTML += songScript;
	}
	songTag.innerHTML += "<p>No more bottles of beer on the wall, no more bottles of beer.<br />Go to the store and buy some more, 99 bottles of beer on the wall.</p>";
}