# Address-Mapping-Delivery-Application-Bain Challenge
Full Stack Developer assessment - Address Mapping Delivery Application Challenge
This documents aims to answer the challenge questions.

1. Tell us what pieces of software you think are necessary to develop for the working prototype and how they are related. Support yourself with a diagram if you think necessary.

2. Tell us about the type of architecture you chose for question (1). Monolithic? Micro-services? Any intermediate? Other? Comment on what you based to make this decision.

3. Describe the work methodology you would use for development. It can be some known methodology (Scrum, XP, RUP), an adaptation, or a mixture between several methodologies. Whatever your experience has shown you works. Tell us why you think this form is appropriate for our problem.

4. Describe the workflow you would use to collaborate using Git. As with (3), you can use something familiar or an adaptation.

5. Do you think it is necessary to add any extra member to the team during the development of the prototype? What would your role be? Do you think it would be necessary to add new members after the prototype phase? When and why?

6. What other considerations would you have to make the development process robust
and efficient?

# Context

A client wants to prevent being outperformed by his competitors during post-pandemic situation by offering a Delivery app as a new channel for their customers. This document present a short term and a long term proposals, aiming to experiment with a working prototype for 3 months, gather information and decide on how to procced with the long term solution. 


# Goal
The goal of this document is to present a technical design to create a Delivery App that will allow customers to place orders, and delivery agents to handle those orders.

# Stakeholders

- Impact Lead - #Name
- UX/UI Designer - #Name
- Data Scientist - #Name
- Machine Learning Engineer - #Name 
- Project Leader - Diego Garate

# Use Cases

MVP use cases

1. As a customer I want to place orders.
2. As a customer I want to be able to cancel Orders.
3. As a customer I want to select the delivery address
4. As a delivery agent I want to see my active/assigned orders.
5. As a delivery agent I want to be able to finish orders.
6. As a delivery agent I want to be able to cancel orders.
7. As a delivery agent I want to have a personal profile.

# Out Of Scope on short term solution
- We won't manage customers profiles.
- We won't manage payment services.
- We won't be automatically integrated with finance systems, if they exist.

# Assumptions
- We have access to the following APIs:
  - Georeference information.
  - Customer product catalog availability.
  - We will start the experiment with 1 client locale.


# Proposal

We will have a mix of a basic 3 tier architecture system divided by usage (Customer vs Delivery Agent) and a microservices architecture divided by domain, to enhance scalability, fast product development, mitigate down-time risks, and remain loosely coupled. We can observer a long term solution on the design, and with red filled squares the MVP we will experiment with.

![](https://drive.google.com/uc?id=1L965-rYUnU1_o9ZEMNHFSL4toRang2wr)


## MVP Software pieces:

1) Client-side tier: 2 pieces of software (Customer, Delivery Agent UI Applications)
2) Server-side tier: 8 pieces of software (2 Authe/Autho service, Catalog Service, Order service, Agent CRUD Service, Message Broker, Agent Notification service, Customer Notification Service, Delivery Engine)
3) Data Management tier: 1 piece of software (Relational DB).

## Long term solution software pieces:

To enhance customer experience we will add the following services:
- Customers CRUD service.- To manage customer profiles
- Payment Service.- To provide debit/credit card payments online
- Tracking Service.- To keep customer updated of his order.

To be able to scale (Several business locations) we will implement/expand:

- Locale Service .- Service that will have the products that a given business locale offers, and the region they support.
- Expand Data Management tier. (Relational or No relational DB as needed)

# Implementation 
## Methodology
We will use a mix of Scrum to take advantage of the flexibility of agile development. In my experience what works better is the following configurations: 2 weeks sprint, 1 Retro per month, 1 Demo per sprint, Planning 1 day before starting the sprint and Grooming 3 days before starting the sprints. Daily's at mid day. 
We will combine this agile methodology with Kanban dashboard to keep track of the progress.

With this combination we can keep track on how the implementation is going, remove major blocks, call out risk we encounter, and keep flexibility to changes.

## Workflow

We will create a pipeline that contains at least 3 stages: 1) Development, 2) Gamma, 3) Production.

To be able to collaboratively push code to production we will use a git repository with a mainline, that triggers automatics deployments (CD/CI) until gamma. Production changes should be manually approved, with some safety measure as checking repository version is clean, Unit/Functional/Integration tests are passing, it is not end of a day, or weekend, etc.

Base on my experience no code should be merge without a peer review. except on emergency events. We should avoid branching on server repository (local branches are okay)

We can make our pipeline full CD/CI (all the way to prod) once we have more resources to handle issues 24/7.

## Workload - Resource

It will depend on the time to market we aim and discuss with the client. I can see some developemt domains we can parallelize if we need to go faster. 

I would at maximum allocate 3 Software Developers, with 1 of them being the project leader I could take that role to keep the team aligned, review the code, and collaborate implementing the critical path:
1) Customer Domain (Front/Back) 
2) Delivery Agent Domain (Front/Back) 
3) Infrastructure and Data Domain.

Base on my experience 1 UX (Dev Designer), 1 Impact Lead, 1 DS and 1 MLE are enough for consultations during the prototype phase.

## Other considerations
I would advice to take into consideration the Impact Lead, DS, MLE knowledge and information requirements to make the experiment more efficient. For example, what business metrics do we need to gather? what information should we store? Which are the criterias to consider this a succesful experiment.

Also, on the operational level we need to decide what failure conditions we will handle, monitor and alarm on. What is the testing plan (Unit testing, functional test, manual testing), Error logging plan, Asses security concerns using procedures and policy of our client, and mitigate/communicate any risk we encounter.

Other additional consideration I would suggest are internationalization (Are we going to have global presence?), Accesibility features (Sequential structure, Screen readers support, use of alternative text. Do we test accesibility features?)