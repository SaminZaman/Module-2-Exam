//Mario vs Link - Pressing Their buttons will change some elements, calcuating their attack power, and determing who will win through writing a battle description

"use strict";

//Event Listeners
document.getElementById("mario-btn").addEventListener("click", marioTime); // mario button
document.getElementById("link-btn").addEventListener("click", linkTime); //link buttom
document.getElementById("calculate-btn").addEventListener("click", calculateAttack); //calculate attack button
document.getElementById("battle-btn").addEventListener("click", startBattle); //start the battle button


//Event Functions

//Pressing the Mario and Link buttons
function marioTime() {
    document.getElementById("mainImg").src = "images/mario.png";
    document.body.style.backgroundColor = "pink";
    document.getElementById("html").style.backgroundColor = "red";
    document.getElementById("hero-of").innerHTML = "The Mushroom Kingdom";
    document.getElementById("loveInterest").innerHTML = "Princess Peach";
    document.getElementById("nemesis").innerHTML = "King Bowser";
    document.getElementById("battleDescrip").innerHTML = "-------------";
}

function linkTime () {
    document.getElementById("mainImg").src = "images/link.png";
    document.body.style.backgroundColor = "lightgreen";
    document.getElementById("html").style.backgroundColor = "green";
    document.getElementById("hero-of").innerHTML = "Hyrule";
    document.getElementById("loveInterest").innerHTML = "Princess Zelda";
    document.getElementById("nemesis").innerHTML = "Ganon";
    document.getElementById("battleDescrip").innerHTML = "-------------";
}







//Calculating the Attack
function calculateAttack() {
    //Input
    let marioS = Number (document.getElementById("marioS").value); //mario strength
    let marioD = Number (document.getElementById("marioD").value); //mario defense
    let linkS = Number (document.getElementById("linkS").value); //link strength
    let linkD = Number (document.getElementById("linkD").value); //link defense

    //Processing (calculating the attack values to whole numbers)
    let marioAttack = (marioS*2)/linkD +5;
    let linkAttack = (linkS+15)/marioD;
    marioAttack = Math.floor(marioAttack);
    linkAttack = Math.floor(linkAttack);

    //Outputting the Attack values
    document.getElementById("marioAttack").innerHTML = marioAttack;
    document.getElementById("linkAttack").innerHTML = linkAttack;
}







//Writing out the Battle
function startBattle() {
    
    //Input of words to be used in the battle description
    let plumberItem = document.getElementById("plumberItem").value;
    let knightItem = document.getElementById("knightItem").value;
    let exclamation = document.getElementById("exclamation").value;

    //Output of the battle description
    //When page is set to Mario Time (Mario wins)
    if (document.getElementById("hero-of").innerHTML == "The Mushroom Kingdom") {
        document.getElementById("battleDescrip").innerHTML = 'Once upon a time, in a kingdom far far away, Mario was eating his breakfast minding his own business. Suddenly, there was a loud baning at his front door. Confused, Mario went to go answer it, and on the other side was Toad waiting to deliver an important message. Toad explained that Princess Peach had been kidnapped from the Mushroom Kingdom (once again), but that this time it was someone other than Bowser who took her. "What?" Mario asked, "Thats toad-aly crazy. Who was it then?" Toad explained to Mario that it was someone who looked different from any living thing that he had ever seen, and that he wore green garments, was a little taller and skinnier than Mario himself. "Luigi?" Mario asked. "No!" Toad snapped back "He said his name was Link or something. He went that way!". With that Toad pointed to a civilization far off in the distance that Mario had never noticed before. Mario began marching towards it, but then Toad yelled at him that he should probably bring something with him in case there is a fight. Mario agreed, but not wanting to waste any time, he walked back into his house and grabbed the first thing he saw: a ' + plumberItem + '. He then started his long journey. Once he passed the "Welcome to Hyrule" sign just outside the kingdom, he tried calling out the name of the supposed kidnapper of his princess: "Leo! Leo! um.. Luca! Lowe! uhhh... Luke?". All the while, Link, who was sitting at the top of Princess Zeldas castle, was watching Mario walk right past all the gaurds into the kingdom, and he began to wonder "Who is this red, big nosed freak?" He decided that the gaurds were useless and that he would have to do this on his own, so he grabbed a ' + knightItem + ' and made his way down to the ground. "' + exclamation + '!" Link called. "' + exclamation + '?" Mario asked. "Who goes there?" "Itsa me Mario" "Leave now, or you will regret it" "Make me!" Link charged at Mario, and Mario charged at Link. Mario got the first hit, smacking Link right on the top of his skull with his ' +plumberItem + ", but then Link swept Mario off his feet with his " + knightItem + ', right before Princess Peach screamed from the top of princess Zeldas castle "WHAT ARE YOU GUYS DOING!?" "Im here to save you" Mario explained. "I dont need to be saved! Link just came by to pick me up so that I could hang out with my childhood, friend Princess Zelda!". "Oh" Mario muttered "Sorry. I will go home then. See you there". And so Mario limped all the way back to the Mushroom kingdom with his leg that Link broke, and Link crawled back up the stairs with his skull bleeding. Link died of blood loss. But thats okay, because I mean he only lost his first life, his still has four more. Mario won this time. THE END'
    }
        //When page is set to Link Time (Link wins)
        else if (document.getElementById("hero-of").innerHTML == "Hyrule") {
            document.getElementById("battleDescrip").innerHTML = 'Once upon a time, in a kingdom far far away, Mario was eating his breakfast minding his own business. Suddenly, there was a loud baning at his front door. Confused, Mario went to go answer it, and on the other side was Toad waiting to deliver an important message. Toad explained that Princess Peach had been kidnapped from the Mushroom Kingdom (once again), but that this time it was someone other than Bowser who took her. "What?" Mario asked, "Thats toad-aly crazy. Who was it then?" Toad explained to Mario that it was someone who looked different from any living thing that he had ever seen, and that he wore green garments, was a little taller and skinnier than Mario himself. "Luigi?" Mario asked. "No!" Toad snapped back "He said his name was Link or something. He went that way!". With that Toad pointed to a civilization far off in the distance that Mario had never noticed before. Mario began marching towards it, but then Toad yelled at him that he should probably bring something with him in case there is a fight. Mario agreed, but not wanting to waste any time, he walked back into his house and grabbed the first thing he saw: a ' + plumberItem + '. He then started his long journey. Once he passed the "Welcome to Hyrule" sign just outside the kingdom, he tried calling out the name of the supposed kidnapper of his princess: "Leo! Leo! um.. Luca! Lowe! uhhh... Luke?". All the while, Link, who was sitting at the top of Princess Zeldas castle, was watching Mario walk right past all the gaurds into the kingdom, and he began to wonder "Who is this red, big nosed freak?" He decided that the gaurds were useless and that he would have to do this on his own, so he grabbed a ' + knightItem + ' and made his way down to the ground. "' + exclamation + '!" Link called. "' + exclamation + '?" Mario asked. "Who goes there?" "Itsa me Mario" "Leave now, or you will regret it" "Make me!" Link charged at Mario, and Mario charged at Link. Mario got the first hit, smacking Link right on the top of his skull with his ' +plumberItem + ", but then Link swept Mario off his feet with his " + knightItem + ', right before Princess Peach screamed from the top of princess Zeldas castle "WHAT ARE YOU GUYS DOING!?" "Im here to save you" Mario explained. "I dont need to be saved! Link just came by to pick me up so that I could hang out with my childhood, friend Princess Zelda!". "Oh" Mario muttered "Sorry. I will go home then. See you there". And so Mario limped all the way back to the Mushroom kingdom with his leg that Link broke, and Link crawled back up the stairs with his skull bleeding. Mario tripped and fell into a ditch where he starved to death as no one could find him to save him. But thats okay, because I mean he only lost his first life, he still has four more. Link won this time. THE END'
        }

        //If the page is niether set to Link Time nor Mario Time (tie)
        else {
            document.getElementById("battleDescrip").innerHTML = 'Once upon a time, in a kingdom far far away, Mario was eating his breakfast minding his own business. Suddenly, there was a loud baning at his front door. Confused, Mario went to go answer it, and on the other side was Toad waiting to deliver an important message. Toad explained that Princess Peach had been kidnapped from the Mushroom Kingdom (once again), but that this time it was someone other than Bowser who took her. "What?" Mario asked, "Thats toad-aly crazy. Who was it then?" Toad explained to Mario that it was someone who looked different from any living thing that he had ever seen, and that he wore green garments, was a little taller and skinnier than Mario himself. "Luigi?" Mario asked. "No!" Toad snapped back "He said his name was Link or something. He went that way!". With that Toad pointed to a civilization far off in the distance that Mario had never noticed before. Mario began marching towards it, but then Toad yelled at him that he should probably bring something with him in case there is a fight. Mario agreed, but not wanting to waste any time, he walked back into his house and grabbed the first thing he saw: a ' + plumberItem + '. He then started his long journey. Once he passed the "Welcome to Hyrule" sign just outside the kingdom, he tried calling out the name of the supposed kidnapper of his princess: "Leo! Leo! um.. Luca! Lowe! uhhh... Luke?". All the while, Link, who was sitting at the top of Princess Zeldas castle, was watching Mario walk right past all the gaurds into the kingdom, and he began to wonder "Who is this red, big nosed freak?" He decided that the gaurds were useless and that he would have to do this on his own, so he grabbed a ' + knightItem + ' and made his way down to the ground. "' + exclamation + '!" Link called. "' + exclamation + '?" Mario asked. "Who goes there?" "Itsa me Mario" "Leave now, or you will regret it" "Make me!" Link charged at Mario, and Mario charged at Link. Mario got the first hit, smacking Link right on the top of his skull with his ' +plumberItem + ", but then Link swept Mario off his feet with his " + knightItem + ', right before Princess Peach screamed from the top of princess Zeldas castle "WHAT ARE YOU GUYS DOING!?" "Im here to save you" Mario explained. "I dont need to be saved! Link just came by to pick me up so that I could hang out with my childhood, friend Princess Zelda!". "Oh" Mario muttered "Sorry. I will go home then. See you there". And so Mario limped all the way back to the Mushroom kingdom with his leg that Link broke, and Link crawled back up the stairs with his skull bleeding. Mario tripped and fell into a ditch where he starved to death as no one could find him to save him, and Link died of blood loss. But thats okay, because I mean they only lost their first life, they still have four more. The battle ended a tie. THE END'

        }
}



