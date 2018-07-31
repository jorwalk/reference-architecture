
# Cloud AutoML Vision
## Using the AutoML API
### Before You Begin
Before you can use the AutoML API, you must first set up your Google Cloud Platform (GCP) project and obtain access to the AutoML Vision Alpha by following the steps in Before You Begin.

After you have set up access to the AutoML Vision Alpha, you must create a service account for your GCP project that you will use to access the AutoML API. API keys are not supported. To create a service account, follow these steps:

1. Install the gcloud command line tool.
``
source $HOME/Code/google-cloud-sdk/completion.bash.inc
source $HOME/Code/google-cloud-sdk/path.bash.inc
```
1. Follow the [instructions](https://cloud.google.com/iam/docs/creating-managing-service-account-keys) to create a service account and download a key file.

1. Add your new service account to the *AutoML Editor* IAM role with the following commands. Replace project-id with the name of your GCP project and replace service-account-name with the name of your new service account, for example `service-account1@myproject.iam.gserviceaccount.com`.


```
gcloud auth login
gcloud config set project ociautomltest
gcloud projects add-iam-policy-binding ociautomltest \
 --member=serviceAccount:custom-vision@ociautomltest.iam.gserviceaccount.com \
 --role='roles/automl.editor'
```
1. Set the GOOGLE_APPLICATION_CREDENTIALS environment variable to the path to the service account key file that you downloaded when you created the service account. For example:
```
 export GOOGLE_APPLICATION_CREDENTIALS=key-file
```

Allow the AutoML Vision service accounts to access your Google Cloud project resources:

#### Launch Google Cloud Shell.

Paste and execute the following commands:
```
PROJECT=$(gcloud config get-value project)

gcloud projects add-iam-policy-binding $PROJECT \
  --member="serviceAccount:custom-vision@appspot.gserviceaccount.com" \
  --role="roles/ml.admin"

gcloud projects add-iam-policy-binding $PROJECT \
  --member="serviceAccount:custom-vision@appspot.gserviceaccount.com" \
  --role="roles/storage.admin"
```
Create a Google Cloud Storage bucket for storing your images:
```
gsutil mb -p $PROJECT -c regional -l us-central1 gs://$PROJECT-vcm/
```
