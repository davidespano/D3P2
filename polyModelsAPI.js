
var itemList;

function callSearchApi (offset, value) {
    return fetch('https://gblock.3d.io/api/search?limit=10&offset=' + offset + '&query=' + value).then(function (response) {
        return response.json()
    })
}

function searchPolyModels (value)
{

    var items;

    Promise.all([
        // google has a limit fo max 10 result per call :/
        // so we do 3 api calls and merge the results into one
        callSearchApi(1, value),
        callSearchApi(11, value),
        callSearchApi(21, value)
    ]).then(function (results) {
        return results[0].items.concat(results[1].items).concat(results[2].items)
    }).then(function (results) {

        items = results.map(function (item_) {
            return {
                title: item_.title + ' by ' + item_.author,
                thumb: item_.image,
                url: item_.url,
                author: item_.author
            }
        })

        itemList = items;


        var dropdownImages = document.getElementById("image-dropdown");
        emptyDropdownList();
        var i = 0;
        console.log(items[8]);
        items.forEach(function(_item, _index)
        {
            if(_index == 0)
            {
                dropdownImages.innerHTML +=
                    "<input type=\"radio\"  name=\"line-style\" id=\"line"+_index+"\" onclick=\"onRadioButtonClick(this.value, this.id)\"  value=" +_index+"  /><label id=\"radioLabel"+_index+"\"  for=\"line"+_index+"\"  style=\"background-image: url(' "+_item.thumb+" '); background-size: 150px;  \" ></label>"

            }
            else
            {

            dropdownImages.innerHTML +=
                "<input type=\"radio\" id=\"line"+_index+"\" name=\"line-style\" onclick=\"onRadioButtonClick(this.value, this.id)\" value=" +_index+"  /><label id=\"radioLabel"+_index+"\" for=\"line"+ _index+"\"  style=\"background-image: url(' "+_item.thumb+" '); background-size: 150px;  \" ></label>"

            }
        })

        itemList = items;
    }).catch(function (error) {
        console.error(error)
        // io3d.utils.ui.message.error('Sorry, something went wrong:\n\n' + JSON.stringify(error, null, 2))
    })


}

function addToScene (item, position) {

    //var uiMessage = io3d.utils.ui.message('Loading glTF from<br><a class="io3d-inspector-plugins___truncate-message" href="' + item.url + '" target="_blank">' + item.url + '</a>', 0)

    // add new entity to scene
    var newEntity = document.createElement('a-entity')

    newEntity.addEventListener('model-loaded', function (event) {

        //uiMessage.close()
        //io3d.utils.ui.message.success('Added<br><a class="io3d-inspector-plugins___truncate-message" href="' + item.url + '" target="_blank">' + item.url + '</a>')

        // center model to picking position
        var bb = new THREE.Box3().setFromObject(event.detail.model) // bounding box
        var size = new THREE.Vector3(Math.abs(bb.max.x - bb.min.x), Math.abs(bb.max.y - bb.min.y), Math.abs(bb.max.z - bb.min.z))
        position.set(
            position.x - bb.min.x - size.x / 2,
            -bb.min.y,
            position.z - bb.min.z - size.z / 2
        )

        newEntity.setAttribute('position', position.x + ' ' + position.y + ' ' + position.z)

        //callback()

    }, {once: true})

    newEntity.addEventListener('model-error', function (event) {

        console.log("error on the model maybe");
        //uiMessage.close()
        //io3d.utils.ui.message.error('Sorry: ' + event.detail.message + '<br/><a class="io3d-inspector-plugins___truncate-message" href="' + item.url + '" target="_blank">' + item.url + '</a>')

    }, {once: true})

    newEntity.setAttribute('gblock', item.url);
    newEntity.setAttribute("my-cursor-listener", "");
    
    var selected2BeRemoved = document.getElementsByClassName("selected");
    if(selected2BeRemoved[0] != undefined)
    {
        selected2BeRemoved[0].classList.remove("selected");
    }
    newEntity.classList.add("selected");
    newEntity.classList.add("affectedByEvents");

    document.querySelector('a-scene').appendChild(newEntity)
    return newEntity;

}

