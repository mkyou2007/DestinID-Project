from flask import Flask, jsonify
import pandas as pd

app = Flask(__name__)

# Load data dari CSV dengan encoding latin1
data_path = "c:/Users/danie/OneDrive/Documents/GitHub/DestinID-Project/mechine-learning/Underrated_Destinations.csv"
destinations = pd.read_csv(data_path, encoding='latin1')

# Endpoint rekomendasi
@app.route('/api/recommendations', methods=['GET'])
def get_recommendations():
    try:
        # Ambil 5 destinasi dengan rating tertinggi
        top_destinations = destinations.sort_values(by="Rating", ascending=False).head(5)
        recommendations = top_destinations[["Name", "Description", "Rating", "Latitude", "Longitude", "Category"]].to_dict(orient="records")
        return jsonify(recommendations), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5001, debug=True)