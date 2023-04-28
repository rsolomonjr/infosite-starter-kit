
/* INFOSITE JSON SKELETON*/
let json = {
	"app": {
		"app-server": {
			"path": "/infosites/IS-template-22.10.5"
		},
		"image-server": {
			"path": "/pi/sites/infosite/IS-template-22.10.5"
		}
	},
	"tracking": {
		"RTS-timer": 5,
		"SF-Number": "123456.25",
		"brandName": "Medscape",
		"brandId": "3001",
		"productName": "infosite",
		"productId": "19",
		"partnerCreativeId": "",
		"CP": {
			"appName": "infosite",
			"activityId": "82043",
			"activityName": "infosite",
			"tacticId": "69420"
		}
	},
	"templates": [{
		"name": "default",
		"type": "",
		"nav-anchor": "",
		"modal": {
			"enable": false,
			"config-id": "indications"
		},
		"indications": {
			"path": "",
			"header": "",
			"article": false,
			"drawer": false
		},
		"isi": {
			"path": "/templates/isi",
			"header": "<span id='isi'>Important Safety Information</span>",
			"article": true,
			"drawer": true
		},
		"header": {
			"path": "/templates/header"
		},
		"footer": {
			"path": "/templates/footer"
		},
		"side-drawer": {
			"path": "/templates/side-drawer"
		},
		"classes": {
			"main-content": "",
			"navigation": "",
			"article": ""
		}
	}],
	"pages": [],
	"navigation": {},
	"medscape-header": {
		"container": {
			"className": "",
			"styles": ""
		},
		"logo": {
			"className": "",
			"styles": ""
		},
		"sponsored-message": {
			"html-content": "Developed under the direction and sponsorship of <span class='nobr'>Pharma Co.</span>",
			"className": "",
			"styles": ""
		}
	},
	"side-drawer": {
		"anchor": "right"
	},
	"isi": {
		"article": {

			"intersection-observer": {
				"enable": true,
				"rootMargin": "0px 0px 0px 0px"
			},
			"classes": {
				"intersection-observer": "",
				"head": "",
				"html-content": ""
			}
		},
		"drawer": {
			"open": false,
			"classes": {
				"drawer-content": "",
				"head": "",
				"head-container": ""
			},
			"accept": {
				"enable": false,
				"button": ""
			},
			"auto-close": {
				"enable": false,
				"timer": 2000
			},
			"auto-scroll": {
				"enable": false,
				"speed": 100
			},
			"buttons": {
				"expand": "",
				"collapse": ""
			}
		}
	},
	"polls": [],
	"media-player": {
		"playlists": [{
			"config-id": "playlist-1",
			"bookmark": {
				"enable": false,
				"notification": {
					"enable": false,
					"content": "You last viewed this program on<br>{{date}}",
					"display-timer": 2000
				}
			},
			"playlist-items": [],
			"ui-configs": {
				"playlist-item": {
					"classes": {
						"root": "",
						"thumbnail-image": "",
						"meta-info": ""
					},
					"play-tag": {
						"playing": {
							"enable": true,
							"html-text": "NOW PLAYING"
						},
						"played": {
							"enable": true,
							"html-text": "WATCHED"
						}
					},
					"duration": {
						"enable": true
					}
				},
				"carousel": {
					"adaptiveHeight": false,
					"arrows": true,
					"accessibility": false,
					"centerMode": false,
					"centerPadding": "0px",
					"className": "",
					"dots": false,
					"draggable": false,
					"easing": "",
					"fade": false,
					"focusOnSelect": false,
					"initialSlide": 0,
					"infinite": false,
					"lazyLoad": false,
					"slidesToShow": 3,
					"slidesToScroll": 3,
					"speed": 500,
					"swipeToSlide": true,
					"vertical": false,
					"responsive": [{
							"breakpoint": 1280,
							"settings": {
								"vertical": false,
								"slidesToShow": 4,
								"slidesToScroll": 1
							}
						},
						{
							"breakpoint": 400,
							"settings": {
								"vertical": false,
								"slidesToShow": 2,
								"slidesToScroll": 2
							}
						}
					]
				}
			}
		}],
		"medias": []
		},
		"carousel": [],
		"formulary": {
			"path": ""
		},
		"gift-manager": {
			"promo-activity-id": "",
			"package-id": "",
			"form": {
				"emailHide": false,
				"officeRoadHide": false,
				"officeCityHide": false,
				"stateHide": false,
				"zipHide": false,
				"countryHide": false
			}
		},
		"zoom-images": [],
		"uld-banner": {
			"enable": false,
			"html-content": "",
			"classes": {
				"uld-drawer": "",
				"uld-drawer-paper": "",
				"uld-banner": "",
				"html-content": "No ULD-banner on US demo",
				"buttons": ""
			},
			"buttons": {
				"accept": "",
				"decline": "",
				"classes": {
					"buttons-flex-container": "",
					"accept": "",
					"decline": ""
				}
			}
		},
		"resources": [],
		"additional-resources": [],
		"share-widgets": [],
		"twitter-timeline": {
			"account-name": "",
			"tweet-limit": 3,
			"chrome": {
				"noheader": true,
				"nofooter": true,
				"noborders": false,
				"noscrollbar": false,
				"transparent": true
			}
		},
		"consult-widget": [],
		"consult-ad": {
			"title": "",
			"items": []
		},
		"comments": [],
		"media-slides": [],
		"accordion": [{
			"config-id": "accordion-1",
			"index": 1,
			"header": {
				"image": {
					"enable": true,
					"src": "{{imageServer.host}}/pi/sites/infosite/IS-template-22.10.5/images/template/accordionArrow.png"
				},
				"html-content": "<h3>Accordion Example</h3>",
				"buttons": {
					"expand": "",
					"collapse": ""
				}
			}
		}],
		"modal": []
};

// 
let jsonTracking = {
  "tracking": {
		"RTS-timer": 5,
		"SF-Number": "123456.25",
		"brandName": "Medscape",
		"brandId": "3001",
		"productName": "infosite",
		"productId": "19",
		"partnerCreativeId": "",
		"CP": {
			"appName": "infosite",
			"activityId": "82043",
			"activityName": "infosite",
			"tacticId": "69420"
		}
	}
};


let selector = document.getElementsByName("number_of_pages")[0];

function changePages() {
  let numberSelected = parseInt(selector[selector.selectedIndex].value);

  let number = 1;
  let descriptionTitle = "";
 
    while( number <= numberSelected) {
      descriptionTitle +=
        '<div id="page' +
        number +
        '"><div><input type="text" name="description" placeholder="page_title" value="Homepage"/></div><div id="radioButtons' +
        number.toString() +
        '"><div><input type="radio" name="radio' +
        number.toString() +
        '" class="radio" value="first" checked required></div><div><input type="radio"  name="radio' +
        number.toString() +
        '" class="radio" value="second" required></div></div><div><input type="text" name="page_url" placeholder="page_url" /></div></div>';
      number++;
    }
  
  document.getElementById("page_titles_table").innerHTML = descriptionTitle;
}


  function isTitleCase(text) {
    // Check if each word starts with an uppercase letter and the rest are lowercase
    if (/^([A-Z][a-z]*\s)*[A-Z][a-z]*$/.test(text)) {
      return true;
    }
    return false;
  }


function pageObjUpdate(num, value){
  let route = "";
  let path = "";
  if(num == 0){
    route = "";
    path = "home";
  }else{
    route = "isarticle-"+num;
    path = "article-"+num;
  }
  
 
    let page = {
      "route": "/"+route,
      "path": "/articles/"+path,
      "template": "default",
      "meta-data": {
        "title": value,
        "titleTag": "Information from Industry",
        "description": value
      }
    }
    return page;
  
  
}

function navExternalPages(num, value, url){

    let link = {
      "label": value,
      "url": "/",
      "target": "_self",
      "module": "RouterLink"
    }

    let externalLink = {
      "label": value,
      "url": url,
      "target": "_self",
      "module": "HtmlContentLink"
    }

    if(num != 0 && url == ""){
      link = {
        "label": value,
        "url": "/isarticle-"+num,
        "target": "_self",
        "module": "RouterLink"
      }

    } else if (num != 0 && url !== ""){
      link = externalLink;
    }
      return link;
}


let polls = {
  "config-id": "test",
  "title": "Poll",
  "questionnaire-id": "60635",
  "form-id": "1",
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


function videoThumbnailUpdate(num, sf, videoTitleName, thumbnail){

  let videoThumbnail = {
    "media-id": "video"+num,
    "title": videoTitleName,
    "thumbnail": `/pi/sites/infosite/${sf}/images/template/${thumbnail}`,
    "description": videoTitleName
  }

  return videoThumbnail;
} 

function videoPosterUpdate(numPoster, sfNumber, videoPosterTitleName, posterName, videoTime){

  let videoPoster = {
    "config-id": "video"+numPoster,
    "media": {
      "title": videoPosterTitleName,
      "medium": "video",
      "autoplay": false,
      "source": "/delivery/aws/a8/4e/a84e7cd9-a7ed-34fc-8215-4e5f32a87c6d/FPOv1_640x480_1_,4500k,4500k-mbr,4500k-mbr10k,3000k,2500k,1000k,750k,450k,a96k,.mp4",
      "poster": `/pi/sites/infosite/${sfNumber}/images/template/${posterName}`,
      "duration": videoTime,
      "ccFileRoot": "",
      "ccInfo": []
    },
    "html-title": {
      "enable": true,
      "title": videoPosterTitleName
    },
    "controls": {
      "fullscreen": true

    }
  }

  return videoPoster;

}




function audioThumbnailUpdate(num, sfAudioNum, audioTitleName, thumbnail){

  let audioThumbnail = {
    "media-id": "audio"+num,
    "title": audioTitleName,
    "thumbnail": `/pi/sites/infosite/${sfAudioNum}/images/template/${thumbnail}`,
    "description": audioTitleName
  }

  return audioThumbnail;
} 

function audioPosterUpdate(numAudioPoster, sfAudioNumber, audioPosterTitleName, audioPosterName, audioTime){

  let audioPoster = {
    "config-id": "audio"+numAudioPoster,
    "media": {
      "title": audioPosterTitleName,
      "medium": "audio",
      "autoplay": true,
      "source": "/delivery/d8/8d/d88d89b7-b333-4374-934d-5c0b57087d18/267440_ITP_S2_Ep1_V4_Approved_2018-12-10_,4500k,a96k,1000k,750k,3000k,400k,2500k,.mp4",
      "poster": `/pi/sites/infosite/${sfAudioNumber}/images/template/${audioPosterName}`,
      "duration": audioTime,
      "ccFileRoot": "",
      "ccInfo": []
    },
    "html-title": {
      "enable": true,
      "title": audioPosterTitleName
    },
    "controls": {
      "fullscreen": false

    }
  }

  return audioPoster;

}


// ONSUBMIT BEGINS HERE


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
      
      if(isTitleCase(title)){
        let jsonPages = pageObjUpdate(i, title);
        jsonArticleAllPages.push(jsonPages);
          let navExternalPage = navExternalPages(i, title, url);
          jsonAllPages.push(navExternalPage);       
      } else {
        alert("Please enter a title that is title case.")
      }
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



