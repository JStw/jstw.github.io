---
title: Create a Serverless API with AWS - Part 2
date: "2020-05-30T15:00:03.284Z"
description: "How to create a serverless API in AWS - Part 2 (The Lambda functions)"
---

Hey folks! If you didn't read the previous post, I suggest you to [read it](./../serverless-api-with-lambda-part-1)  before continuing. If you did, let's continue :)

Ok so now, we are our beautiful database which only asking to be queried :D 

###First step: define our Lambda Role

Yeah I know, you wanted to start coding a little bit! But you have to wait a little bit :)

If you remember in our architecture schema :

![Architecture](../serverless-api-with-lambda-part-1/archi.PNG)

Our client will query our API Gateway, and the API Gateway will invoke some Lambda Functions. Fina the lambda functions will query the DynamoDB table and returns some results.

To allow our Lambdas to do that, we will need an IAM role which allow these API actions.

> If you want to know what are the IAM roles, why we need them, I'll provide you the link to the  [IAM AWS Official Documentation](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html). 

Navigate to the ÌAM Service through `Security, Identity, & Compliance > IAM`

Before creating our new role, we will create our policy which will be used in our IAM Role. Create a new policy by clicking on `Policies > Create Policy`.

> By default, an explicit deny is set to all resources created in AWS. You must grant permissions via IAM Policies. and attach them to your resources. In you want more informations about IAM Roles, Policies, Groups, have a look [to the officiel documentation of IAM](https://docs.aws.amazon.com/IAM/latest/UserGuide/id.html).

Choose the `JSON` editor tab. Once it's done, you can copy paste this following policy :
```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "dynamodb:Query",
                "dynamodb:DeleteItem",
                "dynamodb:GetItem",
                "dynamodb:PutItem",
                "dynamodb:Scan",
                "dynamodb:UpdateItem"
            ],
            "Resource": [
                "arn:aws:dynamodb:*:*:table/*/index/*",
                "arn:aws:dynamodb:<< put your region here >>:<< insert your account id here >>:table/blog"
            ]
        },
        {
            "Effect": "Allow",
            "Action": [
                "lambda:InvokeFunction"
            ],
            "Resource": "*"
        }
    ]
}
```

> Do not forget to change the **region** and the **account id** inside the **Resource arn** bloc. The region is the one selected in the AWS Console nav bar, and you can find your account id by checking in your IAM Dashboard, the IAM users sign-in link.

Finally, you can hit the Next button to review your policy, add a name and create your policy. It should should looks like this :

![IAM Policy](iampolicy.PNG)

Let me explain a little bit what this policy does. The first `Effect` will allow our resources (lambdas) to make some basics dynamodb execution calls like Query, Scan or PutItem etc. For this specific actions, we specify also the ARNs of our DynamoDB table/indexes.

> You should follow the [Principle of Least Privileges](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html#grant-least-privilege) in AWS. It's one a best practice to follow.

I will not explain the second effect bloc (the lambda:InvokeFunction) for now. I'll keep it for later ;)

Ok so now our IAM Policy has been created and we can finally create our IAM Role. Go back to the IAM Dashboard by clicking on `Services > Security, Identity & Compliance > IAM`. Click on `Roles > Create a role`.

Once is down, keep the first selected option (type of trusted entity) which is normally AWS service, chose the use case `Lambda` and click to `Next: Permissions`. Now we just have to search our policy previously created, so just type the name of the policy you just created and select it.

![IAM Policy Role](policyrole.PNG)

You can now click on the `Next: Tags` and click on `Next: Review` to finally give a name to your role and create it.

![IAM Role created](createrole.PNG)

Good job! Your role is now ready to be used. I think it's time for coding!

You can now navigate to the Lambda Service trough: `Services > Compute > Lambda`.

###Second step: Create our lambda functions

We will start to create a first Lambda Function which will basically read out the content of our DynamoDB blog table.

So hit the `Create Function` button and keep the selected creation option (Author from scratch). Choose a name for your Lambda Function, in this case I will name it `GetArticles` and go for the `Python 3.8` language runtime.

Before creating our function, one last important step is to select our IAM Role previously created. Open the Permissions just below, click on `Use an existing role` and select your service role from the selected list like below:

![Lambda use role](lambdarole.PNG)

Hit the create function button, and you will be redirected your Lambda.

Ok so, in this Lambda, we just want to retrieve all our Articles from the DynamoDB table. For that, we can use the `scan` operation that will just basically reads every items in our table. (More information [here](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Scan.html) about Scan.)

```python
# Boto is the Amazon Web Services (AWS) SDK for Python
import boto3

# To interact with DynamoDB, I just need to specity what resource I will use from boto3 (here: dynamodb)
dynamodb = boto3.resource('dynamodb')

# Now I specify which table in DynamoDB I want to interact with.
table = dynamodb.Table('blog')
    
def lambda_handler(event, context):
    try:
        # Here, I will use a scan operation, to retrieve ALL my table items.
        response = table.scan()
        
        # Finally, I just return all the Items I found.
        return response['Items']
    except Exception as e:
        # If an exception was thrown, I just catch it to print a log, and then I raise the error.
        print('An error occured while retrieving Movies table.')
        raise e
```

No more explanations needed for this code, its quite simple we just import the boto3 library to use the dynamodb client. We surround our scan operation with the try/catch operator and finally we return the Items.

You can now this Lambda code by clicking `Save` at the top of the page, and now it's time for testing :)

Just near the Save button, you have the possibility to create a `Test Event` to trigger our function.

> FYI: Every AWS Lambda function contains at least 2 parameters :

> **event** – AWS Lambda uses this parameter to pass in event data to the handler.

> **context** – AWS Lambda uses this parameter to provide runtime information to your handler.

Click on the `Test` button, choose an event name (For example: TestGetItems) and leave the rest as is.

Your `TestGetItems` is now part of your tests events. Ready to test your lambda ? Push the test button again ;)

Normally you should see a success box like this :

![Lambda GetArticles Success](getarticleslambdatest.PNG)

Well, I think we can claim our first beer, we successfully created our first lambda which read in our DynamoDB, congrats!

### Third step: Create the other lambda functions

The goal of this article is to show you the basic operation we can do thanks to the interaction between Lambda and DynamoDB. Remember, the goal is to call these Lambda functions with an API.

So this is what is remaning for our Lambda :
- Retrieve all blog articles (GetArticles - done)
- Find an article by title and category (FindByTitleAndCategory - TBD)
- Update an article (UpdateArticle - TBD)
- Delete an article (DeleteArticle - TBD)

Let's do this! Go back to the main Lambda screen, by clicking `Services > Compute > Lambda`. Do the same job you did for the GetArticles Lambda, by clicking `Create Function`.

This time, we will tackle our second lambda in the list, the `FindByTitleAndCategory`. Your lambda settings should look likes this :

![Lambda FindBy Settings](findbytitlecategory.PNG)

> Do not forget to attach the MyDynamoDBRoleForLambdas role.

Let's create this function, and copy paste this Python Code :

```python
import boto3
# This new import will be use to specify which DynamoDB Key we use in the KeyConditionExpression.
from boto3.dynamodb.conditions import Key
 
client = boto3.resource('dynamodb')
table = client.Table('blog')
    
def lambda_handler(event, context):
    try:
        # I'll explain you later why we take these values from the event "pathParameters" property.
        title = event['pathParameters']['title']
        category = event['pathParameters']['category']
        
        # This time, we will use the query operation.
        response = table.query(
            ProjectionExpression="title, category, author, content, createdAt",
            KeyConditionExpression=Key('title').eq(title) & Key('category').eq(category)
        )
       
        return response['Items']
    except Exception as e:
        print('An error occurred while retrieving an item in blog table.')
        raise e
```

In this lambda we just need to specify which fields we want to see in our response thanks to the `ProjectionExpression`.

The second one (the more important) is the `KeyConditionExpression` which will determinate our conditional query expression (which article we want to query).

> You can find [here](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Query.html) the official documentation of a Query operation.

Save your function, and add a new test event. This time our test event, will be a little bit different, because we will update the JSON provided to our handler :

![FindBy test event](findbytest.PNG)

Once is created, just hit the Test button and let's see what we received :)

![FindBy test event](findbyresult.PNG)

This time, we just received 1 item based from the value passed in the test event. Our FindBy Lambda is now operational!

Let's move on, and tackle the `CreateArticle` one, create a new Lambda function again (Author From Scratch, Python 3.8 Runetime, and our DynamoDB role) and provide this following code :
```python
import json
import boto3
from datetime import datetime
from botocore.exceptions import ClientError
        
dynamodb_client = boto3.resource('dynamodb')
table = dynamodb_client.Table('blog')

lambda_client = boto3.client('lambda')
    
def lambda_handler(event, context):
    try:
        # here, we want to handle both cases: if we receive a body as string, or a body as object.
        if type(event['body']) == str:
            body = json.loads(event['body'])
        else:
            body = event['body']
        
        # we extract this 2 properties to retrive the item inserted after.
        title = body['author']
        category = body['category']
        
        createdAt = datetime.now().strftime('%Y-%m-%dT%H:%M:%SZ')
        
        response = table.put_item(
            Item={
                'title': title,
                'category': category,
                'author': body['author'],
                'content': body['content'],
                'createdAt': createdAt
            }
        )
        
        # According to the documentation, We can set a ReturnValues='ALL_NEW' property in our PutItem operation.
        # But the the ALL_NEW isn't accepted for put_item.
        
        # The other solution is to re-query our database to get the item created.
        
        # But, re-query the DB is just re-triggering the same Job we did
        # in our FindByTitleCategory lambda.
        
        # We have the possibility to invoke another Lambda in our Lambda
        invoke_response = lambda_client.invoke(
            FunctionName="FindByTitleCategory",
            InvocationType='RequestResponse',
            Payload=json.dumps({"pathParameters": {"title": title, "category": category}})
        )
        
        # Finally, we need to convert our response in an object and return the
        # payload received from our Lambda
        item = json.loads(invoke_response['Payload'].read().decode("utf-8"))
    except ClientError as e:
        print('An error occured while trying to insert a new movie')
        raise e
        
    return item
```

> Do you remember in our Policy we added an Effect Allow on the InvokeFunction api call :)

Before configuring our test event, just some clarifications about this portion of code: 
- First, to retrieve the body sent by the POST action, e want to handle both scenarios use cases (object and stringified object). That's why we check the type of the `event body`.
- Then, we use the `put_item` operation by simply passing the Item that we want to insert in database.
- Finally, to retrieve the item created, we just use the Lambda Function we created to retrieve an article by his title and his category. But you can also directly query the database like we did in the Lambda, it's also possible

Ok so let's create our test event :
![FindBy test event](createarticletest.PNG)

Before testing our Lambda Function, this one is a little bit more "bigger" than the other one, so it's possible to have some timeout when its triggered.

I suggest for this example to augment a little bit the "default" lambda settings by increasing a little bit the default timeout timer, up 3 to 10 seconds. 

![Increase Lambda Timeout](lambdatimeout.PNG)

> I provide you a great article for [choosing the right amount of memory for an AWS lambda](https://medium.com/@raupach/choosing-the-right-amount-of-memory-for-your-aws-lambda-function-99615ddf75dd)

I think we can test our Create Lambda function, hit the Test button and you should have this output :

![Create Article success](createresult.PNG)

Ok we did the most difficult Lambda creation, the other ones will be more easier :)

Let's tackle the `UpdateArticle` one by creating a new Lambda and provide this code :

```python
import json
import boto3
from botocore.exceptions import ClientError
from boto3.dynamodb.conditions import Key
        
dynamodb_client = boto3.resource('dynamodb')
table = dynamodb_client.Table('blog')
    
def lambda_handler(event, context):
    try:
        if type(event['body']) == str:
            body = json.loads(event['body'])
        else:
            body = event['body']
        
        # here we retrieve the same parameters as the FindBy lambda
        # to identify what item to update.
        title = event['pathParameters']['title']
        category = event['pathParameters']['category']
        
        # we will use the update_item in this case
        response = table.update_item(
            Key={
                'title': title,
                'category': category
            },
            UpdateExpression="set content = :content, author = :author",
            ConditionExpression="title = :title AND category = :category",
            ExpressionAttributeValues={
                ':title': title,
                ':category': category,
                ':content': body['content'],
                ':author': body['author']
            },
            ReturnValues="ALL_NEW"
        )
        
        return response['Attributes']
    except ClientError as e:
        if e.response['Error']['Code'] == "ConditionalCheckFailedException":
            print(e.response['Error']['Message'])
        else:
            raise e
```

For this portion of code, we will need the primary key identifier to determinate which object we want to update.

Remember, when we created our DynamoDB table, we specified a **partition key** (title), and a **sort key** (category) which represent our **primary key**.

It means that if we want to make some actions in a particular item in our table, we have to specify these two properties.

Another good news is, we can specify also the `ReturnValues="ALL_NEW"` that will return the complete object updated.

In this lambda, I decided to update my item with Conditional Expressions. It means that it will update my item only if its respect the **ConditionsExpressions**. If not, it will raise a **ConditionalCheckFailedException**.

> You can have a look on what are [conditions expressions](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.ConditionExpressions.html).

Let's configure our test event and test it just after :
![Update Article Test Event](updatetest.PNG)

As you can see, this is what we received :
![Update Article Test Event](updatesuccess.PNG)

And if we check our DynamoDB blog table :
![Blog Table Updated](tableupdated.PNG)

Finally, we will tackle the last one, create the DeleteArticle Lambda Function and provide this code :

```python
import json
import boto3
from botocore.exceptions import ClientError
from boto3.dynamodb.conditions import Key
        
dynamodb_client = boto3.resource('dynamodb')
table = dynamodb_client.Table('blog')
    
def lambda_handler(event, context):
    try:
        title = event['pathParameters']['title']
        category = event['pathParameters']['category']
        
        response = table.delete_item(
            Key={
                'title': title,
                'category': category
            }
        )
        
        return response
    except ClientError as e:
        print(e.response['Error']['Message'])
        raise e
```

And the test event :
![Delete Event](deleteevent.PNG)

Let's try your Delete Lambda function and your item is now deleted from your table :
![Table after delete](tableafterdelete.PNG)

### Let's summarize
- We created our IAM **admin** user
- With the admin user, we created the **policy** that **allows our Lambdas to interact wich our DynamoDB**.
- We **attached this policy to our IAM Role**.
- We created **5** Lambda Functions :
   - **GetArticles** (which list all articles from blog table)
   - **FinByTitleAndCategory** (which list an article based from his primary key)
   - **CreateArticle** (which create an article item in blog table)
   - **UpdateArticle** (which update an article based from his primary key)
   - **DeleteArticle** (which delete an article based from his primary key)
   
Woah, we did a great job, congrats. Let's move on now to the latest part, the [creation of our API Gateway](../serverless-api-with-lambda-part-3).