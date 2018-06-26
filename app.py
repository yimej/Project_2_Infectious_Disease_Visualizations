import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func, desc
from flask import Flask, jsonify
import json
import numpy as np


engine = create_engine("sqlite:///westnile_1.sqlite")

Base = automap_base()
Base.prepare(engine, reflect=True)

Disease_Data = Base.classes.disease_data 

session = Session(engine)

app = Flask(__name__)

@app.route("/")
def home():
	return(
		f"Welcome to the West Nile Virus Case Report API <br>"
		f"Available routes: <br>"
		f"/api/v1.0/Cases_per_year <br>"
		f"/api/v1.0/case_totals <br>"
		f"/api/v1.0/json_combined <br>")


@app.route("/api/v1.0/Cases_per_year")
def cases():
	WNV_10 = []	
	results_10 = session.query({disease_data.State : [disease_data.Cases_2010, disease_data.Rate_2010]})
	WNV_10.append(results_10) 
	print(Cases_10)

	WNV_11 = []	
	results_11 = session.query({disease_data.State : [disease_data.Cases_2011, disease_data.Rate_2011]})
	WNV_11.append(results_11) 
	print(WNV_11)

	WNV_12 = []	
	results_12 = session.query({disease_data.State : [disease_data.Cases_2012, disease_data.Rate_2012]})
	WNV_12.append(results_12) 
	print(WNV_12)

	WNV_13 = []	
	results_13 = session.query({disease_data.State : [disease_data.Cases_2013, disease_data.Rate_2013]})
	WNV_13.append(results_13) 
	print(WNV_13)

	WNV_14 = []	
	results_14 = session.query({disease_data.State : [disease_data.Cases_2014, disease_data.Rate_2014]})
	WNV_14.append(results_14) 
	print(WNV_14)

	WNV_15 = []	
	results_15 = session.query({disease_data.State : [disease_data.Cases_2015, disease_data.Rate_2015]})
	WNV_15.append(results_15) 
	print(WNV_15)

	WNV_16 = []	
	results_16 = session.query({disease_data.State : [disease_data.Cases_2016, disease_data.Rate_2016]})
	WNV_16.append(results_16) 
	print(WNV_16)

	WNV_17 = []	
	results_17 = session.query({disease_data.State : [disease_data.Cases_2017, disease_data.Rate_2017]})
	WNV_10.append(results_17) 
	print(WNV_17)

	#return jsonify(results)

@app.route("/api/v1.0/case_totals")
def totals():
	response = session.query(disease_data.State, disease_data.Total_By_State)
	stats = list(np.ravel(response))
	return jsonify (stats)

@app.route("/api/v1.0/json_combined")
def combine():
#open state border json, conditionally match with state name, add value, print out json file per year
	
	years = [0, 1, 2, 3, 4, 5, 6, 7]

	for i in len(years):
		with open ("state_data.json") as f:
			State_data=json.load(f)

			if State_data.properties.name == WNV_1[i].State:
				State_data.feature.properties.case_num = WNV_1[i].Cases_201[i]
				State_data.feature.properties.case_rate = WNV_1[i].Rate_201[i]
			else:
				print("Not a match")

		with open('data_201[i].json', "w") as outfile:
			json.dump(outfile)

if __name__ == '__main__':
	app.run()












