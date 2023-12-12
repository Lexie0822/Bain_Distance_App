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
- Project Leader - Tanner Barney 

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

I leverage MERN (MongoDB, Express.js, React, Node.js) stack for the Address Mapping Delivery Application, let's create a detailed response that aligns with the specific technologies:


# Address-Mapping-Delivery-Application-Bain Challenge Response

## 1. Software Components for the Prototype

### Essential Components in MERN Stack
For the prototype, using the MERN stack, the essential software components are:

1. **Client-Side Tier** (React): 
   - **Customer UI Application**: Enables customers to place and track orders.
   - **Delivery Agent UI Application**: Allows agents to manage and update order statuses.

2. **Server-Side Tier** (Node.js, Express.js): 
   - **Authentication Service** (Express.js, JWT): Manages secure user authentication.
   - **Order Management Service** (Express.js): Processes and manages orders.
   - **Agent Management Service** (Express.js): Handles agent profiles and assignments.
   - **Notification Service** (Express.js, WebSockets): Real-time updates for customers and agents.

3. **Data Management Tier** (MongoDB): 
   - **NoSQL Database**: Stores user data, order details, and other transactional information.

### Interrelations
- React-based UI applications interact with Express.js services via HTTP/RESTful APIs.
- Node.js backend ensures efficient handling of concurrent requests.
- MongoDB offers flexible data storage, quick retrieval, and scalability.

### Diagram
![Diagram]([attachment://file-e6AjzYYD6hAuRSi0Jr5d6y03.png](https://drive.google.com/uc?id=1L965-rYUnU1_o9ZEMNHFSL4toRang2wrhttps://drive.google.com/file/d/1YSNbTuI-sxaOS_YZccIckw4NC1Nhc4Sd/view?usp=drive_link)





## 2. Architecture Choice: Microservices with MERN Stack

### Rationale
- **Scalability & Flexibility**: Microservices architecture, combined with the MERN stack, facilitates scaling specific parts of the application as needed.
- **Modular Development & Maintenance**: Eases the development and updating of individual services without impacting the entire system.
- **Community & Ecosystem**: Strong community support and rich ecosystem for each MERN component.

## 3. Development Methodology: Agile with Scrum

### Justification
- **Iterative Development**: Allows for regular evaluation and incorporation of feedback.
- **Flexibility & Adaptability**: Agile's flexibility is ideal for a fast-paced, evolving project like a delivery application.
- **Sprint Structure**: Incorporates bi-weekly sprints, regular stand-ups, and sprint reviews for continuous improvement.

## 4. Git Workflow

### Strategy
- **Feature Branch Workflow**: Development occurs in feature branches, merged into a development branch, and then to the main branch.
- **Code Reviews & Pull Requests**: Ensures code quality and collaborative improvement.
- **CI/CD Integration**: Automated testing and deployment, using tools like Jenkins or GitHub Actions.

## 5. Team Composition and Expansion

### During Prototype
- **Current Team Sufficiency**: The multi-disciplinary nature of the existing team covers the prototype phase.

### Post-Prototype
- **Potential Additions**: 
  - **DevOps Specialist**: For optimizing deployment and managing cloud infrastructure.
  - **Quality Assurance Engineer**: To enhance testing strategies and processes.

## 6. Additional Robust and Efficient Development Considerations

### Risk Management
- Ongoing risk assessments and mitigation plans.

### Performance Metrics
- Focusing on response times, error rates, and user engagement metrics.

### User Feedback and Testing
- Channels for user feedback and comprehensive testing, including unit, integration, and user acceptance tests.

### Documentation and Security
- Emphasis on thorough documentation and adherence to security best practices, particularly for data protection and authentication.
