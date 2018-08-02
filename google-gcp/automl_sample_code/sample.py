#!/usr/bin/env python

# Copyright 2018 Google Inc. All Rights Reserved.
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

import os
import time

from google.cloud import automl_v1alpha1
from google.cloud.automl_v1alpha1.proto import service_pb2

project_id = 'your_project_id'  # You can replace with your consumer project id.
client = automl_v1alpha1.AutoMlClient()
parent = client.location_path(project_id, 'us-central')
filter_ = ''
response = client.list_models(parent, filter_)
for element in response:
  print(element) 
