# models.py

from datetime import datetime
from marshmallow import Schema, fields, validate, ValidationError

class Book:
    def __init__(self, title, author, content, likes, published_date=None):
        self.title = title
        self.content = content
        self.author = author
        self.likes = likes or 0
        self.published_date = published_date or datetime.utcnow()

class Music:
    def __init__(self, title, link, author, likes, release_date=None):
        self.title = title
        self.link = link
        self.author = author
        self.release_date = release_date or datetime.utcnow()
        self.likes = likes or 0

class BookSchema(Schema):
    title = fields.String(required=True, validate=validate.Length(min=1))
    content = fields.String(required=True, validate=validate.Length(min=1))
    author = fields.String(required=True, validate=validate.Length(min=1))
    likes = fields.Integer()

class MusicSchema(Schema):
    title = fields.String(required=True, validate=validate.Length(min=1))
    author = fields.String(required=True, validate=validate.Length(min=1))
    link = fields.String(required=True, validate=validate.Length(min=1))
    release_date = fields.DateTime()
    likes = fields.Integer()
