import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from aqlalchemy import create_engine, func, desc
from flask import Flask, jsonify
import json


engine = create_engine("sqlite:///disease_data.sqlite")

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
		f"/api/v1.0/case_totals <br>"
		f"/api/v1.0/json_combined <br>")


@app.route("/api.v1.0/Cases_per_year")
def cases():
	Cases_10 = []	
	results_10 = session.query({disease_data.State : disease_data.Cases_2010})
	Cases_10.append(results_10) 
	print(Cases_10)

	Cases_11 = []	
	results_10 = session.query({disease_data.State : disease_data.Cases_2011})
	Cases_10.append(results_11) 
	print(Cases_11)

	Cases_12 = []	
	results_10 = session.query({disease_data.State : disease_data.Cases_2012})
	Cases_10.append(results_12) 
	print(Cases_12)

	Cases_13 = []	
	results_10 = session.query({disease_data.State : disease_data.Cases_2013})
	Cases_10.append(results_13) 
	print(Cases_13)

	Cases_14 = []	
	results_10 = session.query({disease_data.State : disease_data.Cases_2014})
	Cases_10.append(results_14) 
	print(Cases_14)

	Cases_15 = []	
	results_10 = session.query({disease_data.State : disease_data.Cases_2015})
	Cases_10.append(results_15) 
	print(Cases_15)

	Cases_16 = []	
	results_10 = session.query({disease_data.State : disease_data.Cases_2016})
	Cases_10.append(results_16) 
	print(Cases_16)

	Cases_17 = []	
	results_10 = session.query({disease_data.State : disease_data.Cases_2017})
	Cases_10.append(results_17) 
	print(Cases_17)

	return jsonify(results)

@app.route("/api.v1.0/case_totals")
def totals():
	response = session.query(disease_data.State, disease_data.Total_By_State)
	stats = list(np.ravel(response))
	return jsonify (stats)

@app.route("/api.v1.0/json_combined")
def combine():
#open state border json, conditionally match with state name, add value, print out json file per year
	
	years = [0, 1, 2, 3, 4, 5, 6, 7]

	for i in len(years):
		with open ("test.json") as f:
			data=json.load(f)

			if data.properties.State == Cases_1[i].State:
				data.feature.properties.case_rate = Cases_1[i].Cases_[i]
			else:
				print("Not a match")

		with open('test_201[i].json', "w") as outfile:
			json.dump(outfile)












