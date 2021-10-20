def create_classes(db):
    class apts(db.Model):
        __tablename__ = 'apts'

        id = db.Column(db.Integer, primary_key=True)
        posted = db.Column(db.String(64))
        post_title = db.Column(db.String(64))
        number_bedrooms = db.Column(db.Float)
        sqft = db.Column(db.Float)
        URL = db.Column(db.String(64))
        price = db.Column(db.Float)
        Latitude = db.Column(db.String(64))
        Longitude = db.Column(db.String(64))
        Zipcode = db.Column(db.Float)
        Neighborhood = db.Column(db.Float)

    return apts