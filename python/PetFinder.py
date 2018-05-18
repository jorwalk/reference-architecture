import requests, time, urllib.request, shutil, uuid
from urllib.parse import urlparse
from selenium import webdriver
from bs4 import BeautifulSoup

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

# Declare selenium chrome driver
chrome_path_mac = r'/Users/jordanwalker/Code/reference-architecture/python/chromedriver'
driver = webdriver.Chrome(executable_path=chrome_path_mac)

def requestPage(number):
    u = 'https://www.petfinder.com/search/pets-for-adoption/us/mo/st-louis/?distance=Anywhere&page={0}'
    url = u.format(number)
    driver.get(url)
    html = driver.page_source
    soup = BeautifulSoup(html, 'html.parser')
    imgs = soup.findAll("pfdc-lazy-load", { "class" : "imgMask" })
    for img in imgs:
        requestImage(img['src'])
    
# Loop 
# max_pages = 6540
max_pages = 100
for n in range(1,max_pages):
    requestPage(n)        
    time.sleep(5)

driver.quit()