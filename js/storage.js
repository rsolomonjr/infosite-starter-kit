const form = document.getElementById('infosite_starter_form');


form.addEventListener('submit', function(e) {
 
   
   e.preventDefault(); // Prevent the default form submission behavior


  // SF-Number
  const sfnumber = document.getElementById('tracking_sfnumber').value;



     let appServer = json.app['app-server']['path']; 
    appServer = appServer.replace(/IS-template-22.10.5/g, sfnumber);
    
    let imageServer = json.app['image-server']['path']; 
    imageServer = imageServer.replace(/IS-template-22.10.5/g, sfnumber);
      

    json.tracking["SF-Number"] = sfnumber;

  json.tracking.brandName = document.getElementById('tracking_brandName').value;
  json.tracking.brandId  = document.getElementById('tracking_brandId').value;
  json.tracking.CP["tacticId"] = document.getElementById('tracking_CP_tcid').value;
  json.tracking.CP["activityId"] = document.getElementById('tracking_CP_activityId').value;


    // Get all input elements with the name "description"
  const descriptionInputs = document.getElementsByName("description");
  // Get all input elements with the name "first" or "second"
  const radioInputs = document.querySelectorAll("input[name='first'], input[name='second']");
  // Get all input elements with the name "page_url"
  const urlInputs = document.getElementsByName("page_url");

  // Define a multidimensional array to store the values
  const values = [];

  // Loop through all the "description" inputs and push their values to the array
  for (let i = 0; i < descriptionInputs.length; i++) {
  const descriptionValue = descriptionInputs[i].value;
  values.push([descriptionValue]);
  }

  // Loop through all the radio inputs and push their values to the array
  for (let i = 0; i < radioInputs.length; i++) {
  const radioValue = radioInputs[i].value;
  // Check if the array already contains an element for the current "description" input
  const index = i % descriptionInputs.length;
  if (values[index]) {
    values[index].push(radioValue);
  } else {
    values.push([null, radioValue]);
  }
  }


  // Loop through all the "page_url" inputs and add their values to the array
  for (let i = 0; i < urlInputs.length; i++) {
  const urlValue = urlInputs[i].value;
  // Check if the array already contains an element for the current "description" input and radio button
  const index = i % (descriptionInputs.length * 2);
  if (values[index]) {
    values[index].push(urlValue);
  } else {
    values.push([null, null, urlValue]);
  }
  }
  
 //Format the JSON 
  let jsonArticleAllPages = [];
  let jsonAllPages = [];

  
  function jsonPages(){
    for (let i = 0; i < Object.keys(values).length; i++){
      let value = values[i];
      let title = value[0];
      let url = value[1]; 
      
     
        let jsonPages = pageObjUpdate(i, title);
        jsonArticleAllPages.push(jsonPages);
        let navExternalPage = navExternalPages(i, title, url);
        jsonAllPages.push(navExternalPage);       

    }

    return [jsonArticleAllPages, {links:jsonAllPages}]

    
  }

  jsonPages();

  json.pages = jsonArticleAllPages;
  json.navigation = {links:jsonAllPages};


  // Get the text to replace from the input field
   let sponsorText = document.getElementById('sponsorship').value;

  // // Replace all occurrences of "Pharma Co." with the sponsor text
  json['medscape-header']['sponsored-message']['html-content'] = json['medscape-header']['sponsored-message']['html-content'].replace(/Pharma Co/g, sponsorText);


  // Polls

   // get the value of the number input element in the form
   var numberOfPolls = parseFloat(form.elements.form_ids.value);

   let questionnaire = []; 

   const qNaID = form.elements.poll_id.value;
     
   function createPollJson(num) {

    let polls = {
      "config-id": "poll" + num,
      "title": "Poll",
      "questionnaire-id": qNaID,
      "form-id": num,
      "ui-configs": {
        "question-numbers": {
          "enable": false,
          "text": "{{counter}}."
        },
        "select": {
          "label": true,
          "props": {
            "autoWidth": true,
            "variant": "standard"
          }
        },
        "textfield": {
          "label": true,
          "props": {
            "variant": "standard",
            "rows": 4
          }
        },
        "response-message": {
          "enable": false,
          "text": "Thank You"
        },
        "submit-button": {
          "label": "Submit"
        }
      }
    }

       return polls;
     
   }
 
  for(let i=1;i <= numberOfPolls; i++){
    let pollObject = createPollJson(i);
    questionnaire.push(pollObject);  
  }

  json.polls = questionnaire;


  // Videos

  const titleOfVideoInputs = document.getElementsByName("video_title");
  const thumbnailImageInputs = document.getElementsByName("video_thumbnail_image_name");
   const posterImageInputs = document.getElementsByName("video_poster_image_name");
   const videoDurationInputs = document.getElementsByName("video_duration");


  const videoThumbnails = [];
  const videoPosters = []; 
  for (let i = 0; i < titleOfVideoInputs.length; i++) {
    const titleOfVideoValue = titleOfVideoInputs[i].value;
    videoThumbnails.push([titleOfVideoValue]);
    videoPosters.push([titleOfVideoValue]);
  }

  for (let i = 0; i < thumbnailImageInputs.length; i++) {
    const thumbnailValue = thumbnailImageInputs[i].value;
    const index = i % thumbnailImageInputs.length;
    videoThumbnails[index].push(thumbnailValue);
  }

  for (let i = 0; i < posterImageInputs.length; i++) {
    const posterValue = posterImageInputs[i].value;
    const index = i % posterImageInputs.length;
    videoPosters[index].push(posterValue);
  }

  for (let i = 0; i < videoDurationInputs.length; i++) {
    const durationValue = videoDurationInputs[i].value;
    const index = i % videoDurationInputs.length;
    videoPosters[index].push(durationValue);
  }

  let jsonAllVideoThumbs = [];
  let jsonAllVideoPosters = [];


  let numberVideoThumbs = 1; 
  function allVideoThumbnails(){
    for (let i = 0; i < videoThumbnails.length; i++){
      let videoThumbnail = videoThumbnails[i];
      let videoTitle = videoThumbnail[0];
      let thumb = videoThumbnail[1]; 
      

        let videoThumbs = videoThumbnailUpdate(
          numberVideoThumbs, 
          sfnumber, 
          videoTitle, 
          thumb
        );
        jsonAllVideoThumbs.push(videoThumbs);  
        numberVideoThumbs++;
    }
    return jsonAllVideoThumbs;
  }

  let numberVideoPosters = 1; 
  function allVideoPosters(){
    for (let i = 0; i < videoPosters.length; i++){
      let videoPoster = videoPosters[i];
      let videoPosterTitle = videoPoster[0];
      let poster = videoPoster[1]; 
      let videoDuration = videoPoster[2]; 

        let videoMediaPosters = videoPosterUpdate(
          numberVideoPosters, 
          sfnumber, 
          videoPosterTitle, 
          poster, 
          videoDuration
        );
        jsonAllVideoPosters.push(videoMediaPosters);  
        numberVideoPosters++;
    }
    return jsonAllVideoPosters;
  }

  allVideoThumbnails();
  allVideoPosters();

  let playlists = json["media-player"]["playlists"];
  let playlist = playlists.find(p => p["config-id"] === "playlist-1");



  const titleOfAudioInputs = document.getElementsByName("audio_title");
  const audioThumbnailImageInputs = document.getElementsByName("audio_thumbnail_image_name");
  const audioPosterImageInputs = document.getElementsByName("audio_poster_image_name");
  const audioDurationInputs = document.getElementsByName("audio_duration");

  const allaudioThumbnails = [];
  const allaudioPosters = []; 
  for (let i = 0; i < titleOfAudioInputs.length; i++) {
    const titleOfAudioValue = titleOfAudioInputs[i].value;
    allaudioThumbnails.push([titleOfAudioValue]);
    allaudioPosters.push([titleOfAudioValue]);
  }

  for (let i = 0; i < audioThumbnailImageInputs.length; i++) {
    const thumbnailValue = audioThumbnailImageInputs[i].value;
    const index = i % audioThumbnailImageInputs.length;
    allaudioThumbnails[index].push(thumbnailValue);
  }

  for (let i = 0; i < audioPosterImageInputs.length; i++) {
    const audioposterValue = audioPosterImageInputs[i].value;
    const index = i % audioPosterImageInputs.length;
    allaudioPosters[index].push(audioposterValue);
  }

  for (let i = 0; i < audioDurationInputs.length; i++) {
    const audiodurationValue = audioDurationInputs[i].value;
    const index = i % audioDurationInputs.length;
    allaudioPosters[index].push(audiodurationValue);
  }

  let jsonAllAudioThumbs = [];
  let jsonAllAudioPosters = [];

  let numberaudioThumbs = 1; 
  function allAudioThumbnails(){
    for (let i = 0; i < allaudioThumbnails.length; i++){
      let audioThumbnail = allaudioThumbnails[i];
      let audioTitle = audioThumbnail[0];
      let audioThumb = audioThumbnail[1]; 
      

        let audioThumbs = audioThumbnailUpdate(
          numberaudioThumbs, 
          sfnumber, 
          audioTitle, 
          audioThumb
        );
        jsonAllAudioThumbs.push(audioThumbs);  
        numberaudioThumbs++;
    }
    return jsonAllAudioThumbs;
  }

  let numberaudioPosters = 1; 
  function allAudioPosters(){
    for (let i = 0; i < allaudioPosters.length; i++){
      let audioPosterVar = allaudioPosters[i];
      let audioPosterTitle = audioPosterVar[0];
      let audioPosterImg = audioPosterVar[1]; 
      let audioDuration = audioPosterVar[2]; 

        let audioMediaPosters = audioPosterUpdate(
          numberaudioPosters, 
          sfnumber, 
          audioPosterTitle, 
          audioPosterImg, 
          audioDuration
        );
        jsonAllAudioPosters.push(audioMediaPosters);  
        numberaudioPosters++;
    }
    return jsonAllAudioPosters;
  }

  allAudioThumbnails();
  allAudioPosters();

  playlist["playlist-items"].push(jsonAllVideoThumbs, jsonAllAudioThumbs);
  json['media-player'].medias = [jsonAllVideoPosters, jsonAllAudioPosters];
  
  // Print the updated data

    document.getElementById('jsonOutput').innerHTML = JSON.stringify(
      json,
      null, 
      "\t"
    );
});