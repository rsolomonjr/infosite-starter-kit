import json
import re
import zipfile
from js2py import EvalJs

# Get the form element by id
form = document.getElementById("infosite_starter_form")
form.addEventListener("submit", lambda e: None)

# Get the input elements by id
sfnumber = document.getElementById("tracking_sfnumber").value
brandName = document.getElementById("tracking_brandName").value
brandId = document.getElementById("tracking_brandId").value
tcid = document.getElementById("tracking_CP_tcid").value
activityId = document.getElementById("tracking_CP_activityId").value
descriptionInputs = document.getElementsByName("description")
radioInputs = document.querySelectorAll("input[type='radio']:checked")
urlInputs = document.getElementsByName("page_url")
sponsorText = document.getElementById("sponsorship").value
pollNoCheckbox = document.getElementById("poll-no")
qNaID = form.elements.poll_id.value
titleOfVideoInputs = document.getElementsByName("video_title")
thumbnailImageInputs = document.getElementsByName("video_thumbnail_image_name")
posterImageInputs = document.getElementsByName("video_poster_image_name")
videoDurationInputs = document.getElementsByName("video_duration")
videoFragmentURLInput = document.getElementsByName("video__url")
titleOfAudioInputs = document.getElementsByName("audio_title")
audioThumbnailImageInputs = document.getElementsByName("audio_thumbnail_image_name")
audioPosterImageInputs = document.getElementsByName("audio_poster_image_name")
audioDurationInputs = document.getElementsByName("audio_duration")
audioFragmentURLInput = document.getElementsByName("audio__url")
accordionNoCheckbox = document.getElementById("accordion-no")

# Prevent the default form submission behavior
e.preventDefault()

# Define a function to check if a string is null or empty
def isStringNullOrEmpty(str):
    return str is None or str.strip() == ""

# Define a function to check if a string is in title case
def isTitleCase(str):
    return str.istitle()

# Define a function to check if a URL is valid
def isValidURL(url):
    return re.match(r"http(s)?://", url) is not None

# Define a function to check if a string is a valid SF-Number
def testSFNumber(sfnumber):
    return re.match(r"\d{6}\.\d{2}", sfnumber) is not None

# Define a function to check if a string is a valid brand name
def isValidBrandName(brandName):
    return re.match(r"^[A-Z][A-Za-z0-9]*$", brandName) is not None

# Define a function to check if a string is a valid department ID
def isValidDepartmentID(brandId):
    return re.match(r"^\d{4}$", brandId) is not None

# Define a function to check if a string is a valid tactic ID
def isValidTacticID(tcid):
    return re.match(r"^\d{5,6}$", tcid) is not None

# Define a function to check if a string is a valid promo activity ID
def isValidPromoID(activityId):
    return re.match(r"^\d{5,6}$", activityId) is not None

# Define a function to check if a string is a valid sponsor text
def isValidPharma(sponsorText):
    return re.match(r"^[A-Za-z]+$", sponsorText) is not None

# Define a function to check if a string is a valid poll ID
def isValidPollID(qNaID):
    return re.match(r"^\d{1,5}$", qNaID) is not None

# Define a function to check if a string is a valid image file
def isImageFile(imageFile):
    return re.match(r".*\.(png|jpg|jpeg)$", imageFile) is not None

# Define a function to check if a string is a valid media length
def isValidMediaLength(mediaLength):
    return re.match(r"^\d{2}:\d{2}$", mediaLength) is not None

# Define a function to check if a string is a valid fragment URL
def isValidFragmentURL(fragmentURL):
    return re.match(r"^\d{2}:\d{2}$", fragmentURL) is not None

# Define a function to update the page object
def pageObjUpdate(i, title):
    return {
        "meta-data": {
            "title": title
        }
    }

# Define a function to update the nav external pages
def navExternalPages(i, title, radio, url):
    return {
        "label": title,
        "url": url,
        "external": radio == "external"
    }

# Define a function to update the video thumbnail
def videoThumbnailUpdate(numberVideoThumbs, sfnumber, videoTitle, thumb):
    return {
        "config-id": f"video-thumb-{numberVideoThumbs}",
        "title": videoTitle,
        "image": {
            "src": f"{{imageServer.host}}/pi/sites/infosite/{sfnumber}/images/template/{thumb}"
        }
    }

# Define a function to update the video poster
def videoPosterUpdate(numberVideoPosters, sfnumber, videoPosterTitle, poster, videoDuration, videoFragmentURL):
    return {
        "config-id": f"video-poster-{numberVideoPosters}",
        "title": videoPosterTitle,
        "image": {
            "src": f"{{imageServer.host}}/pi/sites/infosite/{sfnumber}/images/template/{poster}"
        },
        "duration": videoDuration,
        "fragment-url": videoFragmentURL
    }

# Define a function to update the audio thumbnail
def audioThumbnailUpdate(numberaudioThumbs, sfnumber, audioTitle, audioThumb):
    return {
        "config-id": f"audio-thumb-{numberaudioThumbs}",
        "title": audioTitle,
        "image": {
            "src": f"{{imageServer.host}}/pi/sites/infosite/{sfnumber}/images/template/{audioThumb}"
        }
    }

# Define a function to update the audio poster
def audioPosterUpdate(numberaudioPosters, sfnumber, audioPosterTitle, audioPosterImg, audioDuration, audioFragmentURL):
    return {
        "config-id": f"audio-poster-{numberaudioPosters}",
        "title": audioPosterTitle,
        "image": {
            "src": f"{{imageServer.host}}/pi/sites/infosite/{sfnumber}/images/template/{audioPosterImg}"
        },
        "duration": audioDuration,
        "fragment-url": audioFragmentURL
    }

# Create a JSON object
json = {
    "app": {
        "app-server": {
            "path": "IS{sfnumber}"
        },
        "image-server": {
            "path": "IS{sfnumber}"
        }
    },
    "tracking": {
        "SF-Number": sfnumber,
        "brandName": brandName,
        "brandId": brandId,
        "CP": {
            "tacticId": tcid,
            "activityId": activityId
        }
    },
    "pages": [],
    "navigation": {
        "links": []
    },
    "polls": [],
    "medscape-header": {
        "sponsored-message": {
            "html-content": "Pharma Co"
        }
    },
    "media-player": {
        "playlists": [
            {
                "config-id": "playlist-1",
                "playlist-items": []
            }
        ],
        "medias": []
    },
    "accordion": []
}

# Check if the poll checkbox is checked
if pollNoCheckbox is not None and not pollNoCheckbox.checked:
    numberOfPolls = float(form.elements.form_ids.value)
else:
    json["polls"] = []

# Check if the accordion checkbox is checked
if accordionNoCheckbox is not None and not accordionNoCheckbox.checked:
    numberOfAccordions = int(form.elements.accordion_ids.value)
else:
    json["accordion"] = []

# Define an array to store the values
values = []

# Loop through all the description inputs and push their values to the array
for i in range(len(descriptionInputs)):
    descriptionValue = descriptionInputs[i].value.strip()
    try:
        if not isTitleCase(descriptionValue):
            raise Exception("Please enter a title that is Title Case.")
        values.append([descriptionValue])
    except:
        break

# Loop through all the radio inputs and push their values to the array
for i in range(len(radioInputs)):
    radioValue = radioInputs[i].value
    index = i % (len(descriptionInputs) * 2)
    if values[index]:
        values[index].append(radioValue)
    else:
        values.append([None, radioValue])

# Loop through all the url inputs and push their values to the array
for i in range(len(urlInputs)):
    urlValue = urlInputs[i].value.strip()
    try:
        if not isValidURL(urlValue):
            raise Exception("Invalid URL")
        index = i % (len(descriptionInputs) * 2)
        if values[index]:
            values[index].append(urlValue)
        else:
            values.append([None, None, urlValue])
    except:
        break

# Loop through all the values and check for errors
for i in range(len(values)):
    buttonCheck = values[i]
    buttonChecked = buttonCheck[1]
    urlisEntered = buttonCheck[2]
    if buttonChecked == "external" and isStringNullOrEmpty(urlisEntered):
        errors.append("Please enter a valid URL starting with http:// or https://")

# Create a list to store the JSON objects for the pages and navigation links
jsonArticleAllPages = []
jsonAllPages = []

# Loop through all the values and create the JSON objects for the pages and navigation links
for i in range(len(values)):
    value = values[i]
    title = value[0]
    radio = value[1]
    url = value[2]
    jsonPages = pageObjUpdate(i, title)
    jsonArticleAllPages.append(jsonPages)
    navExternalPage = navExternalPages(i, title, radio, url)
    jsonAllPages.append(navExternalPage)

# Filter out null pages and links
jsonArticleAllPages = [page for page in jsonArticleAllPages if page["meta-data"]["title"] is not None]
jsonAllPages = [link for link in jsonAllPages if link["label"] is not None]

# Update the JSON object with the pages and navigation links
json["pages"] = jsonArticleAllPages
json["navigation"]["links"] = jsonAllPages

# Create the JSON objects for the polls
questionnaire = []
for i in range(1, numberOfPolls + 1):
    pollObject = {
        "config-id": f"poll{i}",
        "title": "Poll",
        "questionnaire-id": qNaID,
        "form-id": i,
        "ui-configs": {
            "question-numbers": {
                "enable": False,
                "text": "{{counter}}."
            },
            "select": {
                "label": True,
                "props": {
                    "autoWidth": True,
                    "variant": "standard"
                }
            },
            "textfield": {
                "label": True,
                "props": {
                    "variant": "standard",
                    "rows": 4
                }
            },
            "response-message": {
                "enable": False,
                "text": "Thank You"
            },
            "submit-button": {
                "label": "Submit"
            }
        }
    }
    questionnaire.append(pollObject)

# Update the JSON object with the polls
json["polls"] = questionnaire

# Replace all occurrences of "Pharma Co." with the sponsor text
json["medscape-header"]["sponsored-message"]["html-content"] = json["medscape-header"]["sponsored-message"]["html-content"].replace("Pharma Co", sponsorText)

# Create the JSON objects for the video thumbnails and posters
numberVideoThumbs = 1
jsonAllVideoThumbs = []
jsonAllVideoPosters = []
for i in range(len(titleOfVideoInputs)):
    titleOfVideoValue = titleOfVideoInputs[i].value.strip()
    try:
        if not isValidTitle(titleOfVideoValue):
            raise Exception("Invalid title")
        videoThumbs = videoThumbnailUpdate(numberVideoThumbs, sfnumber, titleOfVideoValue, thumbnailImageInputs[i].value)
        jsonAllVideoThumbs.append(videoThumbs)
        numberVideoThumbs += 1
    except:
        break

for i in range(len(posterImageInputs)):
    posterValue = posterImageInputs[i].value
    try:
        if not isImageFile(posterValue):
            raise Exception("Invalid image format")
        videoPosters = videoPosterUpdate(numberVideoPosters, sfnumber, titleOfVideoInputs[i].value.strip(), posterValue, videoDurationInputs[i].value, videoFragmentURLInput[i].value)
        jsonAllVideoPosters.append(videoPosters)
        numberVideoPosters += 1
    except:
        break

# Create the JSON objects for the audio thumbnails and posters
numberaudioThumbs = 1
jsonAllAudioThumbs = []
jsonAllAudioPosters = []
for i in range(len(titleOfAudioInputs)):
    titleOfAudioValue = titleOfAudioInputs[i].value.strip()
    try:
        if not isValidTitle(titleOfAudioValue):
            raise Exception("Invalid title")
        audioThumbs = audioThumbnailUpdate(numberaudioThumbs, sfnumber, titleOfAudioValue, audioThumbnailImageInputs[i].value)
        jsonAllAudioThumbs.append(audioThumbs)
        numberaudioThumbs += 1
    except:
        break

for i in range(len(audioPosterImageInputs)):
    audioposterValue = audioPosterImageInputs[i].value
    try:
        if not isImageFile(audioposterValue):
            raise Exception("Invalid image format")
        audioPosters = audioPosterUpdate(numberaudioPosters, sfnumber, titleOfAudioInputs[i].value.strip(), audioposterValue, audioDurationInputs[i].value, audioFragmentURLInput[i].value)
        jsonAllAudioPosters.append(audioPosters)
        numberaudioPosters += 1
    except:
        break

# Update the JSON object with the video and audio thumbnails and posters
playlists = json["media-player"]["playlists"]
playlist = next((p for p in playlists if p["config-id"] == "playlist-1"), None)
numVideos = int(document.getElementById("number_of_videos").value)
numAudios = int(document.getElementById("number_of_audios").value)
playlist["playlist-items"] = []
json["media-player"]["medias"] = []
if numVideos == 0 and numAudios > 0:
    playlist["playlist-items"] = jsonAllAudioThumbs
    json["media-player"]["medias"] = jsonAllAudioPosters
elif numVideos > 0 and numAudios == 0:
    playlist["playlist-items"] = jsonAllVideoThumbs
    json["media-player"]["medias"] = jsonAllVideoPosters
else:
    playlist["playlist-items"] = jsonAllVideoThumbs + jsonAllAudioThumbs
    json["media-player"]["medias"] = jsonAllVideoPosters + jsonAllAudioPosters

# Create the JSON objects for the accordions
indices = list(range(1, numberOfAccordions + 1))
allAccordions = []
for index in indices:
    accordion = {
        "config-id": f"accordion-{index}",
        "index": index,
        "header": {
            "image": {
                "enable": True,
                "src": f"{{imageServer.host}}/pi/sites/infosite/{sfnumber}/images/template/accordionArrow.png"
            },
            "html-content": "<h3>Accordion Example</h3>",
            "buttons": {
                "expand": "",
                "collapse": ""
            }
        }
    }
    allAccordions.append(accordion)

# Update the JSON object with the accordions
json["accordion"] = allAccordions

# Convert the JSON object to a string
jsonString = json.dumps(json, indent="\t")

# Create a zip file
zipFile = zipfile.ZipFile("infosite-config.zip", "w")

# Add the JSON file to the zip file
zipFile.writestr("infosite-config.json", jsonString)

# Close the zip file
zipFile.close()


