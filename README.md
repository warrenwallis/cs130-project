# OML GPT
CS 130 Group Project


The rise of language generating models like ChatGPT has been largely driven by advancements in deep learning, the abundance of internet data, and the availability of powerful hardware. Models such as ChatGPT are very practical, as they find utility in natural language understanding, content creation, chatbots, translation, summarization, as well as coding assistance, revolutionizing various applications across numerous fields. 

We want to focus on the information gathering and summarization aspect of such a large language model. In many cases, ChatGPT tends to hallucinate, prioritizing coherency over accuracy. This can be due to the variance of internet information found in the training data. Formal databases, on the other hand, provide rigor that GPT misses out on; however, they have a steep learning curve and are difficult to use due to complex query syntax.

Our project intends to combine the two, utilizing GPT as an intermediary to a formal database, getting answers quickly and concisely without sacrificing accuracy. Through converting a user's query to a SPARQL query, we would then use it in a formal database to get results, and then use GPT to interpret these more precise results in English. Our audience are general users.


Questions that the RDF database can answer:
How tall is ___?
How old is ____?
What is the capital of ____?
The population of ?

Uses Firebase, Open AI 4, Next.js.

Services contains all externals services we use? App contains all the UI.
## How to run
```npm run dev```

## Install dependencies
```npm install```

## How to deploy
```npm run deploy```
