# July 7, 2025

I'm going to document everything that arises so it's transparent 
with everyone who is going to look at this.

I'm trying to set up postgressql but I messed up and only set it locally in my pc at home, but I'm at my laptop at school. So to bypass this issue I'm going to use sqllite for now and then for tomorrow's focus I need to set up PostgresSQL for entire use everywhere.

Right now I'm going to be really amazed to see how this new .github folder works. This is literally something new I'm learning right now and I'm already amazed by it.

# July 8, 2025

Today is the day. I will be connecthing the frontend with the backend.

I'm going to make sure I learn how all this works hand-ons so it makes more sense to me.

Right now I'm just reading wht urls.py does in the `backend/core/urls.py`

I got it connect I literally forgot about the venv being necessary if I want anything to work.

Right now it's not working because I honestly forgot a lot about how the postgreSQL backend works haha...

psql -U your_username -d your_database

Right now trying to use the venv but it's amazing to see how changing the entire folder name is literally causing problems for it right now. I just got an error saying that because I changed the project to opensource_crm the venv doesn't work anymore.

Just figured out in the venv environment it doesn't automatically update the requirements.txt... Just made reflect on how I literally didn't know pip freeze was a command that I could've ran back at BlackRock... (most embarassing Week of my life).

But cool thing just found about is python-decouple ! New cool import instead of using a yaml config file.

I'm actually super amazed on how django works. With what we defined with the health check and how it connected and made a url at the top I'm literally amazed at what just happened, I was able to get a json output.

# July 9, 2025

Today is the next day I'm super excited to get started. I am going to focus on making sure I can finish more today.

The goal is to keep working straight through until I fall asleep. Only being productive till the very end.

I made the first page but I'm getting an error syaing it's not able to connect to the backend but the issue is I'm getting a 200 response so that mean its connecting just visuallY I did something wrong?

So I found the issue it's related to the browser blocking the request form React (on localhost:3000) to Django (on localhost:8000) due to CORS so now I'm going through the process of fixing that.

Okay I just added the stuff for CORS I installed the python module for django to help assist with it.

I always keep forgetting the command I'm suppose to write to start my django server but its

```bash
python manage.py runserver
```

This is to start the react project.

```bash
npm start
```


# July 10, 2025

Today we are going to focus on writing the CI/CD pipeline. 

Just ran the cmd

```bash

mkdir -p .github/workflows

```

What this mean is that -p creates parent directories as needed, and doesn't throw an error if the directory already exists.