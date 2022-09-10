# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
# seed file is for populating the db
# use active record -> sql to apply to the db

# we need to reset before we create 
Trip.delete_all
User.delete_all 

# Sub.create(title: 'Food')
# Sub.create(title: 'Travel')
# Sub.create(title: 'Tech')

5.times do
  @user = User.create(
    # faker helps out with giving fake data
    title: Faker::TvShows::Friends.character
  )

  3.times do
    Trip.create(
      title: Faker::TvShows::Friends.quote,
      body: Faker::TvShows::Friends.location,
      user_id: @user.id
    )
