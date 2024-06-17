# app.py

from flask import Flask, jsonify, request
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
import config
from models import Book, Music, BookSchema, MusicSchema
from utils import convert_object_id

app = Flask(__name__)
app.config["MONGO_URI"] = config.MONGO_URI
mongo = PyMongo(app)

book_schema = BookSchema()
music_schema = MusicSchema()

@app.route('/')
def index():
    return "Welcome to the ASTRAPI 123!"

@app.route('/books', methods=['GET'])
def get_books():
    books = mongo.db.books.find()
    return jsonify([convert_object_id(book) for book in books])

@app.route('/books/<id>', methods=['GET'])
def get_book(id):
    book = mongo.db.books.find_one({"_id": ObjectId(id)})
    if book:
        return jsonify(convert_object_id(book))
    return jsonify({"error": "Book not found"}), 404

@app.route('/books', methods=['POST'])
def add_book():
    data = request.get_json()
    errors = book_schema.validate(data)
    if errors:
        return jsonify(errors), 400
    new_book = Book(**data)
    book_id = mongo.db.books.insert_one(new_book.__dict__).inserted_id
    new_book_record = mongo.db.books.find_one({"_id": ObjectId(book_id)})
    return jsonify(convert_object_id(new_book_record)), 201

@app.route('/music', methods=['GET'])
def get_music():
    music = mongo.db.music.find()
    return jsonify([convert_object_id(track) for track in music])

@app.route('/music/<id>', methods=['GET'])
def get_music_track(id):
    track = mongo.db.music.find_one({"_id": ObjectId(id)})
    if track:
        return jsonify(convert_object_id(track))
    return jsonify({"error": "Track not found"}), 404

@app.route('/music', methods=['POST'])
def add_music():
    data = request.get_json()
    errors = music_schema.validate(data)
    if errors:
        return jsonify(errors), 400
    new_music = Music(**data)
    track_id = mongo.db.music.insert_one(new_music.__dict__).inserted_id
    new_track_record = mongo.db.music.find_one({"_id": ObjectId(track_id)})
    return jsonify(convert_object_id(new_track_record)), 201

if __name__ == '__main__':
    app.run(debug=True)
