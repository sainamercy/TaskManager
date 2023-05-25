# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:

puts "seeding"

  # create a user1 data
  User.create(
    username: "TestUser",
    password: "password",
    email: "user@mail.com"
  )

  Todo.create(
    user_id: 1,
    priority: 2,
    status: 0,
    title: "Update website content",
    description: "Review and update the content on the company website to reflect recent changes and improve SEO. Update product descriptions, about us page, and blog posts.",
  )
  Todo.create(
    user_id: 1,
    priority: 1,
    status: 1,
    title: "Conduct market research",
    description: "Conduct market research to identify potential customer segments and gather insights on competitors. Analyze market trends, customer preferences, and develop a comprehensive report."
  )
  Todo.create(
    user_id: 1,
    priority: 2,
    status: 2,
    title: "Schedule team meeting",
    description: "Coordinate and schedule a team meeting to discuss upcoming projects, assign tasks, and address any issues or concerns. Share the meeting agenda and ensure all team members are available."
  )
  Todo.create(
    user_id: 1,
    priority: 2,
    status: 0,
    title: "Review budget proposal",
    description: "Carefully review and analyze the budget proposal for the upcoming fiscal year. Identify areas for cost optimization and provide recommendations to the finance department."
  )
  Todo.create(
    user_id: 1,
    priority: 0,
    status: 1,
    title: "Organize team-building event",
    description: "Plan and organize a team-building event to foster better collaboration and boost team morale. Research suitable venues, coordinate logistics, and arrange team-building activities"
  )
  Todo.create(
    user_id: 1,
    priority: 1,
    status: 0,
    title: "Conduct employee performance evaluations",
    description: "Conduct performance evaluations for team members, providing constructive feedback and setting goals for improvement. Document evaluation results and schedule individual feedback sessions."
  )
  Todo.create(
    user_id: 1,
    priority: 0,
    status: 1,
    title: "Create social media content calendar",
    description:" Develop a social media content calendar for the next month, including engaging posts, graphics, and relevant hashtags. Coordinate with the marketing team for app"
  )
  Todo.create(
    user_id: 1,
    priority: 2,
    status: 2,
    title: "Upgrade network infrastructure",
    description: "Assess the current network infrastructure and plan an upgrade to improve speed, security, and scalability. Coordinate with the IT team and external vendors as necessary"
  )
  Todo.create(
    user_id: 1,
    priority: 1,
    status: 2,
    title: "Prepare sales presentation",
    description: "Prepare a compelling sales presentation for an upcoming client meeting. Research the client's needs, highlight product benefits, and create visually appealing slides"
  )
  Todo.create(
    user_id: 1,
    priority: 0,
    status: 0,
    title: "Implement new feature",
    description: "Develop and implement a new feature requested by customers. Conduct necessary coding, testing, and ensure compatibility across different platforms and devices."
  )
 

puts "done seeding"