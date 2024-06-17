# utils.py

from bson.objectid import ObjectId

def convert_object_id(doc):
    if '_id' in doc:
        doc['_id'] = str(doc['_id'])
    return doc
