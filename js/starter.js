$('input[type="radio"]').click(function(){
  var $radio = $(this);
  
  // if this was previously checked
  if ($radio.data('waschecked') == true)
  {
      $radio.prop('checked', false);
      $radio.data('waschecked', false);
  }
  else
      $radio.data('waschecked', true);
  
  // remove was checked from other radios
  $radio.siblings('input[name="radio"]').data('waschecked', false);

});

function changePages(){
  let selector = document.getElementsByName("number_of_pages")[0];
  let numberSelected = selector[selector.selectedIndex].value;

 
  let number = 1;
  let descriptionTitle = "Homepage";

  while (number <= numberSelected) {
    descriptionTitle +=
      '<div><div><input type="text" id="description" name="description" placeholder="page_title" value="Homepage" required/></div><div id="radio_button_set' +
      number.toString() +
      '"><div><input type="radio" name="radio' +
      number.toString() +
      '" class="radio" value="internal" checked></div><div><input type="radio"  name="radio' +
      number.toString() +
      '" class="radio" value="external"></div></div><div><input type="url" id="page_url" name="page_url" placeholder="page_url" /></div></div>';
    number++;
  }

  document.getElementById("page_titles_table").innerHTML = descriptionTitle;
}

function getNumberOfVideos() {
  const videoTable =
    "<div class='media_table'><div><input type='text' id='video_title' name='video_title' placeholder='video_title' value='Title'/></div><div><input type='text' id='video_thumbnail_image_name' name='video_thumbnail_image_name' placeholder='video_thumbnail_image_name' value='mediaFPO.png'/></div><div><input type='text' id='video_poster_image_name' name='video_poster_image_name' placeholder='video_poster_image_name' value='mediaFPO.png'/></div><div><input type='text' id='video_duration' name='video_duration' placeholder='video_duration' value='00:30'  /></div></div>";
  const errorText = "<dir class='errorText'>Please enter a number</dir>";

  var selector = document.getElementById("number_of_videos");
  
    var value = parseInt(selector.value);

    if (isNaN(value) || null) {
      document.getElementById("videos_table").innerHTML = errorText;
    } else {
      let arr = Array.from(new Array(value), (_, index) => index + 1);

      arr = arr.map((i) => "Video " + i);

      let videosTable = arr.map(function (element) {
        return `<div>${element}</div>`.concat(videoTable);
      });
      let videosOutTable = videosTable.join("");
      document.querySelector("#videos_table").innerHTML = videosOutTable;
    }
  }

function getNumberOfAudio() {
  const audioTable =
    "<div class='media_table'><div><input type='text' id='audio_title' name='audio_title' placeholder='audio_title' value='Title'/></div><div><input type='text' id='audio_thumbnail_image_name' name='audio_thumbnail_image_name' placeholder='audio_thumbnail_image_name' value='mediaFPO.png'/></div><div><input type='text' id='audio_poster_image_name' name='audio_poster_image_name' placeholder='audio_poster_image_name' value='mediaFPO.png' /></div><div><input type='text' id='audio_duration' name='audio_duration' placeholder='audio_duration' value='05:48' /></div></div>";
  const errorText = "<dir class='errorText'>Please enter a number</dir>";

  var selector = document.getElementById("number_of_audios");
  var value = parseInt(selector.value);

  if (isNaN(value) || null) {
    document.getElementById("audios_table").innerHTML = errorText;
  } else {
    let arr = Array.from(new Array(value), (_, index) => index + 1);

    arr = arr.map((i) => "Audio " + i);

    let audiosTable = arr.map(function (element) {
      return `<div>${element}</div>`.concat(audioTable);
    });
    let audiosOutTable = audiosTable.join("");
    document.querySelector("#audios_table").innerHTML = audiosOutTable;
  }
}

