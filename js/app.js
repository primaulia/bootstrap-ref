// DON'T IGNORE THE LINTER. CTRL + ALT + F to your rescue
// Always! start with $(document).ready command to start the DOM ready

$(document).ready(function ($) {
  // PROBLEM 1: Get all the TDs of the first row using parent (TRAVERSING DOWN)
  // select the first home
  var $firstHome = $('tr').eq(1)

  // get the children referencing the previous variables
  var $allTDinFirstHome = $firstHome.children()

  // Always test the output of your selection
  // console.log($firstHome.html(), $firstHome.children())
  console.log($allTDinFirstHome.eq(0).html())
  // END OF PROBLEM 1

  // PROBLEM 2: change the SQFT td html/text content

  // getting the last row => parent
  var $lastHome = $('tr').eq(3)
  var $lastHomeChild = $lastHome.children()

  // console.log('last home sqft is ' + $lastHomeChild.eq(1).text() )
  $lastHomeChild.eq(1).text('777')
  // console.log('last home sqft is now ' + $lastHomeChild.eq(1).text() )
  // END OF PROBLEM 2

  // PROBLEM 2b: select a specific tag from a parent's children (selecting button from a row)
  // uncomment the line below to see it
  // console.log($lastHomeChild.children('button'))
  // END OF PROBLEM 2b

  // PROBLEM 3: Add event listener to a button, change h1 content every click
  // event listener
  var $allButtons = $('button')

  // Signature of an event listener
  // jqueryObj.on( eventNameinString, callback )
  var $h1 = $('h1')
  $allButtons.on('click', btnClick)
  var counter = 0

  function btnClick () {
    // alert('button is clicked')
    counter += 1

    var $h2 = $('<h2>')
    $h2.text(counter)
    // $('body').prepend($h2)

    $h1.text('Lake Arrowhead Homes For Sale ' + counter)
  }
  // END OF PROBLEM 3

  // PROBLEM 4: DELEGATING event to an element, when an element did not exist yet

  // get the parents
  var $row = $('tbody')

  // Signature of event delegation
  // parentJqueryObject.on( eventNameinString, childrenSelector, callback )
  $row.on('click', 'button', function () {
    // console.log( $(this).parents('tr').html() )
    // console.log(this.parents)
    $(this).parents('tr').fadeOut(function () {
      $(this).remove()
    })

    // Past ignored problems, experiment as needed

    // alert('click from button inside the row')

    // get the button text, the one currently clicked
    // var textInsideTheButton = $(this).text()
    //
    // // create new button
    // var $newButton = $('<button>')
    //
    // // modify the text inside this new button
    // $newButton.text(textInsideTheButton)
    // $newButton.addClass('btn btn-lg btn-success')
    //
    // // append to ?? BODY
    // // $('body').append($newButton)
    // // $('h1').append($newButton)
    //
    // var $buttonParent = $(this).parents('tr')
    // console.log( $buttonParent.html() )

    // alert('button clicked')

    // get the parent 'tr' of this button?
  })
  // END OF PROBLEM 4

  // PROBLEM 5: Add new home from one object upon clicking "Add Home" button
  var $addHome = $('#addHome')
  var newHomeObj = {
    address: '27569 Cedarwood Drive',
    sf: '2,535',
    bedrooms: 3,
    baths: 2.5,
    price: '$496,500'
  }

  $addHome.on('click', addNewHome)

  function addNewHome () {
    // first we start to create a new parent for each cells first
    var $row = $('<tr>')

    // FIRST ITERATION: Add one by one using $.html method (Not a good practice)
    // var tds = '<td>' + newHomeObj.address + '</td>' +
    //           '<td>' + newHomeObj.sf + '</td>' +
    //           '<td>' + newHomeObj.bedrooms + '</td>' +
    //           '<td>' + newHomeObj.baths + '</td>' +
    //           '<td>' + newHomeObj.price + '</td>' +
    //           '<td><button class="btn btn-xs btn-danger">Remove</button>'
    // $row.html( tds )

    // SECOND ITERATION: Tried to use for loop + switch
    // for(var i = 0; i < 6; i++) {
    //   var $addNewTd = $('<td>')
    //
    //   switch (i) {
    //     case 0:
    //       $addNewTd.text(newHomeObj.address)
    //     break
    //     case 1:
    //       $addNewTd.text(newHomeObj.sf)
    //     break
    //     case 2:
    //       $addNewTd.text(newHomeObj.bedrooms)
    //     break
    //   }
    //
    //   $row.append($addNewTd)
    // }

    // Final iteration: Loop inside the object, and create new cell on each object properties
    for (var detail in newHomeObj) {
      var $cell = $('<td>')
      $cell.text(newHomeObj[detail])
      $row.append($cell)
    }

    $row.append('<td><button class="btn btn-xs btn-danger">Remove</button></td>')
    $('tbody').append($row)
  }
  // END OF PROBLEM 5

  // BONUS PROBLEM: Loop inside an array of objects, and add them one by one
  // Reference: the BREAKFAST & LUNCH Problems
  // var newHomes = [
  //   {address: '27569 Cedarwood Drive', sf: '2,535', bedrooms: 3, baths: 2.5, price: '$496,500'},
  //   {address: '316 Annandale Drive', sf: '1,326', bedrooms: 4, baths: 2, price: '$275,000'}
  // ]
})
