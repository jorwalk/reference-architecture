# gsutil cp img-dog/** gs://ociautomltest-vcm
# gsutil cp images/** gs://oxford-vcm
#

# Connect to MongoDB
import pymongo
from pymongo import MongoClient
# Libraries for downloading image
import requests, time, urllib.request, shutil, uuid
from urllib.parse import urlparse

# Connect to the localhost client
client = MongoClient()

# Get the petfinder database
db = client.petfinder_database
collection = db.pets

def requestImage(src, id):
    uu = str(uuid.uuid4())
    req = urllib.request.Request(
        src,
        data=None,
        headers={
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/542.36'
        }
    )
    with urllib.request.urlopen(req) as response, open('./img-cat/'+id+'.jpg', 'wb') as out_file:
        shutil.copyfileobj(response, out_file)

    return uu


for doc in collection.find({"type":"CAT","url_img":{"$ne":""}}):
    print("{0} - {1}".format(doc['id'], doc['desc']) )
    requestImage(doc['url_img'], doc['id'])
