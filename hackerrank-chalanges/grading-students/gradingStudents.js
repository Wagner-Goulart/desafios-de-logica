function gradingStudents(grades) {
    let findValue = grades.map((g) => { 
        return g >= 38 && g % 5 >= 3  ? g - (g % 5) + 5 : g;         
      }); 
    return findValue; 
}

module.exports = { gradingStudents }
