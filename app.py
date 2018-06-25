import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func, desc
from flask import Flask, jsonify


engine = create_engine("sqlite://data.sqlite")

Base = automap_base()
Base.prepare(engine, reflect=True)

Disease_Data = Base.classes.disease_data 

session = Session(engine)

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
	results = session.query({disease_data.State : [disease_data.Cases_2010,disease_data.Cases_2011,disease_data.Cases_2012,disease_data.Cases_2013,disease_data.Cases_2014,disease_data.Cases_2015,disease_data.Cases_2016, disease_data.Cases_2017]}) 
	return jsonify(results)

@app.route("/api.v1.0/case_totals")
def totals():
	response = session.query(disease_data.State, disease_data.Total_By_State)
	stats = list(np.ravel(response))
	return jsonify (stats)



