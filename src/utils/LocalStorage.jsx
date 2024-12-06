const employees = [
  {
    ID: "E001",
    Email: "employee1@example.com",
    Password: "123",
    firstname: "John",
    taskNumbers: {
      active: 3,
      newtask: 2,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newtask: true,
        completed: false,
        failed: false,
        taskTitle: "Complete Sales Report",
        taskDescription: "Prepare the monthly sales report for the department.",
        taskDate: "2024-11-01",
        category: "Sales",
        taskPriority: "High",
        taskColors: "#007bff",
        taskPriorityColors: "#d32f2f",
      },
      {
        active: true,
        newtask: false,
        completed: true,
        failed: false,
        taskTitle: "Client Meeting",
        taskDescription: "Meet with the client to discuss new requirements.",
        taskDate: "2024-11-05",
        category: "Client",
        taskPriority: "Medium",
        taskColors: "#4caf50",
        taskPriorityColors: "#ff9800",
      },
      {
        active: true,
        newtask: true,
        completed: false,
        failed: false,
        taskTitle: "Team Building Event",
        taskDescription:
          "Organize a team-building activity for the department.",
        taskDate: "2024-11-10",
        category: "HR",
        taskPriority: "Low",
        taskColors: "#9c27b0",
        taskPriorityColors: "#ffeb3b",
      },
    ],
  },
  {
    ID: "E002",
    Email: "employee2@example.com",
    Password: "123",
    firstname: "Jane",
    taskNumbers: {
      active: 2,
      newtask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newtask: true,
        completed: false,
        failed: false,
        taskTitle: "Update Website Content",
        taskDescription:
          "Update product descriptions and prices on the website.",
        taskDate: "2024-11-02",
        category: "Marketing",
        taskPriority: "Medium",
        taskColors: "#ff5722",
        taskPriorityColors: "#ff9800",
      },
      {
        active: false,
        newtask: false,
        completed: true,
        failed: false,
        taskTitle: "Social Media Campaign",
        taskDescription:
          "Launch a new social media campaign for the new product.",
        taskDate: "2024-10-30",
        category: "Marketing",
        taskPriority: "Low",
        taskColors: "#ff5722",
        taskPriorityColors: "#ffeb3b",
      },
      {
        active: true,
        newtask: false,
        completed: false,
        failed: true,
        taskTitle: "Quarterly Budget Review",
        taskDescription: "Review and update the department's quarterly budget.",
        taskDate: "2024-11-15",
        category: "Finance",
        taskPriority: "High",
        taskColors: "#607d8b",
        taskPriorityColors: "#d32f2f",
      },
    ],
  },
  {
    ID: "E003",
    Email: "employee3@example.com",
    Password: "123",
    firstname: "Michael",
    taskNumbers: {
      active: 2,
      newtask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newtask: true,
        completed: false,
        failed: false,
        taskTitle: "Product Inventory Check",
        taskDescription: "Conduct a full inventory check for all products.",
        taskDate: "2024-11-03",
        category: "Operations",
        taskPriority: "High",
        taskColors: "#00bcd4",
        taskPriorityColors: "#d32f2f",
      },
      {
        active: true,
        newtask: false,
        completed: false,
        failed: false,
        taskTitle: "Supplier Negotiation",
        taskDescription: "Negotiate terms with suppliers for better rates.",
        taskDate: "2024-11-07",
        category: "Procurement",
        taskPriority: "Medium",
        taskColors: "#795548",
        taskPriorityColors: "#ff9800",
      },
      {
        active: false,
        newtask: false,
        completed: true,
        failed: false,
        taskTitle: "Annual Performance Review",
        taskDescription:
          "Complete the annual performance review for team members.",
        taskDate: "2024-10-25",
        category: "HR",
        taskPriority: "Low",
        taskColors: "#9c27b0",
        taskPriorityColors: "#ffeb3b",
      },
    ],
  },
  {
    ID: "E004",
    Email: "employee4@example.com",
    Password: "123",
    firstname: "Sarah",
    taskNumbers: {
      active: 3,
      newtask: 2,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newtask: true,
        completed: false,
        failed: false,
        taskTitle: "Client Feedback Survey",
        taskDescription: "Collect client feedback on recent projects.",
        taskDate: "2024-11-04",
        category: "Client",
        taskPriority: "Medium",
        taskColors: "#4caf50",
        taskPriorityColors: "#ff9800",
      },
      {
        active: true,
        newtask: false,
        completed: true,
        failed: false,
        taskTitle: "New Marketing Strategy",
        taskDescription: "Develop a new marketing strategy for Q4.",
        taskDate: "2024-10-30",
        category: "Marketing",
        taskPriority: "Low",
        taskColors: "#ff5722",
        taskPriorityColors: "#ffeb3b",
      },
      {
        active: true,
        newtask: true,
        completed: false,
        failed: false,
        taskTitle: "Employee Onboarding",
        taskDescription:
          "Facilitate onboarding for new hires in the marketing team.",
        taskDate: "2024-11-10",
        category: "HR",
        taskPriority: "High",
        taskColors: "#9c27b0",
        taskPriorityColors: "#d32f2f",
      },
      {
        active: true,
        newtask: false,
        completed: false,
        failed: true,
        taskTitle: "Event Planning",
        taskDescription: "Organize the annual company-wide event.",
        taskDate: "2024-11-15",
        category: "Events",
        taskPriority: "High",
        taskColors: "#e91e63",
        taskPriorityColors: "#d32f2f",
      },
    ],
  },
  {
    ID: "E005",
    Email: "employee5@example.com",
    Password: "123",
    firstname: "David",
    taskNumbers: {
      active: 2,
      newtask: 1,
      completed: 2,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newtask: true,
        completed: false,
        failed: false,
        taskTitle: "Server Maintenance",
        taskDescription: "Perform scheduled maintenance on company servers.",
        taskDate: "2024-11-02",
        category: "IT",
        taskPriority: "Medium",
        taskColors: "#9e9e9e",
        taskPriorityColors: "#ff9800",
      },
      {
        active: true,
        newtask: false,
        completed: true,
        failed: false,
        taskTitle: "Database Backup",
        taskDescription: "Backup the company database to secure storage.",
        taskDate: "2024-10-28",
        category: "IT",
        taskPriority: "Low",
        taskColors: "#9e9e9e",
        taskPriorityColors: "#ffeb3b",
      },
    ],
  },
];

const admin = [
  {
    ID: "A001",
    Email: "admin@example.com",
    Password: "123",
    firstname: "admin",
  },
];

export const SetLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};
export const GetLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));

  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };
};