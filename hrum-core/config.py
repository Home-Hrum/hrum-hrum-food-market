import os
from dotenv import load_dotenv

load_dotenv()


def get_database_uri() -> str:
    return f"{os.getenv('DB')}+" \
           f"{os.getenv('DB_DRIVER')}://" \
           f"{os.getenv('DB_USER')}:" \
           f"{os.getenv('DB_PASSWD')}@" \
           f"{os.getenv('DB_HOST')}:" \
           f"{os.getenv('DB_PORT')}/" \
           f"{os.getenv('DB_NAME')}"


class Config:
    SECRET_KEY = os.getenv("SECRET_KEY")
    DATABASE_URI = get_database_uri()


class ProductionConfig(Config):
    DEBUG = False


class DevelopmentConfig(Config):
    DEBUG = True
    TEMPLATES_AUTO_RELOAD = True
    EXPLAIN_TEMPLATE_LOADING = True
