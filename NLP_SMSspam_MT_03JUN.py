
# spyder : scientific python development environment

'''
NLP: natural language processing
> Applying a ML algo to text or language
> teach the machine how to understand what is said in spoken or written format
> 1950

use cases:
    1. speech recognization
    2. sentiment analysis
    3. categorize a lot of books
    4. news/article classification
    5. chatbot (answering a question)
    
BOW(bag of words): vector of word counts
TF: Term frequency(TF(d,t) > number of occurance of a term in a document
IDF: Inverse document frequncy > importance of a term in entire corpus
IDF=log(D/t)

SMSspam dataset: 
    https://archive.ics.uci.edu/ml/machine-learning-databases/00228/
    https://www.kaggle.com/uciml/sms-spam-collection-dataset/data

'''
#imports
import pandas as pd
import numpy as np

sms=pd.read_csv('SMSSpamCollection', sep='\t', names=['label','message'])

import re
import nltk
nltk.download()
from nltk.corpus import stopwords
from nltk.stem.porter import PorterStemmer
ps=PorterStemmer()

#text=re.sub(pattern,separator,string)

allsms=[]
for i in range(0,5572):
    text=sms['message'][i]
    text=re.sub('[^a-zA-Z]',' ',text) # using re.sub clean up , or . etc
    text=text.lower() # covert to lower case
    text=text.split() # covert to list so that we can iterate over each word
    # applying stopwords and stemming
    text=[ps.stem(word) for word in text if not word in stopwords.words('english')]
    text=' '.join(text)
    allsms.append(text)

from sklearn.feature_extraction.text import CountVectorizer
cv=CountVectorizer()
X=cv.fit_transform(allsms).toarray() # toarray to be used for getting a ndarray
y=sms.iloc[:,0]
from sklearn.preprocessing import LabelEncoder
lc=LabelEncoder()
y=lc.fit_transform(y)

from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)


from sklearn.linear_model import LogisticRegression
clfLR=LogisticRegression().fit(X_train,y_train)
y_predLR=clfLR.predict(X_test)

from sklearn.metrics import confusion_matrix, accuracy_score
cm=confusion_matrix(y_test, y_predLR)
accuracy_score(y_test, y_predLR)

# Homework:
# run it for LR, KNN, SVM, DT, RF, NB
# sentiment analysis, review dataset