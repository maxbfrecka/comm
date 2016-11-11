$(document).ready(function(){



// a try at fading the thread in
/*
  $("#fadetry").click(function(){
    $("#post-table").fadeIn("fast");
    $("#fadetry").fadeOut("fast");
  });
*/

//generate the randID//
//must ensure that it does not repeat by searching database
function make_randID()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for( var i=0; i < 8; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

//very basic random color generator
function randomRGBcolor(){
  function randCol(){
    var col =  Math.floor(Math.random() * 255);
    return col;
  }
  var first = randCol()
  var second = randCol()
  var third = randCol()
  var result = ''
  result = `rgb(${first},${second},${third})`
  return result
};

//
  
  $('form').on('upload'), function(){

  }


  $('form').on('submit', function(){

      var post = $('form textarea');
      
      var post_time = function(){

        var date = new Date();

        //day
        var day = new Array();
        day[0] = "SUN";
        day[1] = "MON";
        day[2] = "TUE";
        day[3] = "WED";
        day[4] = "THU";
        day[5] = "FRI";
        day[6] = "SAT";
        var dayday = day[date.getDay()];

        //returns hour minutes seconds with zero added for 2 digits
        
        function addZero(i) {
          if (i < 10) {
           i = "0" + i;
          }
          return i;
        }      

        var hour = addZero(date.getHours());
        var minutes = addZero(date.getMinutes());
        var seconds = addZero(date.getSeconds());

        //month
        var month = new Array();
        month[0] = "01";
        month[1] = "02";
        month[2] = "03";
        month[3] = "04";
        month[4] = "05";
        month[5] = "06";
        month[6] = "07";
        month[7] = "08";
        month[8] = "09";
        month[9] = "10";
        month[10] = "11";
        month[11] = "12";
        var monthmonth = month[date.getMonth()];

        //day of month
        var dayofmonth = date.getDate();

        //2 digit year
        var year = date.getFullYear().toString().substr(2,2);

        var fulltime = dayday + ':' + monthmonth + dayofmonth + year + ':' + hour + minutes;

        return fulltime;
      }

//convert time into new style and data


      var randomID = make_randID();

// span IDs
      var randomID1 = randomID + "1";
      var randomID2 = randomID + "2";
      var randomID3 = randomID + "3";
      var randomID4 = randomID + "4";
      var randomID5 = randomID + "5";
      var randomID6 = randomID + "6";
      var randomID7 = randomID + "7";
      var randomID8 = randomID + "8";

// text for the CSS split into letters
      var rID1 = randomID.charAt(0);
      var rID2 = randomID.charAt(1);
      var rID3 = randomID.charAt(2);
      var rID4 = randomID.charAt(3);
      var rID5 = randomID.charAt(4);
      var rID6 = randomID.charAt(5);
      var rID7 = randomID.charAt(6);
      var rID8 = randomID.charAt(7);
      var rID1tc = randomRGBcolor();
      var rID2tc = randomRGBcolor();
      var rID3tc = randomRGBcolor();
      var rID4tc = randomRGBcolor();
      var rID5tc = randomRGBcolor();
      var rID6tc = randomRGBcolor();
      var rID7tc = randomRGBcolor();
      var rID8tc = randomRGBcolor();

      var com = {
        post: post.val(), 
        time: post_time, 
        randID: randomID, 
        rID1: rID1, rID2: rID2, rID3: rID3, rID4: rID4, rID5: rID5, rID6: rID6, rID7: rID7, rID8: rID8,
        rID1tc: rID1tc, rID2tc: rID2tc, rID3tc: rID3tc, rID4tc: rID4tc,
        rID5tc: rID5tc, rID6tc: rID6tc, rID7tc: rID7tc, rID8tc: rID8tc
      };






      



      $.ajax({
        type: 'POST',
        url: '/commune',
        data: com,
        success: function(data){

          location.reload();

        }
      });



      return false;

  });

//jquery for the delete process
/*
  $('div.post').on('click', function(){
      var post = $(this).text().replace(/ /g, "-");
      $.ajax({
        type: 'DELETE',
        url: '/commune/' + post,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });
  });
*/

});
