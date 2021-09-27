#!/usr/bin/env python3

from app.db.session import get_db
from app.db.crud import create_user
from app.db.schemas import UserCreate
from app.db.session import SessionLocal


def init() -> None:
    db = SessionLocal()

    create_user(
        db,
        UserCreate(
            email="admin@pos.com",
            password="password",
            is_active=True,
            is_superuser=True,
        ),
    )

    create_user(
        db,
        UserCreate(
            email="paul@pos.com",
            password="password",
            is_active=True,
            is_superuser=False,
        ),
    )


if __name__ == "__main__":
    print("Creating superuser admin@pos.com")
    init()
    print("Superuser created")
