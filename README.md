# Hang in There  

### Abstract:
[//]: <> (Briefly describe what you built and its features. What problem is the app solving? How does this application solve that problem?)

Hang In There is the perfect place to visit when you want some motivational content. 
The user has the option to display a randomized motivational poster with a unique image, title, and quote or create their own custom poster. The user can also save any poster and keep it in an easily accessible location for later viewing. Saved posters can be deleted by double clicking on the poster the user wishes to remove.

### Installation Instructions:
[//]: <> (What steps does a person have to take to get your app cloned down and running?)

1. Clone this repo down to your local machine
2. cd into the repository
3. Running `npm install` is not necessary
4. Open the live preview by running `open index.html`

### Preview of App:
[//]: <> (Provide ONE gif or screenshot of your application - choose the "coolest" piece of functionality to show off.)

### Context:
[//]: <> (Give some context for the project here. How long did you have to work on it? How far into the Turing program are you?)

We estimate that it took 12 hours to complete the project. We are on Week 2 of Mod 1 of the Turing Program.

### Contributors:
[//]: <> (Who worked on this application? Link to their GitHubs.)

### Learning Goals:
[//]: <> (What were the learning goals of this project? What tech did you work with?)

- Write clean, DRY JavaScript
	- Build out functionality using functions that show trends toward SRP
	- Manipulate the page after it has loaded adding, removing, and updating elements on the DOM
- Begin to understand the connection between HTML, CSS and JavaScript
	- Practice reading, understanding, and using provided code
- Build an understanding of writing code collaboratively
	- Document changes with atomic commits & thorough code reviews
	- Communicate, troubleshoot, and plan effectively as a team
	- Ensure all team members are able to be heard and contribute throughout the project

Tech Stack

- HTML
- CSS
- JavaScript

### Wins + Challenges:
[//]: <> (What are 2-3 wins you have from this project? What were some challenges you faced - and how did you get over them?)

Wins

1. All main iterations of the project were completed succesfully.

2. Git workflow processes improved each day we worked on the project.

Challenges

1.	We ran into a few bugs while writing the code for this project. For example, we found that when comparing the id of the poster to be saved against each id in the list of saved posters, the user could create two of the same custom posters, each with their own unique ids, and successfully save both of those posters, making it appear to the user that they could save duplicate posters.
We solved this problem but writing a more verbose, albeit longer, conditional expression that checks if the image, title, and quote of both posters match each other. 

2. Since the git workflow and sometimes asynchronous nature of coding on the same project from two different timezones is so new to us, it took some time and a few iterations of pull requests to feel more comfortable with the dynamic of working on code that must also work together.
The norm setting exercise really assisted in setting the general ground rules and work dynamic that would be shared while working on this project together, which acted as a guide for how we expected to work together.
