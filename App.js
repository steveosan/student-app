$(document).ready(function() {
    $("button#addIngred").on("click", addIngredient);
    $("button#sortByName").on("click", sortByName);
});

function sortIngreds(a, b)
{
    if (a.name < b.name)
        return -1;
    else if (a.name > b.name)
        return 1;
    else
        return 0;
}

let recipe = [];

function sortByName()
{
    recipe.sort(sortIngreds);

    

clearAndPrint();
}

function clearAndPrint()
{
    // clear paragraph containing recipe
    $("p#recipe").empty();
    $("p#output").empty();
    counter = 0;
//    loop through recipe array
    for(let anIngred of recipe)
//       append each ingred to paragraph
    {   
        counter++;
        let prettyPrint = `${counter})${anIngred.name} ${anIngred.lName} ${anIngred.pGrade}%  a ${anIngred.letterGrade}<br>` ;
        // $("p#recipe").append(prettyPrint);
        $("p#output").append(prettyPrint);
    }
}



// on page load, the add button must run a function to:

function addIngredient() {
//    get name from box
    let iName = $("input#name").val();
    let lName = $("input#lName").val();
//    get qty from box and parse to float
    let iQty = parseFloat($("input#qty").val());
//    get unit of measure from dropdown
    let pEarned = parseFloat($("input#pEarned").val());
    let pGrade = ((iQty / pEarned) * 100).toFixed(2)

//    create an ingredient object
    var letterGrade;
    if (pGrade >= 90) {
        letterGrade = "A"

    }else if (pGrade >= 80 && pGrade < 90){
        letterGrade ="B"

    }else if (pGrade >= 70 && pGrade < 79){
        letterGrade ="C"

    }else if (pGrade >= 60 && pGrade < 69){
        letterGrade ="D"
    }else if (pGrade <= 59){letterGrade ="F"}

    let ingredient = {   
      name: iName,
      lName : lName,
      qty: iQty,
      pGrade: pGrade,
      letterGrade: letterGrade
    };

//    push object into recipe array
    recipe.push(ingredient);

    clearAndPrint();

}