$(document).ready(function () {
  // select the first home

  var $h1 = $('h1')

  // get the parents
  var $firstHome = $('tr').eq(1)

  // get the children
  var $allTDinFirstHome = $firstHome.children()

  // console.log($firstHome.html(), $firstHome.children())
  // console.log($allTDinFirstHome.eq(0).html())

  // change the children html/text content

  // getting the last row => parent
  var $lastHome = $('tr').eq(3)
  var $lastHomeChild = $lastHome.children()

  // console.log($lastHomeChild.children('button'))
  // console.log('last home sqft is ' + $lastHomeChild.eq(1).text() )

  // console.log('last home sqft is now ' + $lastHomeChild.eq(1).text() )

  // event listener
  var $allButtons = $('button')

  // jqueryObj.on( eventNameinString, callback )
  $allButtons.on('click', btnClick)
  var counter = 0

  function btnClick () {
    // alert('button is clicked')
    counter += 1

    var $h2 = $('<h2>')
    $h2.text(counter)
    // $('body').prepend($h2)

    $h1.text('Lake Arrowhead Homes For Sale ' + counter)
    $lastHomeChild.eq(1).text('777')
  }

  var $row = $('tbody')

  // console.log( '$rowButton is ' + typeof $rowButton )

  $row.on('click', 'button', function () {
    // console.log( $(this).parents('tr').html() )
    // console.log(this.parents);
    $(this).parents('tr').fadeOut(function() {
      $(this).remove()
    })

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

    // alert('button clicked');

    // get the parent 'tr' of this button?

  })

  //
  // var prima = {
  //   name: 'Prima',
  //
  //   getName: function() {
  //     console.log( 'this object name is ' + this.name )
  //   }
  // }

  var $addHome = $('#addHome')
  var newHomeObj = {
    address: "27569 Cedarwood Drive",
    sf: "2,535",
    bedrooms: 3,
    baths: 2.5,
    price: "$496,500"
  };

  var newHomes = [
    {address: "27569 Cedarwood Drive", sf: "2,535", bedrooms: 3, baths: 2.5, price: "$496,500"},
    {address: "316 Annandale Drive", sf: "1,326", bedrooms: 4, baths: 2, price: "$275,000"},
  ]

  $addHome.on('click', addNewHome)

  function addNewHome () {
    var $row = $('<tr>')

    // var tds = '<td>' + newHomeObj.address + '</td>' +
    //           '<td>' + newHomeObj.sf + '</td>' +
    //           '<td>' + newHomeObj.bedrooms + '</td>' +
    //           '<td>' + newHomeObj.baths + '</td>' +
    //           '<td>' + newHomeObj.price + '</td>' +
    //           '<td><button class="btn btn-xs btn-danger">Remove</button>'
    // $row.html( tds );

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

    for (var detail in newHomeObj) {
      var $cell = $('<td>')
      $cell.text(newHomeObj[detail])
      $row.append( $cell )
    }

    $row.append('<td><button class="btn btn-xs btn-danger">Remove</button></td>')
    $('tbody').append($row)
  }
})
