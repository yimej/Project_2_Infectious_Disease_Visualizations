import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from aqlalchemy import create_engine, func, desc
from flask import Flask, jsonify


engine = create_engine("sqlite://data.sqlite")

Base = automap_base()
Base.prepare(engine, reflect=True)

Disease_Data = Base.classes.disease_data

session = Session (engine)

app = Flask(__name__)

@app.route("/")
def home():
	return(
		f"Welcome to the West Nile Virus Case Report API <br>"
		f"Availbe routes: <br>"
		f"Cases_per_year <br>"
		f"/api/v1.0/case_totals <br>")


@app.route("/api.v1.0/Cases_per_year")
def cases():
	results=[]
	for row in data:
		if Disease_Data.State[i] != Disease_Data.State[i+1]:
			results.append({Disease_Data.State[i]: CountValue[i],EndDate[i]})
		else:
			next row
		return jsonify(results)




