import re

# Click event for radio buttons with name starting with "radio/[0-9]+/"
def radio_click_handler():
    # Uncheck all radio buttons
    radio_buttons = document.querySelectorAll('input[type="radio"][name^="radio/[0-9]+/"]')
    for button in radio_buttons:
        button.checked = False
    # Check the clicked radio button
    this.checked = True

# Click event for radio buttons with name starting with "radioPoll"
def radio_poll_click_handler():
    # Uncheck all radio buttons
    radio_buttons = document.querySelectorAll('input[type="radio"][name^="radioPoll"]')
    for button in radio_buttons:
        button.checked = False
    # Check the clicked radio button
    this.checked = True

# Click event for radio buttons with name starting with "radioAccordion"
def radio_accordion_click_handler():
    # Uncheck all radio buttons
    radio_buttons = document.querySelectorAll('input[type="radio"][name^="radioAccordion"]')
    for button in radio_buttons:
        button.checked = False
    # Check the clicked radio button
    this.checked = True

# Change event for number_of_pages select element
def change_pages():
    selector = document.getElementsByName("number_of_pages")[0]
    number_selected = int(selector.options[selector.selectedIndex].value)
    number = 1
    description_title = ""
    while number <= number_selected:
        description_title += '<div><div><input type="text" id="description" name="description" placeholder="Homepage" required/></div><div id="radio_button_set' + str(number) + '"><div><input type="radio" name="radio' + str(number) + '" class="radio" value="internal"></div><div><input type="radio"  name="radio' + str(number) + '" class="radio" value="external"></div></div><div><input type="url" id="page_url" name="page_url" placeholder="page_url" /></div></div>'
        number += 1
    document.getElementById("page_titles_table").innerHTML = description_title

# Get number of videos and generate video tables
def get_number_of_videos():
    selector = document.getElementById("number_of_videos")
    value = int(selector.value)
    arr = list(range(1, value+1))
    arr = list(map(lambda i: "Video " + str(i), arr))
    video_table = lambda element: '<div class="media_table"><div><input type="text" id="video_title" name="video_title" value="' + element + '"/></div><div><input type="text" id="video_thumbnail_image_name" name="video_thumbnail_image_name" value="mediaFPO.png"/></div><div><input type="text" id="video_poster_image_name" name="video_poster_image_name" value="mediaFPO.png"/></div><div><input type="text" id="video_duration" name="video_duration" value="00:30" /></div><div><input type="text" id="video__url" name="video__url" value="/delivery/aws/a8/4e/a84e7cd9-a7ed-34fc-8215-4e5f32a87c6d/FPOv1_640x480_1_,4500k,4500k-mbr,4500k-mbr10k,3000k,2500k,1000k,750k,450k,a96k,.mp4" /></div></div>'
    videos_table = list(map(lambda element: '<div>' + element + '</div>' + video_table(element), arr))
    videos_out_table = ''.join(videos_table)
    document.querySelector("#videos_table").innerHTML = videos_out_table

# Get number of audios and generate audio tables
def get_number_of_audios():
    selector = document.getElementById("number_of_audios")
    value = int(selector.value)
    arr = list(range(1, value+1))
    arr = list(map(lambda i: "Audio " + str(i), arr))
    audio_table = lambda element: '<div class="media_table"><div><input type="text" id="audio_title" name="audio_title" value="' + element + '"/></div><div><input type="text" id="audio_thumbnail_image_name" name="audio_thumbnail_image_name" value="mediaFPO.png"/></div><div><input type="text" id="audio_poster_image_name" name="audio_poster_image_name" value="mediaFPO.png"/></div><div><input type="text" id="audio_duration" name="audio_duration" value="05:48" /></div><div><input type="text" id="audio__url" name="audio__url" value="/delivery/d8/8d/d88d89b7-b333-4374-934d-5c0b57087d18/267440_ITP_S2_Ep1_V4_Approved_2018-12-10_,4500k,a96k,1000k,750k,3000k,400k,2500k,.mp4" /></div></div>'
    audios_table = list(map(lambda element: '<div>' + element + '</div>' + audio_table(element), arr))
    audios_out_table = ''.join(audios_table)
    document.querySelector("#audios_table").innerHTML = audios_out_table


