db.createUser(
  {
    user: "colin",
    pwd: "pw11101",
    roles: [
      {
        role: "readWrite",
        db: "ctchan-db"
      }
    ]
  }
)
