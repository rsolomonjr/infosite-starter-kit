$('input[type="radio"][name^="radio/[0-9]+/"]').click(function () {
  // Uncheck all radio buttons
  $('input[type="radio"][name^="radio/[0-9]+/"]').prop("checked", false);

  // Check the clicked radio button
  $(this).prop("checked", true);
});

$('input[type="radio"][name^="radioPoll"]').click(function () {
  // Uncheck all radio buttons
  $('input[type="radio"][name^="radioPoll"]').prop("checked", false);

  // Check the clicked radio button
  $(this).prop("checked", true);
});

$('input[type="radio"][name^="radioAccordion"]').click(function () {
  // Uncheck all radio buttons
  $('input[type="radio"][name^="radioAccordion"]').prop("checked", false);

  // Check the clicked radio button
  $(this).prop("checked", true);
});

function changePages() {
  let selector = document.getElementsByName("number_of_pages")[0];
  let numberSelected = selector[selector.selectedIndex].value;

  let number = 1;
  let descriptionTitle = "";

  while (number <= numberSelected) {
    descriptionTitle +=
      '<div><div><input type="text" id="description" name="description" placeholder="Homepage" required/></div><div id="radio_button_set' +
      number.toString() +
      '"><div><input type="radio" name="radio' +
      number.toString() +
      '" class="radio" value="internal"></div><div><input type="radio"  name="radio' +
      number.toString() +
      '" class="radio" value="external"></div></div><div><input type="url" id="page_url" name="page_url" placeholder="page_url" /></div></div>';
    number++;
  }

  document.getElementById("page_titles_table").innerHTML = descriptionTitle;
}

function getNumberOfVideos() {
  var selector = document.getElementById("number_of_videos");

  var value = parseInt(selector.value);

  let arr = Array.from(new Array(value), (_, index) => index + 1);

  arr = arr.map((i) => "Video " + i);

  let videoTable = (element) => {
    return (
      '<div class="media_table"><div><input type="text" id="video_title" name="video_title" value="' +
      element +
      '"/></div><div><input type="text" id="video_thumbnail_image_name" name="video_thumbnail_image_name" value="mediaFPO.png"/></div><div><input type="text" id="video_poster_image_name" name="video_poster_image_name" value="mediaFPO.png"/></div><div><input type="text" id="video_duration" name="video_duration" value="00:30" /></div><div><input type="text" id="video__url" name="video__url" value="/delivery/aws/a8/4e/a84e7cd9-a7ed-34fc-8215-4e5f32a87c6d/FPOv1_640x480_1_,4500k,4500k-mbr,4500k-mbr10k,3000k,2500k,1000k,750k,450k,a96k,.mp4" /></div></div>'
    );
  };

  let videosTable = arr.map((element) => {
    return `<div>${element}</div>`.concat(videoTable(element));
  });

  let videosOutTable = videosTable.join("");
  document.querySelector("#videos_table").innerHTML = videosOutTable;
}

function getNumberOfAudio() {

  var selector = document.getElementById("number_of_audios");
  var value = parseInt(selector.value);

  let arr = Array.from(new Array(value), (_, index) => index + 1);

  arr = arr.map((i) => "Audio " + i);

  let audioTable = (element) => {
    return (
      '<div class="media_table"><div><input type="text" id="audio_title" name="audio_title" value="' +
      element +
      '"/></div><div><input type="text" id="audio_thumbnail_image_name" name="audio_thumbnail_image_name" value="mediaFPO.png"/></div><div><input type="text" id="audio_poster_image_name" name="audio_poster_image_name" value="mediaFPO.png"/></div><div><input type="text" id="audio_duration" name="audio_duration" value="05:48" /></div><div><input type="text" id="audio__url" name="audio__url" value="/delivery/d8/8d/d88d89b7-b333-4374-934d-5c0b57087d18/267440_ITP_S2_Ep1_V4_Approved_2018-12-10_,4500k,a96k,1000k,750k,3000k,400k,2500k,.mp4" /></div></div>'
    );
  };

  let audiosTable = arr.map((element) => {
    return `<div>${element}</div>`.concat(audioTable(element));
  });

  let audiosOutTable = audiosTable.join("");
  document.querySelector("#audios_table").innerHTML = audiosOutTable;
}
