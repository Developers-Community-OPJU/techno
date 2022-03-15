const teams = [
  {
    name: "Patron",
    team: [
      {
        name: "Ms. Shallu Jindal",
        image: require("@/assets/shallu.png"),
        designation: "Chancellor",
      },
    ],
  },
  {
    name: "Leadership Team",
    team: [
      {
        name: "Dr. R.D Patidar",
        image: require("@/assets/RD.png"),
        designation: "Vice Chancellor, OPJU",
      },
      {
        name: "Mr. Anurag Vijaywargya",
        image: require("@/assets/vijay.png"),
        designation: "Registrar, OPJU",
      },
    ],
  },
  {
    name: "Faculty Organizing Team",
    team: [
      {
        name: "Dr. Mahesh Bhiwapurkar",
        image: require("@/assets/mahesh.png.png"),
        designation: "Mentors",
        contact: "8120062259",
      },
      {
        name: "Dr. Sanjay Singh",
        image: require("@/assets/sanjay.png.png"),
        designation: "Mentors",
      },
      {
        name: "Dr. Swati Verma",
        image: require("@/assets/swati.png.png"),
        designation: "Convener",
        contact: "7879248327",
      },
      {
        name: "Dr. Trinath Talapaneni",
        image: require("@/assets/trinath.png.png"),
        designation: "Convener",
        contact: "8763333171",
      },
      {
        name: "Dr. Nitesh Bhardwaj",
        image: require("@/assets/nitesh.png.png"),
        designation: "Co-Convener",
        contact: "9109909256",
      },
      {
        name: "Dr. Imran Quadri",
        image: require("@/assets/imran.png.png"),
        designation: "Co-Convener",
        contact: "7428695364",
      },
      {
        name: "Prof. Tulika Gupta",
        image: require("@/assets/tullika.png.png"),
        designation: "Co-Convener",
        contact: "9827963281",
      },
      {
        name: "Prof. Pushpanjali",
        image: require("@/assets/puspa.png.png"),
        designation: "Co-Convener",
        contact: "8358880501",
      },
      {
        name: "Dr. Rekha Sharma",
        image: require("@/assets/rekha.png.png"),
        designation: "Co-Convener",
        contact: "8077277676",
      },
    ],
  },
  {
    name: "Design & Development",
    team: [
      {
        name: "Aman Vishwakarma",
        image: require("@/assets/aman.png"),
        designation: "Team Lead",
      },
      {
        name: "Subrat Jena",
        image: require("@/assets/subhrat.png"),
        designation: "Developer",
      },
      {
        name: "Simrella Agrawal",
        image: require("@/assets/simrella.png"),
        designation: "Developer",
      },
      {
        name: "Utkarsh Dixit",
        image: require("@/assets/utkarsh.png"),
        designation: "Developer",
      },
      {
        name: "Akshita Soni",
        image: require("@/assets/akshita.png"),
        designation: "Developer",
      },
      {
        name: "Swati Mishra",
        image: require("@/assets/swati.png"),
        designation: "Developer",
      },
      {
        name: "Sourabh Singh",
        image: require("@/assets/sourabh.png"),
        designation: "Designer",
      },
    ],
  },
  {
    name: "Convenor (Students)",
    team: [
      {
        name: "Sushant Mukherjee",
        branch: "Mech",
        semester: "8th Sem",
        contact: 6260239880,
      },
      {
        name: "Anoushka Sharma",
        branch: "BBA",
        semester: "6th sem",
        contact: 8349239114,
      },
      {
        name: "Nikhil Nivedam Vatsa",
        branch: "Meta",
        semester: "8th Sem",
        contact: 8298071805,
      },
      {
        name: "Suman Sahu",
        branch: "BBA",
        semester: "6th Sem",
        contact: 7024518638,
      },
      {
        name: "Soumya Singh",
        branch: "BBA",
        semester: "6th Sem",
        contact: 7224085085,
      },
      {
        name: "Vipul Kumar",
        branch: "MBA",
        semester: "2th Sem",
        contact: 7224898002,
      },
      {
        name: "Suryaranjan Satapathy",
        branch: "BBA",
        semester: "6th Sem",
        contact: 7869199650,
      },
      {
        name: "Suraj Yadav",
        branch: "Mtech Mech",
        semester: "2th Sem",
        contact: 7879032082,
      },
      {
        name: "Khyati Singh Chandel",
        branch: "BBA",
        semester: "6th Sem",
        contact: 8349658484,
      },
      {
        name: "Prakash Kumar Nishad",
        branch: "BBA",
        semester: "6th Sem",
        contact: 7617346510,
      },
      {
        name: "Ranjit Kumar Sharma",
        branch: "MBA",
        semester: "4th Sem",
        contact: 8719943229,
      },
      {
        name: "Ritesh Kumar Dansena",
        branch: "Mech",
        semester: "6th Sem",
        contact: 9109948117,
      },
      {
        name: "JayveerSingh",
        branch: "Mtech Mech",
        semester: "2th Sem",
        contact: 9554287278,
      },
      {
        name: "Sakshi Agrawal",
        branch: "Mtech Civil",
        semester: "1st Sem",
        contact: 9993599619,
      },
    ],
  },
  {
    name: "Co-convenor (Students)",
    team: [
      {
        name: "Ritisha Agrawal",
        branch: "EE",
        semester: "6th Sem",
        contact: 7587230147,
      },
      {
        name: "Ashish Kumar Sharma",
        branch: "EE",
        semester: "6th Sem",
        contact: 6207808604,
      },
      {
        name: "V.Ujjwala",
        branch: "EE",
        semester: "6th Sem",
        contact: 7879911820,
      },
      {
        name: "Abhinav Sharma ",
        branch: "Civil",
        semester: "6th Sem",
        contact: 7477028878,
      },
      {
        name: "Aditya Shekhar",
        branch: "Mech",
        semester: "6th Sem",
        contact: 8529768326,
      },
      {
        name: "Chirag Mishra",
        branch: "Mech",
        semester: "6th Sem",
        contact: 8871724185,
      },
      {
        name: "Dindayal Prajapati",
        branch: "Meta",
        semester: "6th Sem",
        contact: 7489559277,
      },
      {
        name: "Shubham Kumar Addi",
        branch: "Meta",
        semester: "6th Sem",
        contact: 9142716619,
      },
      {
        name: "Akhilesh",
        branch: "Meta",
        semester: "6th Sem",
        contact: 8789916216,
      },
      {
        name: "Gaurav Sahu",
        branch: "Civil",
        semester: "6th Sem",
        contact: 9981319289,
      },
      {
        name: "Shushant Mishra",
        branch: "CSE",
        semester: "6th Sem",
        contact: 7067718336,
      },
      {
        name: "Mllika Sharma",
        branch: "Civil",
        semester: "6th Sem",
        contact: 8085450445,
      },
      {
        name: "Gurjot Singh",
        branch: "Mech",
        semester: "6th Sem",
        contact: 8720030973,
      },
      {
        name: "Sakshi Dwivedi",
        branch: "CSE",
        semester: "6th Sem",
        contact: 8827798674,
      },
      {
        name: "Yogesh Kumar",
        branch: "CSE",
        semester: "6th Sem",
        contact: 7225963099,
      },
    ],
  },
];

export default teams;
