from sqlalchemy import create_engine

def connect_to_db(user, pass_, bd, plugi_bd="mysql+sqlbd"):
                string_db = f"{pugin_db}//{user}"
                engine = create_engine(string_db, echo=True)
                return engine