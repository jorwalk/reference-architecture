#!/usr/bin/env python

# Copyright 2017 Google Inc. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
# Because AutoML API is not public yet, the default ADC (application default
# credential) provided by cloud SDK won't give you the right permission.
# That is why a service account credential is needed in order to make
# ADC work.
# Follow the https://github.com/GoogleCloudPlatform/google-cloud-python/blob/master/docs/core/auth.rst#setting-up-a-service-account
# to download a JSON key file for your service account. Then make sure that
# you enable the "Cloud AutoML API" in API Manager of pantheon.
# Make sure your service account has the `AutoML Viewer` and `AutoML Predictor`
# IAM permissions.
# On your dev machine, run `export GOOGLE_APPLICATION_DEFAULT_CREDENTIAL=
# {PATH TO THE DOWNLOADED JSON KEY FILE}.
#
# Note: one need to join `cloud-automl-trusted-testers@googlegroups.com` group
# in order to enable "Cloud AutoML API" in pantheon.

"""This application demonstrates how to perform basic operations with the
Google AutoML Vision API.

Example Usage:
python automl_detect.py create_dataset "my dataset name"
python automl_detect.py create_model 7174207385752752219
python automl_detect.py delete_dataset 7174207385752752219
python automl_detect.py delete_model 7174207385752752219
python automl_detect.py list_datasets 
python automl_detect.py list_models 7174207385752752219
python automl_detect.py list_model_evaluations 7174207385752752219
python automl_detect.py get_model_evaluation 70585533885 9062584215341814548
python automl_detect.py predict 7174207385752752219  
python automl_detect.py get_model 70585533885 "gs://cloud-test-vcm/img/image_test.jpg"
python automl_detect.py import "gs://cloud-test-vcm/csv/all_data.csv"

For more information, the documentation at
https://cloud.google.com/vision/automl/docs.
"""
import os
import time
import sys
import argparse

from google.cloud import automl_v1alpha1
from google.cloud.automl_v1alpha1.proto import service_pb2
from google.cloud.automl_v1alpha1.gapic import enums


def callback(operation_future):
   result = operation_future.result()

def automl_create_dataset(dataset_name):
  """ Create a dataset""" 
  dataset_spec = {
    "classification_type" :  enums.ClassificationType.MULTILABEL
  }
  my_dataset = {
    "display_name" : dataset_name,
    "image_classification_dataset_spec" : dataset_spec
  }
  response = client.create_dataset( parent, my_dataset)
  print("\nDataset creation: {}", response) 
  dataset_full_id = response.name

def automl_list_datasets():
  """ list all datasets""" 
  filter_ = ''
  response = client.list_datasets(parent, filter_)
  print("\nList of datasets:")
  for element in response:
    print(element) 

def automl_import(path, dataset_full_id):
  """ import labeled images """ 
  input_uris = [ path]
  operation = client.import_dataset(dataset_full_id, input_uris)
  print('\nProcessing import')
  result = operation.result()
  print("\nImages imported: {} ", result)

def automl_create_model(dataset_id, model_name):
  """ start training """ 
  #dataset_id = dataset_full_id.split('/')[-1]
  my_model = { 
    "display_name" : model_name,
    "dataset_id" : dataset_id,
    "image_classification_model_spec": { "model_type": "BASIC_MODEL" }
  }
  print(my_model)
  operation = client.create_model(parent, my_model)
  print('\nTraining started')
  result = operation.result()
  model_full_id = result.name
  print("Model id: {}", model_id)
  print("\nTraining done")

def automl_list_model_evaluations(model_id):
  """ list model evaluations """
  filter_ = ''
  parent_model = client.model_path(project_id, 'us-central1', model_id)
  print("\nList of model evaluations:")
  for element in client.list_model_evaluations(parent_model, filter_):
    print(element) 

def automl_get_model_evaluation(model_id, model_evaluation_id):
  """ Get model evaluation """
  name = client.model_evaluation_path(project_id, 'us-central1', model_id, model_evaluation_id)
  print("\nModel evaluation:")
  response = client.get_model_evaluation(name)
  print(response)  

def automl_get_model(model_id):
  """ Get model evaluation """
  name = client.model_path(project_id, 'us-central1', model_id)
  print("\nModel:")
  response = client.get_model(name)
  print(response)  

def automl_list_models():
  """ # list all models """
  filter_ = ''
  response = client.list_models(parent, filter_)
  print("\nList of models:")
  for element in response:
    print(element) 

def automl_predict(model_full_id, path):
  """ # prediction """
  prediction_client = automl_v1alpha1.PredictionServiceClient()
  file_path = path
  with open(file_path, 'rb') as ff:
    content = ff.read()
  payload = {'image': {
    'image_bytes': content
        }
  }
  params = {}
  request = prediction_client.predict(model_full_id, payload, params)
  print('\nPrediction results: {}', response)

def automl_delete_model(model_id):
  """ delete a model """
  name = client.model_path(project_id, 'us-central1', model_id)
  operation = client.delete_model(name)
  operation.add_done_callback(callback)
  print( '\nModel deletion')

def automl_delete_dataset(dataset_id):
  """ delete a dataset """
  name = client.dataset_path(project_id, 'us-central1', dataset_id)
  operation = client.delete_dataset(name)
  operation.add_done_callback(callback)

  print( '\nDataset deletion')


if __name__ == '__main__':
    parser = argparse.ArgumentParser(
        description=__doc__,
        formatter_class=argparse.RawDescriptionHelpFormatter)
    subparsers = parser.add_subparsers(dest='command')
    automl_create_dataset_parser = subparsers.add_parser(
        'create_dataset', help=automl_create_dataset.__doc__)
    automl_create_dataset_parser.add_argument('dataset_name')
    automl_create_model_parser = subparsers.add_parser(
        'create_model', help=automl_create_model.__doc__)
    automl_create_model_parser.add_argument('dataset_id')
    automl_create_model_parser.add_argument('model_name')
    automl_import_parser = subparsers.add_parser(
        'import', help=automl_import.__doc__)
    automl_import_parser.add_argument('path')
    automl_import_parser.add_argument('dataset_full_id')
    automl_list_datasets_parser = subparsers.add_parser(
        'list_datasets', help=automl_list_datasets.__doc__)
    automl_list_models_parser = subparsers.add_parser(
        'list_models', help=automl_list_models.__doc__)
    automl_delete_dataset_parser = subparsers.add_parser(
        'delete_dataset', help=automl_delete_dataset.__doc__)
    automl_delete_dataset_parser.add_argument('dataset_id')
    automl_delete_model_parser = subparsers.add_parser(
        'delete_model', help=automl_delete_model.__doc__)
    automl_delete_model_parser.add_argument('model_id')
    automl_predict_parser = subparsers.add_parser(
        'predict', help=automl_predict.__doc__)
    automl_predict_parser.add_argument('model_id')
    automl_predict_parser.add_argument('path')
    automl_list_model_evaluations_parser = subparsers.add_parser(
        'list_model_evaluations', help=automl_list_model_evaluations.__doc__)
    automl_list_model_evaluations_parser.add_argument('model_id') 
    automl_get_model_evaluation_parser = subparsers.add_parser(
        'get_model_evaluation', help=automl_get_model_evaluation.__doc__)
    automl_get_model_evaluation_parser.add_argument('model_id') 
    automl_get_model_evaluation_parser.add_argument('model_evaluation_id') 
    automl_get_model_parser = subparsers.add_parser(
        'get_model', help=automl_get_model_evaluation.__doc__)
    automl_get_model_parser.add_argument('model_id') 
    
    
    # set up
    project_id = 'your_project_id'  # You can replace with your consumer project id.
    client = automl_v1alpha1.AutoMlClient()
    parent = client.location_path(project_id, 'us-central1')

    args = parser.parse_args()

    if args.command == 'create_dataset':
        automl_create_dataset(args.dataset_name)
    if args.command == 'create_model':
        automl_create_model(args.dataset_id, args.model_name)
    if args.command == 'delete_dataset':
        automl_delete_dataset(args.dataset_id)
    if args.command == 'delete_model':
        automl_delete_model(args.model_id)
    if args.command == 'list_datasets':
        automl_list_datasets()
    if args.command == 'list_models':
        automl_list_models()
    if args.command == 'list_model_evaluations':
        automl_list_model_evaluations(args.model_id)
    if args.command == 'get_model':
        automl_get_model(args.model_id)
    if args.command == 'get_model_evaluation':
        automl_get_model_evaluation(args.model_id, args.model_evaluation_id)
    if args.command == 'import':
        automl_import(args.path, args.dataset_full_id)
    if args.command == 'predict':
        automl_predict(args.model_id, args.path)

