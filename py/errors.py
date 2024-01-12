import re

def test_SF_number(input):
    regex = r"^[a-zA-Z][\w\-\.]*$|^\d{6}\.\d{1,2}[a-zA-Z]?$"
    return bool(re.match(regex, input))

def is_valid_brand_name(input):
    regex = r"^[\d\w\[\]]+[^\?\\\/\:"<>\|]*$"
    return bool(re.match(regex, input))

def is_valid_department_ID(input):
    regex = r"^\d{4}$"
    return bool(re.match(regex, input))

def is_valid_tactic_ID(input):
    regex = r"^\d{5,6}$"
    return bool(re.match(regex, input))

def is_valid_promo_ID(input):
    regex = r"^\d{5,6}$"
    return bool(re.match(regex, input))

def is_title_case(input):
    regex = r"^[A-Z][a-zA-Z0-9\s\S]*$"
    return bool(re.match(regex, input))

def is_valid_URL(input):
    regex = r"^(https?:\/\/)?([\w.-]+)?\.?([a-z]{2,})?(:\d{1,5})?([\/?#]\S*)?$"
    return bool(re.match(regex, input))

def is_valid_pharma(input):
    regex = r"^[\d\w\[\]]+[^\?\\\/\:"<>\|]*$"
    return bool(re.match(regex, input))

def is_valid_poll_ID(input):
    regex = r"^\d{0,5}$"
    return bool(re.match(regex, input))

def is_valid_title(input):
    regex = r"^[A-Z][a-zA-Z0-9\s\S]*$"
    return bool(re.match(regex, input))

def is_valid_media_length(input):
    regex = r"^([0-5]?\d):([0-5]\d)$"
    return bool(re.match(regex, input))

def is_valid_fragment_URL(input):
    regex = r"^\/delivery\/.*\.mp4$"
    return bool(re.match(regex, input))

def is_image_file(input):
    regex = r"[^\s]+(.*?).(jpg|jpeg|png|gif|JPG|JPEG|PNG|GIF)$"
    return bool(re.match(regex, input))


