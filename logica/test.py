from logica.Models import usuarios as u

def create_user(nick_name, full_name):
    user = u.User(nick_name=nick_name, full_name=full_name)
    try:
        d.session.add(user)
        d.session.commit()
        return f"sucessfull create user{user.nick_name}"
    except Exception as error:
        d.session.rollback()
        raise Exception(error)
    