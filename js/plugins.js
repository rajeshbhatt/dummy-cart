// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }

    // $.ajax({
    //   url: "http://jsonp.afeld.me/?url=https://api.myjson.com/bins/19ynm&callback=callbackFN ",
    //   context: document.body
    // }).done(function(res) {
    //     console.log('done');
    //   $( this ).addClass( "done" );
    // });

    var apiURL = "http://jsonp.afeld.me/?url=https://api.myjson.com/bins/19ynm&callback=callbackFN";
    //   $.getJSON( apiURL, {
    //     format: "json"
    //   })
    // .done(function( data ) {
    //     console.log('data');
    //   $.each( data.items, function( i, item ) {
    //     $( "<img>" ).attr( "src", item.media.m ).appendTo( "#images" );
    //     if ( i === 3 ) {
    //       return false;
    //     }
    //   });
    // });
$.ajax({
    type: "get",
    dataType: 'text',
    url: '/../assets/cart.json',
    crossDomain : true
})
    .done(function( data ) {
        console.log("done");
        var res = JSON.parse(data);
        var tmpl = $('#content-placeholder').html();
        var theTemplate = Handlebars.compile(tmpl);
        var theCompiledHtml = theTemplate(res);
        $('.content-placeholder').html('');
         $('.content-placeholder').html(theCompiledHtml);

         //
  //        var theTemplateScript = $("#example-template").html();

  // // Compile the template
  // var theTemplate = Handlebars.compile(theTemplateScript);

  // // This is the default context, which is passed to the template
  // var context = {
  //   people: [ 
  //     { firstName: 'Homer', lastName: 'Simpson' },
  //     { firstName: 'Peter', lastName: 'Griffin' },
  //     { firstName: 'Eric', lastName: 'Cartman' },
  //     { firstName: 'Kenny', lastName: 'McCormick' },
  //     { firstName: 'Bart', lastName: 'Simpson' }
  //   ]
  // };

  // // Pass our data to the template
  // var theCompiledHtml = theTemplate(context);

  // // Add the compiled html to the page
  // $(document.body).append(theCompiledHtml);//
    })
    .fail( function(xhr, textStatus, errorThrown) {
        alert(xhr.responseText);
        alert(textStatus);
    });

}());

// Place any jQuery/helper plugins in here.
