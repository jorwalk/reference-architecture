import requests, time, urllib.request, shutil, uuid
from urllib.parse import urlparse
from selenium import webdriver
from bs4 import BeautifulSoup


##
## Run MONGODB with docker
# sudo docker run -d -p 27017:27017 -v ~/data:/data/db mongo
##

import pymongo
from pymongo import MongoClient

client = MongoClient()

# Get the sampleDB database
db = client.petfinder_database
collection = db.pets

def requestImage(src):
    uu = str(uuid.uuid4())
    req = urllib.request.Request(
        src,
        data=None,
        headers={
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/542.36'
        }
    )
    with urllib.request.urlopen(req) as response, open('./img/'+uu+'.jpg', 'wb') as out_file:
        shutil.copyfileobj(response, out_file)

    return uu

# Declare selenium chrome driver
chrome_path_mac = r'/Users/jordanwalker/Code/reference-architecture/python/chromedriver'


def requestPage(number):
    u = 'https://www.petfinder.com/search/pets-for-adoption/us/mo/st-louis/?distance=Anywhere&page={0}'
    url = u.format(number)

    driver = webdriver.Chrome(executable_path=chrome_path_mac)
    driver.get(url)

    html = driver.page_source
    soup = BeautifulSoup(html, 'html.parser')
    driver.quit()


    for link in soup.find_all("a", { "class" : "petCard-link" }, href=True):
        # Pet individual page URL
        href = link["href"]
        # Pet description with name, gender, age, type
        desc = link["aria-label"]
        # 300 x 300 image source
        img = link.find("pfdc-lazy-load", { "class" : "petCard-media" })

        # FEATURE ENGINEER
        # Internal Pet ID
        parts = href.split("/")
        id = parts[4].split("-")

        # Pet Location
        pet_state = parts[5].upper()

        ## Domain Items
        pet_id = id[-1]
        pet_type = parts[3].upper()
        try:
            img_source = img['src']
        except TypeError:
            img_source = ''

        pet_obj = {
            'state':pet_state,
            'type': pet_type,
            'id': pet_id,
            'url': href,
            'url_img': img_source,
            'desc': desc
        }

        pet = collection.insert_one(pet_obj).inserted_id
        print(pet)

    #     requestImage(img['src'])

# Loop
# max_pages = 6540
start = 5493
max_pages = 6540
for n in range(start, max_pages):
    requestPage(n)
    time.sleep(3)
