function addRandomHouse()
{
    var houses = searchPolyModels("house", 1);
    console.log(houses[1]);
}

function emptyDropdownList()
{
    var myNode = document.getElementById("image-dropdown");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
}

function onRadioButtonClick(radioValue, radioID)
{
    var name = "line-style";
    var newEntity;
    var inSceneEntity;
    //console.log("itemList is: ",itemList);

    if($("#"+radioID).attr('previousValue') == 'true')
    {
        $("#"+radioID).prop('checked', false)
        document.getElementById("radioLabel"+radioValue).style.opacity = "0.2";
        newEntity = document.createElement('a-entity')
        newEntity.object3D.position.set(-1,0.5, -3);

        inSceneEntity = addToScene(itemList[radioValue],newEntity.object3D.position);
        inSceneEntity.addEventListener('loaded', function(){
            updateEntireLateralBar(inSceneEntity);
            openNav();
            console.log(inSceneEntity.getAttribute("position").x.toString());

        });

    }
    else
    {
        $('input[name=' + name + ']').attr('previousValue', false);
        document.getElementById("radioLabel"+radioValue).style.opacity = "1";
        //console.log("itemList is: ",itemList);
    }

    $("#"+radioID).attr('previousValue', $("#"+radioID).prop('checked'));



}

function onTopBarSearchChange()
{
    var search = document.getElementById("topbar-search");
    searchPolyModels(search.value);
}



