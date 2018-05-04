function updateEntireLateralBar(selectedElement)
{


    var inputPosX = document.getElementById("spinner_pos_x");
    var inputPosZ = document.getElementById("spinner_pos_y");
    var inputPosY = document.getElementById("spinner_pos_z");

    var inputDimX = document.getElementById("dim_x");
    var inputDimY = document.getElementById("dim_y");
    var inputDimZ = document.getElementById("dim_z");

    var inputJsColor = document.getElementById("jscolor");
    //var inputProva = document.getElementById("prova");

    var checkboxVisible = document.getElementById("entity_visible");

    inputPosX.value = (selectedElement.getAttribute("position").x).toString();
    inputPosZ.value = (selectedElement.getAttribute("position").z).toString();
    inputPosY.value = (selectedElement.getAttribute("position").y).toString();

    inputDimX.value = (selectedElement.getAttribute("scale").x).toString();
    inputDimY.value = (selectedElement.getAttribute("scale").y).toString();
    inputDimZ.value = (selectedElement.getAttribute("scale").z).toString();

    inputJsColor.jscolor.fromString(selectedElement.getAttribute("color").toString());
    //inputJsColor.jscolor.value

    if(selectedElement.getAttribute("visible"))
    {
        checkboxVisible.checked = true;
    }
    else
    {
        checkboxVisible.checked = false;
    }
}

function updatePositionsSpinners(selectedElement)
{
    var inputPosX = document.getElementById("spinner_pos_x");
    var inputPosZ = document.getElementById("spinner_pos_y");
    var inputPosY = document.getElementById("spinner_pos_z");

    inputPosX.value = (selectedElement.getAttribute("position").x).toString();
    inputPosZ.value = (selectedElement.getAttribute("position").z).toString();
    inputPosY.value = (selectedElement.getAttribute("position").y).toString();
}

function updateScalesSpinners(selectedElement)
{
    var inputDimX = document.getElementById("dim_x");
    var inputDimY = document.getElementById("dim_y");
    var inputDimZ = document.getElementById("dim_z");

    inputDimX.value = (selectedElement.getAttribute("scale").x).toString();
    inputDimY.value = (selectedElement.getAttribute("scale").y).toString();
    inputDimZ.value = (selectedElement.getAttribute("scale").z).toString();
}

function updateColorPicker(selectedElement)
{
    var inputJsColor = document.getElementById("jscolor");
    inputJsColor.jscolor.fromString(selectedElement.getAttribute("color").toString());
}

function updateVisibilityCheckBox(selectedElement)
{
    var checkboxVisible = document.getElementById("entity_visible");
    if(selectedElement.getAttribute("visible"))
    {
        checkboxVisible.checked = true;
    }
    else
    {
        checkboxVisible.checked = false;
    }

}