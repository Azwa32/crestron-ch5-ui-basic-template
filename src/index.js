import CrComLib from "@crestron/ch5-crcomlib/build_bundles/cjs/cr-com-lib.js";
import './styles/styles.scss';


CrComLib = CrComLib.CrComLib; // Re-assign CrComLib local variable to the CrComLib.CrComLib object that exists in 2.6+

window.CrComLib = CrComLib;
window.bridgeReceiveIntegerFromNative = CrComLib.bridgeReceiveIntegerFromNative;
window.bridgeReceiveBooleanFromNative = CrComLib.bridgeReceiveBooleanFromNative;
window.bridgeReceiveStringFromNative = CrComLib.bridgeReceiveStringFromNative;
window.bridgeReceiveObjectFromNative = CrComLib.bridgeReceiveObjectFromNative;


// Example of a container of buttons
function handleSourcePress(e){
    // Sends value from the button to analog join 1 in simpl
    // have to first convert the value to int
        const value = e.target.value; // get the value of the target, in this case "e"
        const id = e.target.id        // get the id of the target
        CrComLib.publishEvent("b", value, true);  // set high
        setTimeout(() => CrComLib.publishEvent("b", value, false),200);  // reset low after pause
        console.log(id, "button was pressed!", value);
        console.log(e)

        // interlock logic
        // get any source with "src" in the ID
        var sources = document.querySelectorAll('[id*="src"]');
        // set the elemeent back to inactive
        Array.from(sources).forEach((el) => {
            document.getElementById(el.id).className = "test";
        });

        // now set the source button that was just pressed to active
        document.getElementById(`src${e.target.value}`).className = "testActive";
}
    
// listens to the class called sources and runs whenever pressed.  So basically any button inside the div
// will trigger this eventListener to run
document.querySelector(".sources").addEventListener("click", function (event) {     // when any button with a class of sources is pressed
    if (event.target.tagName === "BUTTON") {                                        // if event was from a html button                    
        handleSourcePress(event);
    }

    event.stopPropagation();
});


// feedback from controller, sets respective fb# button to demoActive class
for (let i = 5; i <= 8; i++) {
    CrComLib.subscribeState('b', String(i), (value) => {
        if (value) {
            document.getElementById('resp' + (i - 4)).className = 'testActive';
            document.getElementById('src' + (i - 4)).className = 'testActive';
        } else {
            document.getElementById('resp' + (i - 4)).className = 'test';
        }
    });
}
