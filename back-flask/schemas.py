# schemas.py

from marshmallow import Schema, fields

class BookSchema(Schema):
    id = fields.Str(dump_only=True)
    title = fields.Str(required=True)
    author = fields.Str(required=True)
    content = fields.Str(required=True)
    likes = fields.Int()

class MusicTrackSchema(Schema):
    id = fields.Str(dump_only=True)
    title = fields.Str(required=True)
    author = fields.Str(required=True)
    link = fields.Str(required=True)
    likes = fields.Int()
