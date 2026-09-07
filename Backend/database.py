from sqlalchemy import create_engine
from sqlalchemy.engine import URL
from sqlalchemy.orm import sessionmaker, declarative_base

url_object = URL.create(
    "mysql+pymysql",
    username="root",
    password="root@0320",   # raw password, no encoding needed here
    host="localhost",
    port=3306,
    database="guidesphere",
)
engine = create_engine(url_object)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()