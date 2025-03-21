const universities = [
  {
    uni_id: "NOTAM420",
    university_name: "National Open University of India",
    faculties: [
      {
        faculty_id: "FACULTY01",
        faculty_name: "Faculty of Science",
        dean: {
          name: "Dr. Jane Doe",
          email: "jane.doe@email.com",
          gender: "F",
        },
        departments: [
          {
            dept_id: "DEPT01",
            dept_name: "Mathematics Department",
            head: "Dr. John Doe",
            courses: ["MTH101", "MTH102", "MTH103"],
            faculty_members: ["FACULTYMEM01", "FACULTYMEM02"],
          },
        ],
      },
    ],
    courses: [
      {
        course_code: "MTH101",
        course_title: "Elementary Mathematics",
        course_unit: 3,
        course_lecturer: "FACULTYMEM01",
        enrollment_count: 100,
        offered_semester: "Fall 2023",
      },
      {
        course_code: "MTH102",
        course_title: "Advanced Mathematics",
        course_unit: 4,
        course_lecturer: "FACULTYMEM02",
        enrollment_count: 80,
        offered_semester: "Spring 2024",
      },
    ],
    faculty_members: [
      {
        faculty_mem_id: "FACULTYMEM01",
        faculty_name: "Dr. John Doe",
        email: "john.doe@email.com",
        gender: "M",
        publications: [
          {
            pub_id: "PUB01",
            p_name: "Decrypt AI",
            citation_count: 10,
            date: "2021-02-01",
            publisher: "Nature",
          },
        ],
        patents: [
          {
            patent_id: "PAT01",
            patent_name: "AI in React",
            year: "2021",
            description: "AI-based advancements in React framework",
          },
        ],
        phd_details: {
          title: "PhD in Mathematics",
          year: 2019,
          institution: "University of Lagos",
        },
        experience_years: 15,
      },
      {
        faculty_mem_id: "FACULTYMEM02",
        faculty_name: "Dr. Jane Doe",
        email: "jane.doe@email.com",
        gender: "F",
        publications: [
          {
            pub_id: "PUB02",
            p_name: "BCrypt React",
            citation_count: 5,
            date: "2021-03-15",
            publisher: "Meta",
          },
        ],
        patents: [],
        phd_details: {
          title: "PhD in Advanced Mathematics",
          year: 2018,
          institution: "University of Lagos",
        },
        experience_years: 10,
      },
    ],
    students: [
      {
        student_id: "STUDENT01",
        student_name: "Kubernetes Dooker",
        email: "kub.dook@email.com",
        gender: "M",
        dob: "2000-08-15",
        country: "India",
        major: "Computer Science",
        minor: "Mathematics",
        gpa: 3.8,
        enrollment_year: 2019,
        expected_graduation: 2023,
        courses_enrolled: ["MTH101", "MTH102"],
        publications: ["PUB01", "PUB02"],
        internships: ["Google", "Facebook"],
        certifications: [
          {
            cert_id: "CERT01",
            cert_name: "React",
            year: 2021,
            description: "Advanced React Certification",
          },
        ],
        extra_curricular_activities: ["NCC", "GDSC"],
        handicapped_status: false,
        parent_income: 100000,
      },
      {
        student_id: "STUDENT02",
        student_name: "Annie Lennox",
        email: "annie.lennox@email.com",
        gender: "F",
        dob: "2001-05-20",
        country: "India",
        major: "Physics",
        minor: "Mathematics",
        gpa: 3.9,
        enrollment_year: 2020,
        expected_graduation: 2024,
        courses_enrolled: ["MTH101", "PHY102"],
        publications: [],
        internships: ["IBM"],
        certifications: [
          {
            cert_id: "CERT02",
            cert_name: "Data Science",
            year: 2022,
            description: "Data Science Certification",
          },
        ],
        extra_curricular_activities: ["Basketball Team", "Debate Club"],
        handicapped_status: false,
        parent_income: 150000,
      },
    ],
    library: [
      {
        book_id: "BOOK01",
        book_name: "AI in React",
        author: "Dr. John Doe",
        publisher: "Nature",
        publication_date: "2021-02-01",
        price: 1000,
        pages: 300,
        quantity: 50,
        borrowed_count: 120,
      },
      {
        book_id: "BOOK02",
        book_name: "Advanced Mathematics",
        author: "Dr. Jane Doe",
        publisher: "Meta",
        publication_date: "2021-03-10",
        price: 1200,
        pages: 350,
        quantity: 30,
        borrowed_count: 90,
      },
    ],
    labs: [
      {
        lab_id: "LAB01",
        lab_name: "AI Lab",
        lab_incharge: "Dr. John Doe",
        number_of_systems: 60,
        usage_hours: [
          {
            student_id: "STUDENT01",
            date: "2023-09-01",
            hours_used: 4,
          },
          {
            student_id: "STUDENT02",
            date: "2023-09-02",
            hours_used: 3,
          },
        ],
      },
    ],
    facilities: [
      {
        facility_type: "Ground",
        facility_name: "Football Ground",
        capacity: 1000,
        utilization_rate: 80,
      },
      {
        facility_type: "Gym",
        facility_name: "Indoor Gymnasium",
        capacity: 500,
        utilization_rate: 60,
      },
      {
        facility_type: "Club",
        club_name: "Music and Dance Club",
        members: [
          {
            member_name: "Revanth Karkari",
            role: "President",
            activities: [
              {
                event_name: "Hackathon",
                event_date: "2023-08-15",
                participants: ["STUDENT01", "STUDENT02"],
              },
            ],
          },
        ],
      },
    ],
    total_student_count: 500,
    total_faculty_count: 30,
    feedback: [
      {
        feedback_id: "FEEDBACK01",
        student_id: "STUDENT01",
        feedback_text: "Great University",
        date: "2023-08-01",
      },
      {
        feedback_id: "FEEDBACK02",
        student_id: "STUDENT02",
        feedback_text: "Nice University",
        date: "2023-08-01",
      },
      {
        feedback_id: "FEEDBACK03",
        student_id: "STUDENT03",
        feedback_text: "Nice University",
        date: "2023-08-01",
      },
      {
        feedback_id: "FEEDBACK04",
        student_id: "STUDENT04",
        feedback_text: "Great University",
        date: "2023-08-01",
      },
    ],
  },
];
