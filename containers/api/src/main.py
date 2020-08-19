from flask import (
    Blueprint,
)


bp = Blueprint('main', __name__)


@bp.route('/')
def main():
    return "Flask Gunicorn React Docker App"


@bp.route('/test', methods=['GET'])
def test():
    return {'data': 'colin at ctchan.me'}

@bp.route('/daisycabin', methods=['GET'])
def daisycabin():
    return {'data': 'colin@thedaisycabin.com'}
