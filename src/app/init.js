$(document).ready(function () {
    // Initiating Materialize Features
    lazyLoad();
    $('.tooltipped').tooltip();
    $('.sidenav').sidenav();
    $('.tabs').tabs();
    $('select').formSelect();
    
    $(".tab").on('click', function(e){
        $('#contents').hide();
        lazyLoad();
    });

    /*
     * Find the closest html table
     * Get the content of first tr of the tbody
     * addTBody with the reference of the tbody and first tr
     */
    $(".tblButtonAdder").on('click', function(e){
        var closestTableTBody = $("#exp0"+this.id+"TBody");
        var closestTableTBodyBaseContent = closestTableTBody.find('tr:first').html();
        var tBodyContent = "<tr> "+ closestTableTBodyBaseContent +" </tr>";
        var requestedTableLength = (closestTableTBody.html().match(/<tr>/g) || []).length;

        addTBody(closestTableTBody,tBodyContent,requestedTableLength);
    });
    
});

function lazyLoad() {
    $('.progress').show(function(e){
        $('#contents').hide();
    }).delay(1500).fadeOut(function(ex){
        $('#contents').fadeIn();
    });
}

function addTBody(tbodyID, tBodyContent, tBodyLength){
    var tbody = '';

    if(tBodyContent.includes('type="radio"')){
        tBodyContent = tBodyContent.replace(/name="group1"/g, 'name="group'+(tBodyLength+1)+'"');
        console.log(tBodyContent);
    }

    tbody += tBodyContent;
    tbodyID.append(tbody);
}