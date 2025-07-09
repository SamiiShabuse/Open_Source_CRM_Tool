# July 7, 2025

I'm going to document everything that arises so it's transparent 
with everyone who is going to look at this.

I'm trying to set up postgressql but I messed up and only set it locally in my pc at home, but I'm at my laptop at school. So to bypass this issue I'm going to use sqllite for now and then for tomorrow's focus I need to set up PostgresSQL for entire use everywhere.

Right now I'm going to be really amazed to see how this new .github folder works. This is literally something new I'm learning right now and I'm already amazed by it.

# July 9, 2025

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