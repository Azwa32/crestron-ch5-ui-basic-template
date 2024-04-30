import CrComLib from "@crestron/ch5-crcomlib/build_bundles/cjs/cr-com-lib.js";
import './styles/styles.scss';


CrComLib = CrComLib.CrComLib; // Re-assign CrComLib local variable to the CrComLib.CrComLib object that exists in 2.6+

// Example of a container of buttons
function handleSourcePress(e){
    // Sends value from the button to analog join 1 in simpl
    // have to first convert the value to int
        const value = parseInt(e.target.value, 10); // get the value of the target, in this case "e"
        CrComLib.publishEvent("b", e.target.value, true);  // set high
        CrComLib.publishEvent("b", e.target.value, false); // reset low
        console.log(e.target.id, "button was pressed!", e.target.value);
        console.log(e)

        // interlock logic
        // get any source buttons with active css
        var els = document.getElementsByClassName("demoActive");
        // set the elemeent back to inactive
        Array.from(els).forEach((el) => {
            document.getElementById(el.id).className = "demo";
        });

        // now set the source button that was just pressed to active
        document.getElementById(`src${e.target.value}`).className = "demoActive";
}
    
// listens to the class called sources and runs whenever pressed.  So basically any button inside the div
// will trigger this eventListener to run
document.querySelector(".sources").addEventListener("click", function (event) {     // when any button with a class of sources is pressed
    if (event.target.tagName === "BUTTON") {                                        // if event was from a html button                    
        handleSourcePress(event);
    }

    event.stopPropagation();
});


//Touchpanel feedback, Shows error when testing in web browser
// Digital joins 5 to 8
for (let i = 5; i <= 8; i++) {
    CrComLib.subscribeState('b', i, function(value) {
        // This function will run whenever the current digital join changes.
        console.log('Digital join ' + i + ' changed to: ' + value);

        // You can add your own logic here to handle the change.
        // For example, you might want to update the UI to reflect the new state.
        if (value) {
            document.getElementById(`resp${i}`).className = 'active';
        } else {
            document.getElementById(`resp${i}`).className = 'inactive';
        }
    });
}
    //document.getElementById(`resp${e.target.value}`).className = "demoActive";
