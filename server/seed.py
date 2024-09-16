from app import app, db
from models import Admin

with app.app_context():
    # Clear existing data
    db.drop_all()
    db.create_all()
    
    # Add new admins
    admin1 = Admin(name='Martin Wakaba', id_number=10001, password='adminpass1')
    admin2 = Admin(name='Mathew Ndirangu', id_number=10002, password='adminpass2')
    admin3 = Admin(name='Mercy Njambi', id_number=10003, password='adminpass3')
    admin4 = Admin(name='Timothy Barasa', id_number=10004, password='adminpass4')

    db.session.add(admin1)
    db.session.add(admin2)
    db.session.add(admin3)
    db.session.add(admin4)
    db.session.commit()

    print("Admins have been seeded.")