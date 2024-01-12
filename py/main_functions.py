def pageObjUpdate(num, value):
    route = "" if num == 0 else f"isarticle-{num}"
    path = "home" if num == 0 else f"article-{num}"
    return {
        "route": f"/{route}",
        "path": f"/articles/{path}",
        "template": "default",
        "meta-data": {
            "title": value,
            "titleTag": "Homepage" if num == 0 else f"Article {num}",
            "description": value
        }
    }

def navExternalPages(num, value, checked, url):
    isExternal = checked == "external"
    targetUrl = url if isExternal else f"/isarticle-{num}"
    module = "HtmlContentLink" if isExternal else "RouterLink"
    return {
        "label": value,
        "url": targetUrl,
        "target": "_self",
        "module": module
    }

polls = {
    "config-id": "test",
    "title": "Poll",
    "questionnaire-id": "60635",
    "form-id": "1",
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

imageFolder = ""

def imageDir(imageName):
    imageFolder = "template" if imageName == "mediaFPO.png" else "instance"
    return imageFolder

def videoThumbnailUpdate(num, sf, videoTitleName, thumbnail):
    imageDir(thumbnail)
    videoThumbnail = {
        "media-id": f"video{num}",
        "title": videoTitleName,
        "thumbnail": f"/pi/sites/infosite/{sf}/images/{imageFolder}/{thumbnail}",
        "description": videoTitleName
    }
    return videoThumbnail

def videoPosterUpdate(numPoster, sfNumber, videoPosterTitleName, posterName, videoTime, vURL):
    imageDir(posterName)
    videoPoster = {
        "config-id": f"video{numPoster}",
        "media": {
            "title": videoPosterTitleName,
            "medium": "video",
            "autoplay": False,
            "source": vURL,
            "poster": f"/pi/sites/infosite/{sfNumber}/images/{imageFolder}/{posterName}",
            "duration": videoTime,
            "ccFileRoot": "",
            "ccInfo": []
        },
        "html-title": {
            "enable": True,
            "title": videoPosterTitleName
        },
        "controls": {
            "fullscreen": True
        }
    }
    return videoPoster

def audioThumbnailUpdate(num, sfAudioNum, audioTitleName, thumbnail):
    imageDir(thumbnail)
    audioThumbnail = {
        "media-id": f"audio{num}",
        "title": audioTitleName,
        "thumbnail": f"/pi/sites/infosite/{sfAudioNum}/images/{imageFolder}/{thumbnail}",
        "description": audioTitleName
    }
    return audioThumbnail

def audioPosterUpdate(numAudioPoster, sfAudioNumber, audioPosterTitleName, audioPosterName, audioTime, aURL):
    imageDir(audioPosterName)
    audioPoster = {
        "config-id": f"audio{numAudioPoster}",
        "media": {
            "title": audioPosterTitleName,
            "medium": "audio",
            "autoplay": True,
            "source": aURL,
            "poster": f"/pi/sites/infosite/{sfAudioNumber}/images/{imageFolder}/{audioPosterName}",
            "duration": audioTime,
            "ccFileRoot": "",
            "ccInfo": []
        },
        "html-title": {
            "enable": True,
            "title": audioPosterTitleName
        },
        "controls": {
            "fullscreen": False
        }
    }
    return audioPoster


