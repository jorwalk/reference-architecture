# A Checklist for working with Complex ML Problems
Many times, it happens that we encounter complex machine learning problems which are difficult to break down into simple sub-problems. Those working in startups would relate to the fact that we often have a habit of jumping from one experiment to another while we try to solve such complex use-cases.

We recognized that to circumvent frequent mistakes and to have clarity while approaching a complex business problem we must have a standard checklist. The checklist should assure that we don’t miss on critical elements while we solve any complex problem.

We will share a 3 Stage Checklist which can be used for approaching complex ML problems. Each stage has some checkpoints which can help in systematic problem-solving.

## Stage 1: Problem Discovery and Requirement Gathering
### Checkpoint 1: Understanding Business Problem

1. Get the relevant context about the problem.

1. Use [First Principle Thinking Techniques](https://fs.blog/2018/04/first-principles/) to break down a complex problem into unit problems.

1. What needs to be solved?

1. Why is this needed?

### Checkpoint 2: Exploratory Data Analysis

1. Convert data into a useful format to do filtering, merging, and other data operations.

1. Sample a few items to understand the variation of data.

1. Accumulate all possible statistics and understand peculiarities from data, e.g., class distribution overlays among various classes within the dataset, data skewness, nominal variables.

1. Do data cleaning and analysis to remove any outliers. Create relevant visualisations.

1. Find a good read here on [EDA](https://machinelearningmastery.com/understand-problem-get-better-results-using-exploratory-data-analysis/).

### Checkpoint 3: Define Objectives

1. Accurately define the objectives for each unit problem.

1. Prepare the corresponding hypotheses, constraints, and edge-cases.

1. List down acceptable metrics like Error Rate/Accuracies/Precision/Recall Numbers.

### Checkpoint 4: Clarify Doubts

1. Clear all the doubts from concerned teams/clients.

1. Validate the objectives, constraints, edge cases, hypotheses, and assumptions.

### Checkpoint 5: Exhaustive Literature List/Past studies

1. Read Blogs/article to be familiar with similar problems and state-of-the-art

1. Find online published research papers & survey papers.

1. Explore Github repositories on similar problems.

### Checkpoint 6: Selecting Promising Literature

1. Browse each literature and go through the introduction, proposed work, graphs, charts.

1. Attempt to understand things from a high level.

1. Examine if the purpose of the research matches the use-case or relevant blockers.

1. Verify if the article presented modern studies and is not historical work.

1. Validate intuitively, if the proposed algorithms and mentioned dataset appear to work well for your problem.

### Checkpoint 7: Literature Deep-dive

1. Go deep into the promised literature/ available implementations.

1. Gather insights from literature: look for pre-processing steps, features, proposed pipelines and algorithms/architecture, datasets, hyper-parameters, evaluation criteria, other subtle difference, challenges, pros and cons of techniques used.

1. Read 4–5 literature before jumping to execution and maybe club ideas from 2 or more literature for your experiments.

1. One format which we follow at Squad for literature deep-dive is
![Literature](https://cdn-images-1.medium.com/max/1600/1*Smgv723ymyKqKjKLVBMRXw.png)

1. Format used for Literature Summary while doing an exercise on literature deep-dive.

### Checkpoint 8: Design Experiments and Pipelines/Algorithms

1. Create a list of potential approaches based on the combination of various preprocessing, features, classification layer, and other insights got from literature deep dive.

1. Design relevant experiments based on the above list for your objectives.

1. Filter out experiments which don’t make sense intuitively.

1. Rank rest of the experiments based on a) simple, intuitive and easy to build [common sense baselines](https://towardsdatascience.com/first-create-a-common-sense-baseline-e66dbf8a8a47), b) return on investment of an experiment based on dataset requirements, implementation, and execution time.

### Checkpoint 9: Dataset Estimation and Acquisition

1. Based on the literature survey, we can either gather relevant public datasets or request for in-house datasets.

1. An estimate for training, validation and test dataset required for different experiments.

1. Account for mistakes/outliers in data and maybe ask for 20–25% more data than what you need.

1. Prepare the required template for the dataset (if to be shared by other departments/clients)

1. Follow a data validation checklist here to avoid gaps:

1. Template for Annotation (id, labels, time, etc.)

1. Number of Samples for Training Set for each category

1. Number of Samples for Validation Set for each category

1. Number of Samples for Test Set for each category

1. Minimum and maximum samples for entire training/validation and test set, taking into account for outliers.

1. Prepare two sets:

  1. A Dummy Set for quickly verifying the snippets of code during pipeline implementation.

  1. A Final Set for final experimentation post pipeline implementation.

## Stage 2: Implementation and Experimentation

### Checkpoint 10: Implement code

1. Define different steps for preprocessing, features, feature extractors, post-processing of extracted features, final feature vector shape, model family, architecture, evaluation methods, and metrics.

1. Design input and output format for your datasets & results.

1. Create training, validation and test set based on EDA. Use various sampling procedure e.g., balanced set, stratified set, and other sampling techniques.

1. Design and estimate for your pipeline while considering all the edge cases and constraints.

1. Implement logger at each step for reproducibility and debugging.

1. Mock run with Dummy dataset to validate each part of the pipeline. Catch bugs, fix and re-iterate.

1. Get it validated from both functional and code perspective.

1. Once everything is in place, start implementing.

1. Configure your system so that you can repeat the experiment easily and with speed.

### Checkpoint 11: Data Preparation

1. Clean the data and remove Outliers. Validate that the data left after this step is enough for training and testing.

1. Understand if there is a need for balanced data or unbalanced data.

1. Choose data points randomly for all the parent classes and sub-classes.

1. Form the final dataset SHUFFLE it well.

1. Split the data and create training, validation and test files.

1. If possible, save the above files, might help later while repeating experiments.

1. Training and validation set should be a close replica of the test set and should have enough variation helpful for generalization.

1. Try to remove selection bias, if the test set is different from that expected during production.

1. Always use data Ids in the pipeline using which you can map a data point feature back to the raw data point even when providing different permutations of the raw file.

1. If using augmented datasets, ensure that the validation set and training set do not contain different augmented samples of the same base sample of a data point as it might bloat up validation accuracy.

### Checkpoint 12: Hyperparameters optimization

1. List the parameters which can be varied to perform experiments on selected algorithms/pipelines.

1. Find the best values for the above parameters from blogs, literature review.

1. Run the first experiment with default values of parameters and then start fine-tuning based on the results to determine the optimum value.

1. Analyse performance on validation data, if the model is trained.

1. If there is a huge deviation, perform a grid-search on hyper-parameters. Grid-search might tale some time. Grab a coffee!

1. If you get a relevant model, do K-fold-cross-validation to ensure that model is not overfitting.

1. Few Tips from Andrew NG in his DL Specialization Course, a) Always overfit the model before trying to level both the training and validation accuracies. b) Let the training accuracy swell first, remove dropout/ L2 regularisation or any other over-fitting reduction method at the first iteration. c) Use ModelCheckPoint, Learning Rate Decay and Early Stopping while training any Deep Learning model.

1. Further, find a blog on lessons learned from the Deep Learning Specialisation Course.

### Checkpoint 13: Quantitative and Qualitative Analysis

1. We should allocate sufficient time to analyze an experiment.

1. Check both qualitative and quantitative results of the model obtained on the test set.

1. If it doesn’t perform well on the test set, find the reason for it. a) Maybe the test data is completely different from what it was supposed to be. b) Maybe there is noise in the test data. c) Maybe processing of test set is needed. d)Maybe there is a fundamental error in the evaluation method. e)Maybe the model is at fault.

1. If iteration is needed after results from a previous experiment, do the critical analysis of possible reasons for experiment failure.

1. Gain insights here from all aspects, try and break your own design, find loopholes.

1. Check Preprocessed Data: Preprocessing algorithms might be giving incorrect output, which means our model is getting trained on wrong data.

1. Feature Shape: Check for generated features and feature vector shape.

1. Shuffled Data: Ensure that labels and data points are shuffled before sending to the model for training.

1. Using Offset to Clip Feature Values: If we know that some particular operation during feature processing might make the value of any field for any feature as infinity then we should consider using offsets.

1. Decide on possible next steps based on the above steps for good and bad results.

1. Reiterate or move to the next set of experiments based on analysis.

### Checkpoint 14: Manage Experiments

1. One can follow spreadsheet to manage everything for experiments, so it’s easy to compare at the later stage.

1. Details which should be logged for each experiment, a) Experiment Identifier/ Name, b) Pipeline Identifier, c) Dataset identifier, d) Pipeline components and hyperparameters (can separate for preprocessing, features, classification), e) Training logs/ model logs, f) Status (success, failure), g) Reason for failure/ success, h) Follow up questions.

1. Do Root Cause Analysis for your experiments, what worked, what didn’t. Keep track of both reasons for failures and success.
1. Find a reference on planning and running experiments here.

## Stage 3: Getting Ready for Production and Next Steps

### Checkpoint 15: Integration

1. Get clarity on how to integrate the models. Prepare your implementation pipeline for Production Environment.

1. Get it Peer reviewed

1. Test the model with Dummy Dataset at Production Environment.

1. Test the model with the final set to check for any discrepancy in production results wrt to experimental results.

### Checkpoint 16: Sampling

1. Estimate the sampling size based on the Error rate. You can use SurveyMonkey calculator to get the statistically significant sample size.

1. Do the required Sampling for your model.

### Checkpoint 17: Optimization

1. Now it’s time to further optimize the pipeline for speed, automation, precision/recall, and scaling.

1. Pick the next best pipelines and repeat or move on to Next Business Problem :)

1. Last but not the least, do a retrospect once you complete your study/experiments. It’s always good to look back and reflect on

1. What went well?
1. What went wrong?
1. Key Learnings!
