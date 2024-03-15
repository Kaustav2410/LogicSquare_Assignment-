// Input array 
const students = [
    { name: "Dhishan Debnath", Roll: 1 },
    { name: "Animesh Gupta", Roll: 2 },
    { name: "Tapas Sen", Roll: 3 },
    { name: "Misti Dutta", Roll: 4 },
    { name: "Chini Misra", Roll: 5 }
];
const Details = [
    { Roll: 5, subjects: { math: 35, english: 56, chemistry: 76, computer: 68 } },
    { Roll: 3, subjects: { math: 33, chemistry: 12, computer: 50, english: 35 } },
    { Roll: 1, subjects: { math: 55, english: 75, chemistry: 76, computer: 94 } },
    { Roll: 4, subjects: { english: 12, chemistry: 85, computer: 68, math: 45 } },
    { Roll: 2, subjects: { math: 55, english: 56, computer: 48, chemistry: 12 } }
];

function generateStudentMarkSheet(students,Details){
    let  studentMarksheet = [] ;
    // Iterate over the details array to calcuate the total marks and status 
    Details.map((studentDetail,index)=>{
        let total=0,status,subject={};
        // Store the info from the students and details array inside a single object 
        // After that push that into the studentMarksheet array
        const personalInfo = students.find((temp)=>{if(temp.Roll===studentDetail.Roll) return temp});

        subject = {name:personalInfo.name,Roll:personalInfo.Roll};
        
        for(let key in studentDetail.subjects){
            subject[key] = studentDetail.subjects[key]; 
            total += (studentDetail.subjects[key]);
        }
        
        total>=200?status="pass":status="fail";
        
        subject = {...subject,total:total,status:status};

        // console.log(subject);
        studentMarksheet.push(subject);
    })
    // smaller entry to show first return 1(ascending order) else -1(descending order)
    return studentMarksheet.sort((a,b)=>{return a.Roll>b.Roll?1:-1});
}

let ans =generateStudentMarkSheet(students,Details);
console.log(ans);


