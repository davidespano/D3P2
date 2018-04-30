/**
 *  When the color picker is used or the input text is modifies, the color
 *  of the associated entity is modified according to the selected color.
 *  (the situation of the invalid color must be handled).
 */
function onJSColorEdit()
{
    var elementsSelected = document.getElementsByClassName("selected");
    //console.log("Oggetti Selezionati = " + elementsSelected.length);



    //globalElementSelected = ""
    var inputJSColor = document.getElementById("jscolor");
    //console.log("colore = " + inputJSColor.value);
    //console.log("MyElementColor = " + globalElementSelected.getAttribute("color"))
    elementsSelected[0].setAttribute("color", "#"+inputJSColor.value);

}

/**
 *  Handling the spinner that edits the translation on the x-axis
 *  When the spinner associated to the x-axis is edited, the object moves on x-axis
 */

function onSpinnerPosXChange()
{

    var elementsSelected = document.getElementsByClassName("selected");

    var spinnerPosX = document.getElementById("spinner_pos_x");

    elementsSelected[0].object3D.position.x = spinnerPosX.value;

}

/**
 *  Handling the spinner that edits the translation on the y-axis
 *  When the spinner associated to the y-axis is edited, the object moves on y-axis
 */

function onSpinnerPosYChange()
{

    var elementsSelected = document.getElementsByClassName("selected");

    var spinnerPosY = document.getElementById("spinner_pos_y");

    elementsSelected[0].object3D.position.y = spinnerPosY.value;

}

/**
 *  Handling the spinner that edits the translation on the z-axis
 *  When the spinner associated to the z-axis is edited, the object moves on z-axis
 */

function onSpinnerPosZChange()
{

    var elementsSelected = document.getElementsByClassName("selected");

    var spinnerPosZ = document.getElementById("spinner_pos_z");

    elementsSelected[0].object3D.position.z = spinnerPosZ.value;

}



